"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "sonner";


import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/authkey";
import DForm from "@/components/forms/DForm";
import DInput from "@/components/forms/DInput";

// Define the schema for form validation
const formSchema = z.object({
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .nonempty("Password is required"),

});

const ResetPassword = () => {
    const [error, setError] = useState<string | null>(null);
    const [resetPassword, { isLoading }] = useResetPasswordMutation(); // Use the correct hook from your API slice
    const router = useRouter();
    const searchParams = useSearchParams();


    // Extract id and token from URL
    const id = searchParams.get('userId');
    const token = searchParams.get('token');

    useEffect(() => {
        if (!id || !token) {
            router.push('/'); // Redirect if id or token is missing
        }
    }, [id, token, router]);

    // Handle form submission
    const handleUpdatePassword = async (data: FieldValues) => {
        setToLocalStorage(authKey, token as string)
        console.log(data, id)
        try {
            const passRestData = { ...data, id }
            const res = await resetPassword(passRestData).unwrap();
            console.log(res)
            if (res.success) {
                toast.success("Your password has been updated successfully.");
                // router.push("/");
            }
        } catch (error: any) {
            setError(error?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <div className="p-2 md:p-4 container min-h-[80vh] flex items-center justify-center">
            <div className="bg-gray-100 shadow-md p-8 w-full max-w-md">
                <div className="mb-10">
                    <h2 className="text-center text-4xl md:text-5xl text-primary w-full">
                        Reset Password
                    </h2>
                    <p className="text-center mt-4 text-md md:text-lg">
                        Enter your new password below.
                    </p>
                </div>
                <DForm resolver={zodResolver(formSchema)} onSubmit={handleUpdatePassword}>
                    <DInput
                        name="password"
                        type="text"
                        label="Enter A New Password"
                        placeholder="example@gmail.com"
                        required
                    />

                    <Button disabled={isLoading} className="text-white bg-secondary w-full mt-5" type="submit">
                        {isLoading ? "Updating..." : "Update Password"}
                    </Button>

                    {error && <p className="mt-2 text-red-500">{error}</p>}

                    <div className="border-t mt-5 flex items-center gap-2 justify-center pt-5">
                        <p>Remember your password?</p>
                        <Link href="/login" className="font-bold text-secondary">
                            Log In
                        </Link>
                    </div>
                </DForm>
            </div>
        </div>
    );
};

export default ResetPassword;
