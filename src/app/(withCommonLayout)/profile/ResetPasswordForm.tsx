import React, { useState, ChangeEvent, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { data } from './../../../utils/bids';

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    confirmPassword: "",
  });
  const [changePassword, { isLoading }] = useChangePasswordMutation()
  const [passwordVisibility, setPasswordVisibility] = useState<{
    [key: string]: boolean;
  }>({
    currentPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (field: string) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const changPassData = { newPassword: formData.confirmPassword, oldPassword: formData.currentPassword }
      const res = await changePassword(changPassData).unwrap()
      if (res?.data?.message) {
        toast.success(res?.data?.message)
      }
      console.log(res)
    } catch (error: any) {
      toast.error(error?.data?.message)
    }

  };

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-12 gap-x-3 gap-y-5 pb-5"
      onSubmit={handleSubmit}
    >
      <div className="lg:col-span-6 col-span-1">
        <Label htmlFor="currentPassword" className="mb-2 inline-block">
          Current Password
        </Label>
        <div className="relative">
          <Input
            type={passwordVisibility.currentPassword ? "text" : "password"}
            className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
            name="currentPassword"
            id="currentPassword"
            required
            value={formData.currentPassword}
            onChange={handleChange}
          />
          <div
            onClick={() => togglePasswordVisibility("currentPassword")}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {passwordVisibility.currentPassword ? (
              <IoIosEyeOff size={25} />
            ) : (
              <IoIosEye size={25} />
            )}
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-1">
        <Label htmlFor="confirmPassword" className="mb-2 inline-block">
          Confirm Password
        </Label>
        <div className="relative">
          <Input
            type={passwordVisibility.confirmPassword ? "text" : "password"}
            className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
            name="confirmPassword"
            id="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div
            onClick={() => togglePasswordVisibility("confirmPassword")}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {passwordVisibility.confirmPassword ? (
              <IoIosEyeOff size={25} />
            ) : (
              <IoIosEye size={25} />
            )}
          </div>
        </div>
      </div>
      <Button disabled={isLoading} className="text-white lg:col-span-4 col-span-1 py-6" type="submit">
        {isLoading ? "Loading..." : "  Submit"}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
