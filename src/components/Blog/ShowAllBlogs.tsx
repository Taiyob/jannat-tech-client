/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CommentsModal from "./Comments";
import Image from "next/image";
import { IBlogs } from "@/app/blog/page";
import LikeButton from "./LikeButton";
import BlogReactCount from "./BlogReactCount";
//import { ISessionProps } from "./BlogCreate";

const ShowAllBlogs = ({ blog, session }: { blog: IBlogs; session: any }) => {
  return (
    <div className="h-full p-6 overflow-y: auto">
      <div className="bg-gray-800 shadow-md rounded-lg p-4 mb-6 border border-gray-700">
        {/* Header Section: User Info */}
        <div className="flex items-center mb-4">
          {/* User Avatar */}
          <Image
            className="rounded-full border-4 border-black w-10 h-10"
            // src="https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg"
            src={
              session?.user?.image ||
              "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg"
            }
            alt="User avatar"
            height={50}
            width={50}
          />
          {/* User Name and Time */}
          <div className="ml-3 flex-grow">
            <h3 className="font-bold text-gray-300">{blog?.userId?.name}</h3>
            <p className="text-gray-400 text-sm">{blog?.createdAt}</p>
          </div>
          {/* Follow Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded">
            Follow
          </button>
        </div>

        <div className="">
          <p>{blog?.content}</p>
        </div>

        {/* Main Content: Video/Image Placeholder */}
        <div className="relative bg-black h-80 flex items-center justify-center mb-4 w-full">
          <Image
            src={
              blog?.imageUrl ||
              "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg"
            }
            alt="Post image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Post Footer: Reactions and Comments */}
        <div className="flex justify-between mt-2 text-gray-400">
          <div className="flex items-center">
            <span className="mr-2 text-pink-500">❤️</span>
            <BlogReactCount reactions={blog?.likeIds}></BlogReactCount>
            <span className="mr-2">😆</span>
          </div>
          <div className="flex space-x-4">
            <LikeButton
              userId={blog?.userId?._id}
              postId={blog?._id}
              blog={blog}
            ></LikeButton>
            <CommentsModal blog={blog} session={session} />
            <button className="hover:underline">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllBlogs;
