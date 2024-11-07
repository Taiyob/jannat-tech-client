"use server";

import { IBloggPostProps } from "@/components/Blog/BlogCreate";

export const blogPost = async (
  data: IBloggPostProps,
  token: string | undefined
) => {
  const res = await fetch(`${process.env.BACKEND_URL}/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(data),
    cache: "default",
    next: {
      tags: ["blogPostvalidate"],
    },
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(errorMessage);
  }

  const blogPost = await res.json();

  return blogPost;
};
