"use client";
import { useState } from "react";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForgottenPasswordMutation } from "@/redux/api/authApi";
import { Button } from "@/components/ui/button";
import DForm from "@/components/forms/DForm";
import DInput from "@/components/forms/DInput";

// Define the schema for form validation
const formSchema = z.object({
    email: z
        .string()
        .email("Invalid email address")
        .nonempty("Email is required"),
});

const ForgottenPassword = () => {
    const [error, setError] = useState<string | null>(null);
    const [forgotPassword, { isLoading }] = useForgottenPasswordMutation(); // Use the correct hook from your API slice
    const router = useRouter();

    // Handle form submission
    const handleForgottenPassword = async (data: FieldValues) => {
        console.log(data)
        try {
            
            const res = await forgotPassword(data).unwrap();
            console.log(res)
            
            if (res.success) {
                toast.success("A password reset link has been sent to your email.");
            }

            // Optionally redirect to another page
            router.push("/"); 
        } catch (error: any) {
            // Handle errors and provide feedback
            console.log(error)
            setError(error?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <div className="p-2 md:p-4 container  min-h-[80vh] flex items-center justify-center">
            <div className="bg-gray-100 shadow-md p-8">
                <div className="mb-10">
                    <h2 className="text-center text-4xl md:text-5xl text-primary w-full">
                        Forgotten Password
                    </h2>
                    <p className="text-center mt-4 text-md md:text-lg">
                        Enter your email address and we will send you a link to reset your password.
                    </p>
                </div>
                <DForm resolver={zodResolver(formSchema)} onSubmit={handleForgottenPassword}>
                    <DInput
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="example@gmail.com"
                        required
                    />

                    <Button disabled={isLoading} className="text-white bg-secondary w-full mt-5" type="submit">
                        {isLoading ? "Sending..." : "Send Reset Link"}
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

export default ForgottenPassword;
