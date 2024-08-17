"use client";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import DForm from "@/components/forms/DForm";
import DInput from "@/components/forms/DInput";
import { Button } from "../ui/button";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from "@/redux/api/authApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { storeUserInfo } from "@/service/actions/auth.service";
import { userLogin } from "@/service/actions/userLogin";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('');
  const router = useRouter()


  // Default values for the form fields
  const defaultValues = {
    email: "fbelalhossain2072@gmail.com",
    password: "securePassword12"
  };
  // signin function
  const handleSignin = async (data: FieldValues) => {
    setIsLoading(true)
    try {
      const res = await userLogin(data);
      if (res?.data?.token) {
        toast.success(res?.message);
        storeUserInfo({ token: res?.data?.token });
        router.push("/");
        setIsLoading(false)
      } else {
        setError(res.message);
        setIsLoading(false)
      }
    } catch (err: any) {
      setError(err.message);
      // console.error(err);
      setIsLoading(false)
    }

  };
  console.log(error)
  return (
    <div className="p-2 md:p-4">
      <div className="mb-10">
        <h2 className="text-center text-4xl md:text-5xl text-primary w-full">
          Sign In
        </h2>
        <p className="text-center mt-4 text-md md:text-lg">
          Please login to your account
        </p>
      </div>
      <DForm resolver={zodResolver(formSchema)} onSubmit={handleSignin} defaultValues={defaultValues}>
        <DInput
          name="email"
          type="email"
          label="Email"
          placeholder="example@gamil.com"
          required
        />
        <div className="">
          <div className="flex items-center relative">
            <DInput
              name="password"
              className="w-full"
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Enter password"
              required
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="inline-block absolute top-[60%] right-4"
            >
              {showPassword ? (
                <IoIosEyeOff size={25} />
              ) : (
                <IoIosEye size={25} />
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 text-right">
          <Link href={"forgotten-password"} className="text-sm">
            Forgotten password ?
          </Link>
        </div>
        <Button className="text-white bg-secondary w-full mt-5"> {isLoading ? "Loading..." : " Sign Up"}</Button>
        {
          error && <p className="mt-2 text-red-500">{error}</p>
        }

        <div className="border-t mt-5 flex items-center gap-2 justify-center pt-5">
          <p>Don&apos;t have an account?</p>
          <Link href={"#"} className="font-bold text-secondary">
            Sign up
          </Link>
        </div>
      </DForm>
    </div>
  );
};

export default LoginForm;
