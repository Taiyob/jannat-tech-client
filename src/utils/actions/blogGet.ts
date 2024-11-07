"use server";

export const blogGetAll = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blog`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `${nextAuthToken?.value}`,
    },
    cache: "default",
    next: {
      tags: ["blogPostvalidate"],
    },
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    console.error("Error fetching blogs:", errorMessage);
    throw new Error(errorMessage);
  }

  const blogs = await res.json();
  return blogs;
};
