/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { blogLike } from "@/utils/actions/blogLike";
import React, { useEffect, useState } from "react";

const LikeButton = ({
  userId,
  postId,
  blog,
}: {
  userId: string | undefined;
  postId: string | undefined;
  blog: any;
}) => {
  const [liked, setLiked] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIfLiked = async () => {
      if (userId && postId) {
        const isLiked = blog.likeIds && blog.likeIds.includes(userId);
        setLiked(isLiked);
      }
    };

    if (userId && postId) {
      checkIfLiked();
    }
  }, [userId, postId, blog.likeIds]);

  const handleLike = async () => {
    if (!userId || !postId) return;

    const likeInfo = { userId, postId };
    try {
      const action = liked ? "unlike" : "like";
      const like = await blogLike({ ...likeInfo, action });

      if (like?.data?.liked === true) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    } catch (error) {
      console.error("Error liking/unliking post:", error);
    }
  };

  if (liked === null) {
    return <button disabled>Loading...</button>;
  }

  return (
    <>
      <button onClick={handleLike} className="hover:underline">
        {liked ? "Unlike" : "Like"}
      </button>
    </>
  );
};

export default LikeButton;

//   useEffect(() => {
//     const fetchLikeStatus = async () => {
//       if (userId && postId) {
//         try {
//           const likeData = { userId, postId };
//           const isLiked = await blogLike(likeData); // Assuming this returns a boolean value
//           setLiked(isLiked);
//         } catch (error) {
//           console.error("Error fetching like status:", error);
//         }
//       }
//     };

//     fetchLikeStatus();
//   }, [userId, postId]);
