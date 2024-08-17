"use client";

import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Input } from "../ui/input";

const RegisterInputFiled = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center">
      <Input
        className="border border-slate-200 focus-visible:ring-green-500 focus-visible:ring-1 block w-full px-4 py-2"
        type={`${showPassword ? "text" : "password"}`}
        name="password"
        id="registerPassword"
        placeholder="Enter your password"
        required
      />
      <div
        onClick={() => setShowPassword(!showPassword)}
        className="inline-block -ml-10 "
      >
        {showPassword ? <IoIosEyeOff size={25} /> : <IoIosEye size={25} />}
      </div>
    </div>
  );
};

export default RegisterInputFiled;
