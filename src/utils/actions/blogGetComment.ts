"use server";

export const blogGetCommentByPostId = async (postId: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/comment/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "default",
    next: {
      tags: ["blogCommentValidation"],
    },
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(errorMessage);
  }

  const blogGetComment = await res.json();

  return blogGetComment;
};
