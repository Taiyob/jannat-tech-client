/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

const BlogReactCount = ({ reactions }: any) => {
  const likeCount = reactions.length || 0;

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center">
        <span className="mr-2 text-pink-500">❤️</span>
        <span>{likeCount}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-yellow-500">😂</span>
        <span></span>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-red-500">💖</span>
        <span></span>
      </div>
    </div>
  );
};

export default BlogReactCount;
