"use client";

import React, { useState } from "react";
import { FiVideo, FiImage, FiSmile } from "react-icons/fi";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import { blogPost } from "@/utils/actions/blogPost";
import { getSession } from "next-auth/react";
import { revalidateTag } from "next/cache";

// Dynamically load ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export interface ISessionProps {
  id: string;
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    id?: string | null | undefined;
  };
}

export interface IBloggPostProps {
  content: string | null | undefined;
  userId: string | null | undefined;
  imageUrl?: string | null | undefined;
}

const BlogCreate = ({ session }: { session: ISessionProps | null }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to open modal
  const handleInputClick = () => {
    setModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Handle image file input
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleImageUpload = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
        mode: "cors",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Upload error:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data?.status === 200) {
        return data?.data?.display_url; // Return the uploaded image URL
      } else {
        console.error("Image upload failed:", data?.error?.message);
        return null;
      }
    } catch (error) {
      console.error("Failed to upload image:", error);
      return null;
    }
  };

  // Function to handle post creation
  const handleSubmitPost = async () => {
    if (!postContent.trim()) return;

    try {
      setLoading(true);

      const sessionToken = await getSession();

      if (!sessionToken) {
        throw new Error("Not authenticated");
      }

      // Extract the token from the session object
      const token = sessionToken?.accessToken;

      const parser = new DOMParser();
      const doc = parser.parseFromString(postContent, "text/html");
      const plainTextContent = doc.body.textContent || "";

      let imageUrl = null;
      if (imageFile) {
        imageUrl = await handleImageUpload(imageFile);
      }

      const postData = {
        content: plainTextContent,
        userId: session!.id || "Google or Github",
        imageUrl,
      };

      // backend function to create the post
      await blogPost(postData, token);

      setModalOpen(false);
      setPostContent("");
      setImageFile(null);
      revalidateTag("blogPostvalidate");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Input-like section */}
      <div className="bg-gray-900 shadow-md rounded-lg p-4 mb-6 text-white">
        <div className="flex items-center mb-4">
          <Image
            className="w-10 h-10 bg-gray-700 rounded-full mr-3"
            src={
              session?.user?.image ||
              "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            }
            height={100}
            width={100}
            alt="image"
          />
          {/* Clickable area instead of input */}
          <div
            onClick={handleInputClick}
            className="w-full bg-gray-800 text-gray-300 py-2 px-4 rounded-full cursor-pointer"
          >
            What’s on your mind, {session?.user?.name}?
          </div>
        </div>

        <hr className="border-gray-700 mb-4" />

        <div className="flex justify-between items-center">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <FiVideo className="text-red-500" size={20} />
            <span>Live video</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <FiImage className="text-green-500" size={20} />
            <span>Photo/video</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <FiSmile className="text-yellow-500" size={20} />
            <span>Feeling/activity</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-96 text-white">
            <h2 className="text-xl font-bold mb-4">Create a Post</h2>

            <input type="hidden" value={session?.id || ""} name="userId" />

            {/* Image Upload Field */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-white"
              />
            </div>

            {/* Rich Text Editor */}
            <ReactQuill
              value={postContent}
              onChange={setPostContent}
              placeholder="Write something here..."
              className="mb-4"
              theme="snow"
            />

            <div className="flex justify-end">
              <button
                className="bg-gray-700 text-white py-2 px-4 rounded mr-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-6 rounded ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleSubmitPost} // Handle the post submission
                disabled={loading || !postContent.trim()}
              >
                {loading ? "Posting..." : "Post"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCreate;
