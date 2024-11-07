import BlogCreate, { ISessionProps } from "@/components/Blog/BlogCreate";
import ShowAllBlogs from "@/components/Blog/ShowAllBlogs";
import { blogGetAll } from "@/utils/actions/blogGet";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import React from "react";

export interface IBlogs {
  _id?: string;
  userId?: {
    _id?: string;
    name?: string;
    email?: string;
    role?: string;
    phone?: string;
    address?: string;
    isDeleted?: boolean;
    createdAt?: string;
    updatedAt?: string;
  };
  content?: string;
  imageUrl?: string;
  likeIds?: string[];
  commentIds?: string[];
  createdAt?: string;
  updatedAt?: string;
}

const Blog = async () => {
  const session: ISessionProps | null = await getServerSession(authOptions);

  const blogs = await blogGetAll();

  revalidateTag("blogPostvalidate");

  return (
    <div className="flex bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-1/5 bg-gray-900 p-4 shadow-lg border-r border-gray-700">
        <ul>
          <li className="mb-4 font-bold text-lg text-gray-300">
            {session?.user?.name}
          </li>
          <li className="mb-2 text-gray-400">Find Friends</li>
          <li className="mb-2 text-gray-400">Memories</li>
          <li className="mb-2 text-gray-400">Saved</li>
          <li className="mb-2 text-gray-400">Groups</li>
          <li className="mb-2 text-gray-400">Marketplace</li>
          <li className="mb-2 text-gray-400">Feeds</li>
          <Link href={`/`} className="mb-2 text-gray-400">
            Home
          </Link>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-3/5 h-full flex flex-col overflow-y: auto">
        {/* Post Creation Area */}
        <div className="p-6">
          <BlogCreate session={session} />
        </div>

        {/* Scrollable Posts Area */}
        {blogs?.data?.map((blog: IBlogs, index: string) => (
          <ShowAllBlogs
            blog={blog}
            session={session}
            key={index}
          ></ShowAllBlogs>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="w-1/5 bg-gray-900 p-4 shadow-lg border-l border-gray-700">
        <h4 className="font-bold text-gray-300">Contacts</h4>
        <ul>
          <li className="mb-2 text-gray-400">Amber Lee</li>
          <li className="mb-2 text-gray-400">Siam Rahman</li>
        </ul>
        <h4 className="font-bold text-gray-300 mt-4">Group Chats</h4>
        <ul>
          <li className="mb-2 text-gray-400">PHero Batch - 5</li>
          <li className="mb-2 text-gray-400">Mern Batch - 5</li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
