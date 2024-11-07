/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IBlogs } from "@/app/blog/page";
import { blogComment } from "@/utils/actions/blogCreateComment";
import { blogGetCommentByPostId } from "@/utils/actions/blogGetComment";

interface CommentsModalProps {
  blog: IBlogs;
  session: any;
}

// Modal component to display comments
const CommentsModal: React.FC<CommentsModalProps> = ({
  blog,
  session,
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(blog.commentIds || []);

  // Function to open/close the modal
  const handleToggleModal = async () => {
    setIsModalOpen((prev) => !prev);

    if (!isModalOpen) {
      try {
        const fetchedComments = await blogGetCommentByPostId(blog._id);
        setComments(fetchedComments.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  };

  const handlePostComment = async () => {
    if (!commentText.trim()) return;

    try {
      const newComment = await blogComment({
        userId: session?.id,
        postId: blog._id,
        content: commentText,
      });

      setComments((prevComments: any) => [...prevComments, newComment.data]);
      setCommentText("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div>
      {/* Button to open modal */}
      <button className="hover:underline" onClick={handleToggleModal}>
        Comment
      </button>

      {/* Conditionally render modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal content */}
          <div className="bg-gray-900 p-6 rounded-lg w-11/12 max-w-3xl text-white">
            {/* Header: Post information */}
            <div className="mb-4">
              <div className="flex items-center">
                <Image
                  className="rounded-full border-4 border-black w-10 h-10"
                  src={
                    session?.user?.image ||
                    "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg"
                  }
                  alt="User avatar"
                  height={50}
                  width={50}
                />
                <div className="ml-3">
                  <h3 className="font-bold text-gray-300">
                    {session?.user?.name}
                  </h3>
                  {/* <p className="text-gray-400 text-sm">{}</p> */}
                </div>
              </div>

              <div className="mt-4">
                <p>Content</p>
              </div>
            </div>

            {/* Scrollable comments section */}
            <div className="overflow-y-auto max-h-64 mb-4 bg-gray-800 p-4 rounded-lg">
              {/* Displaying comments */}
              {comments.map((comment: any, index: number) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center">
                    <Image
                      className="rounded-full w-8 h-8 mr-2"
                      src="https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg"
                      alt="Commenter avatar"
                      height={30}
                      width={30}
                    />
                    <div>
                      <h4 className="font-bold text-gray-300">
                        {comment.userId?.name || "Unknown User"}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {new Date(comment.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="ml-10 text-gray-400">{comment.content}</p>
                </div>
              ))}
            </div>

            {/* Comment input area */}
            <div className="border-t border-gray-700 pt-4">
              <textarea
                className="w-full bg-gray-800 text-white rounded-lg p-2"
                placeholder="Write a comment..."
                name="content"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              ></textarea>
              <div className="flex justify-end mt-2">
                <button
                  className="bg-gray-700 text-white py-2 px-4 rounded mr-2"
                  onClick={handleToggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded"
                  onClick={handlePostComment}
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsModal;
