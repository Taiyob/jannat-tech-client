/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import GetAllBlogs from "@/components/Blog/GetAllBlogs";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/utils/authOptions";

const AllBlogPost = async () => {
  //   const session = await getServerSession(authOptions);
  //   console.log("From blog page, show server session:", session);

  return (
    <div>
      <h1>All Blog Posts</h1>
      <GetAllBlogs />
      {/* <h1>{session?.accessToken}</h1>
      <h1>{session?.refreshToken}</h1> */}
    </div>
  );
};

export default AllBlogPost;
