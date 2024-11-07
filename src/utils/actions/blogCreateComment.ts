"use server";

interface ICommentProps {
  userId: string | undefined;
  postId: string | undefined;
  content?: string | undefined;
}

export const blogComment = async (data: ICommentProps) => {
  const res = await fetch(`${process.env.BACKEND_URL}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "default",
    next: {
      tags: ["blogCommentValidation"],
    },
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(errorMessage);
  }

  const blogComment = await res.json();

  return blogComment;
};
