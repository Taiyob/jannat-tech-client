/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { blogGetAll } from "@/utils/actions/blogGet";
//import { getSession } from "next-auth/react";
//import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const GetAllBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const session = await getSession();
        // console.log(session);
        // const token = session?.accessToken;

        // if (!token) {
        //   throw new Error("User not authenticated");
        // }

        const allBlogs = await blogGetAll();
        console.log("Fetched blogs:", allBlogs);

        if (Array.isArray(allBlogs?.data)) {
          setBlogs(allBlogs?.data);
        } else {
          console.error("Unexpected response format:", allBlogs);
          setError("Unexpected response format");
        }
      } catch (err: any) {
        console.error("Error fetching blogs:", err.message);
        setError(err.message);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return (
      <>
        <div>Error: {error}</div>
        {/* {redirect("/auth/login")} */}
      </>
    );
  }

  return (
    <ul>
      {blogs.length > 0 ? (
        blogs.map((blog, index) => <li key={index}>{blog.content}</li>)
      ) : (
        <li>No blogs found.</li>
      )}
    </ul>
  );
};

export default GetAllBlogs;
