/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

//import { loginUser } from "@/utils/actions/loginUser";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  // const onSubmit = async (data: FormValues) => {
  //   try {
  //     const res = await loginUser(data);
  //     console.log(res);
  //     console.log(res?.data);

  //     if (res?.data?.token) {
  //       toast.success("Login success");
  //       localStorage.setItem("accessToken", res?.data?.token);
  //       router.push("/");
  //     }
  //   } catch (error: any) {
  //     const message = error.message || "Login failed!";
  //     toast.error(message);
  //   }
  // };

  const onSubmit = async (data: FormValues) => {
    console.log("hiiii");
    const result = await signIn("credentials", {
      callbackUrl: "/",
      //redirect: false,
      email: data?.email,
      password: data?.password,
    });

    console.log("Check login credentials:", result);

    if (result?.error) {
      toast.error("Invalid username or password");
    } else {
      toast.success("Logged In successfully");
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <p>
          New in this web? Please{" "}
          <Link className="text-xl text-blue-300" href={`/auth/register`}>
            Registered
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

export default LoginPage;
