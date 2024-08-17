"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import "./checkbox.css";
import { z } from "zod";
import { FieldValues } from "react-hook-form";
import { useRegisterMutation } from "@/redux/api/authApi";
import { toast, Toaster } from "sonner";
import DInput from "@/components/forms/DInput";
import DForm from "@/components/forms/DForm";

// // zod validation schema
const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    username: z.string().min(1, "User name is required"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterPage = () => {
  const [error, setError] = useState("");
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [register, { isLoading }] = useRegisterMutation();

  const handleSignUp = async (data: FieldValues) => {
    setError("");
    try {
      const { confirmPassword, ...userData } = data;
      const res = await register(userData).unwrap();
      console.log(res);
      if (res.success && res.data.id) {
        toast.success(res.message);
        // alert(res.message)
      }
    } catch (error: any) {
      setError(error.data.message);
      console.error(error.data.message);
    }
  };

  return (
    <div className="container py-12 px-5 lg:px-0">
      <Toaster />
      <div className="max-w-xl lg:max-w-2xl  mx-auto border border-t-8 border-t-primary p-12 rounded-md pb-16 shadow-md">
        <div className="mb-10">
          <h2 className="text-center text-4xl md:text-5xl text-primary w-full">
            Register
          </h2>
          <p className="text-center mt-4 text-md md:text-lg">
            Create an account to watch auctions, to bid or to sell.
          </p>
        </div>
        <DForm resolver={zodResolver(signUpSchema)} onSubmit={handleSignUp}>
          <DInput
            type="text"
            name="firstName"
            label="First name"
            placeholder="Your first name"
          />
          <DInput
            type="text"
            name="lastName"
            label="Last name"
            placeholder="Your last name"
          />
          <DInput
            type="email"
            name="email"
            label="Email"
            placeholder="example@gmail.com"
          />
          <DInput
            type="text"
            name="username"
            label="User name"
            placeholder="Enter a user name"
          />
          {/* password field  */}
          <div>
            <div className="flex items-center">
              <DInput
                name="password"
                className="w-full"
                type={showPassword1 ? "text" : "password"}
                label="Password"
                placeholder="Type your password"
              />
              <div
                onClick={() => setShowPassword1(!showPassword1)}
                className="inline-block -ml-8 mt-4"
              >
                {showPassword1 ? (
                  <IoIosEyeOff size={25} />
                ) : (
                  <IoIosEye size={25} />
                )}
              </div>
            </div>
          </div>

          {/* confirm password field  */}
          <div>
            <div className="flex items-center">
              <DInput
                name="confirmPassword"
                className="w-full"
                type={showPassword2 ? "text" : "password"}
                label="Retype password"
                placeholder="Type your password again"
              />
              <div
                onClick={() => setShowPassword2(!showPassword2)}
                className="inline-block -ml-8 mt-4"
              >
                {showPassword2 ? (
                  <IoIosEyeOff size={25} />
                ) : (
                  <IoIosEye size={25} />
                )}
              </div>
            </div>
          </div>
          {/* client agree to terms & condition  */}
          <div className="flex items-center gap-3 mt-5">
            <div className="relative">
              <input
                id="clientAgree"
                type="checkbox"
                className="custom-checkbox"
                onChange={() => setIsDisabled(!isDisabled)}
                checked={!isDisabled}
              />
              <label
                htmlFor="clientAgree"
                className="text-sm font-normal ml-3 cursor-pointer"
              >
                I agree to the applicable terms and conditions and that my
                personal data will be collected, used, and shared in accordance
                with our privacy policy and cookie policy.
              </label>
            </div>
          </div>

          <Button
            className="text-white bg-secondary w-full mt-10"
            disabled={isDisabled || isLoading}
          >
            {isLoading ? "Loading..." : " Sign Up"}
          </Button>
        </DForm>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
