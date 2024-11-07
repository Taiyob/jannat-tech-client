/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerUser } from "@/utils/actions/registerUser";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type UserData = {
  name: string;
  email: string;
  role: string;
  password: string;
  phone: string;
  address: string;
};

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const res = await registerUser(data);

      if (res?.success) {
        toast.success("Registration success");
        router.push("/auth/login");
      }
    } catch (error: any) {
      const message = error.message || "Registration failed!";
      toast.error(message);
      // throw new Error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Register
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
          {errors.name && (
            <span className="text-red-600 text-sm">
              {errors.name.message?.toString()}
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
          {errors.email && (
            <span className="text-red-600 text-sm">
              {errors.email.message?.toString()}
            </span>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
          {errors.phone && (
            <span className="text-red-600 text-sm">
              {errors.phone.message?.toString()}
            </span>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            {...register("imageUrl")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
          {errors.password && (
            <span className="text-red-600 text-sm">
              {errors.password.message?.toString()}
            </span>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Address
          </label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          ></textarea>
          {errors.address && (
            <span className="text-red-600 text-sm">
              {errors.address.message?.toString()}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
        <p>
          Already registerd? Please{" "}
          <Link className="text-xl text-blue-300" href={`/auth/login`}>
            Log in
          </Link>
        </p>
      </form>

      {/* Or Login with Social */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-2">Or Login With</p>
        <div className="space-y-2">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            type="button"
            className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            Login with Google
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            type="button"
            className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
