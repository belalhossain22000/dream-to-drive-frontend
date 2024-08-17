"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
// import "./checkbox.css";
import { z } from "zod";
import { FieldValues } from "react-hook-form";
import { useRegisterMutation } from "@/redux/api/authApi";
import StripePayment from "./StripePayment";
import DForm from "@/components/forms/DForm";
import DInput from "@/components/forms/DInput";



// // zod validation schema
const bankAccountValidation = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    username: z.string().min(1, "User name is required"),
    password: z.string().min(6, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 8 characters long"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

const PaymentForm = () => {

    const handleSubmit = async (data: FieldValues) => {
        console.log(data)
    };


    return (
        <div className="container py-12 px-5 lg:px-0">
            <div className="max-w-[70%] lg:max-w-2xl  mx-auto border border-t-8 border-t-primary p-12 rounded-md pb-16 shadow-md">
                <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl text-primary w-full text-left">
                        Add Payment Card
                    </h2>
                    <p className="text-left mt-4 text-md md:text-lg">
                        When you bid or buy with us you are entering a legal contract, and we require payment card details to validate your identity. No payment will be taken now.
                    </p>
                    <p className="text-left">The address you provide must match that of the card.</p>
                </div>
                <DForm resolver={zodResolver(bankAccountValidation)} onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <StripePayment />
                        </div>
                        <div>
                            <DInput
                                type="text"
                                name="firstName"
                                label="First name"
                                placeholder="Your first name"
                            />
                        </div>
                        <div>
                            <DInput
                                type="text"
                                name="lastName"
                                label="Last name"
                                placeholder="Your last name"
                            />
                        </div>
                        <div className="col-span-2">
                            <DInput
                                type="tel"
                                name="phone"
                                label="Phone Number"
                                placeholder="+8801940075789"
                            />
                        </div>
                        <div>

                            <DInput
                                type="text"
                                name="billingAddress1"
                                label="Billing Address 1"
                                placeholder="Enter Billing Address 1"
                            />
                        </div>
                        <div>

                            <DInput
                                type="text"
                                name="billingAddress2"
                                label="Billing Address 2"
                                placeholder="Enter Billing Address 1"
                            />
                        </div>
                        <div>
                            <DInput
                                type="text"
                                name="city"
                                label="Town/City"
                                placeholder="Enter town or city "
                            />
                        </div>
                        <div>
                            <DInput
                                type="text"
                                name="country"
                                label="Country/State"
                                placeholder="Enter country/state"
                            />
                        </div>
                        <div>
                            <DInput
                                type="text"
                                name="postcode"
                                label="Postcode/Zipcode"
                                placeholder="Enter Postcode/Zipcode"
                            />
                        </div>
                        <div>
                            <DInput
                                type="text"
                                name="country"
                                label="Country"
                                placeholder="Enter Country"
                            />
                        </div>
                        <div></div>
                    </div>

                    <Button
                        className="text-white bg-secondary w-full mt-10"

                    >
                        Add Card
                    </Button>
                </DForm>
            </div>
        </div>
    );
};

export default PaymentForm;
