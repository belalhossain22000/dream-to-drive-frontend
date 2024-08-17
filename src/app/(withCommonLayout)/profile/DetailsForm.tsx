import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGetMyProfileQuery, } from "@/redux/api/authApi";
import { useUpdateUsersProfileMutation } from "@/redux/api/userApi";
import { toast } from "sonner";

// Define the form data type
interface FormData {
  // id: string
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

// Define the user data type
interface UserData {
  id: string
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
}
const DetailsForm = () => {
  const [error, setError] = useState('');
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const user: UserData = data?.data || {};

  const [updateUsersProfile, { isLoading: updating }] = useUpdateUsersProfileMutation()
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        username: user.username || "",
        email: user.email || "",
      });
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await updateUsersProfile(formData).unwrap()
      if (res?.data?.id) {
        toast(res.message)
      }
    } catch (error: any) {
      console.log(error)
      setError(error.message)
    }

  };

  if (isLoading) {
    return <h1 className="container">Loading ...</h1>;
  }

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-12 gap-x-3 gap-y-5 pb-5"
      onSubmit={handleSubmit}
    >
      <div className="lg:col-span-6 col-span-1">
        <Label htmlFor="firstName" className="mb-2 inline-block">
          First Name
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="firstName"
          id="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="lg:col-span-6 col-span-1">
        <Label htmlFor="lastName" className="mb-2 inline-block">
          Last Name
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="lastName"
          id="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="lg:col-span-6 col-span-1">
        <Label htmlFor="username" className="mb-2 inline-block">
          Username
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="username"
          id="username"
          required
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="lg:col-span-6 col-span-1">
        <Label htmlFor="email" className="mb-2 inline-block">
          Email
        </Label>
        <Input
          type="email"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled
        />
      </div>
      <Button disabled={updating} className="text-white lg:col-span-4 col-span-1 py-6" type="submit">
        {updating ? "Loading..." : "Submit"}
      </Button>
      {
        error && <p className="mt-2 text-red-500">{error}</p>
      }
    </form>
  );
};

export default DetailsForm;
