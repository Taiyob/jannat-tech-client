"use server";

import { FormValues } from "@/app/(withoutLayout)/auth/login/page";

export const loginUser = async (data: FormValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/auth/signin`, {
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
  console.log("From login API: ", userInfo);

  return userInfo;
};
