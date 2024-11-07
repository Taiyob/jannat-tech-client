"use server";

import { UserData } from "@/app/(withoutLayout)/auth/register/page";

export const registerUser = async (data: UserData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(errorMessage);
  }

  const userInfo = await res.json();

  return userInfo;
};
