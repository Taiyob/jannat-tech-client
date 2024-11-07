"use server";

interface ILikeProps {
  userId: string | undefined;
  postId: string | undefined;
  action?: "like" | "unlike";
}

export const blogLike = async (data: ILikeProps) => {
  const res = await fetch(`${process.env.BACKEND_URL}/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "default",
    next: {
      tags: ["blogLikeValidation"],
    },
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(errorMessage);
  }

  const blogLike = await res.json();

  return blogLike;
};
