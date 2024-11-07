/* eslint-disable @typescript-eslint/no-explicit-any */
export { default } from "next-auth/middleware";

export const config = { matcher: [] };

// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req: any) {
//   const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//   const token =
//     req.cookies.get("accessToken") || localStorage.getItem("accessToken"); // or wherever you store the JWT

//   // Check if the NextAuth session exists
//   if (session) {
//     return NextResponse.next(); // Allow access to the dashboard
//   }

//   // If no NextAuth session, check custom JWT
//   if (token) {
//     try {
//       // Verify your custom JWT token (optional: implement JWT verification logic)
//       return NextResponse.next(); // Allow access if the token is valid
//     } catch (err) {
//       console.error("JWT validation failed:", err);
//       return NextResponse.redirect(new URL("/auth/login", req.url)); // Redirect to login if token is invalid
//     }
//   }

//   // If no session and no valid custom JWT, redirect to login page
//   return NextResponse.redirect(new URL("/auth/login", req.url));
// }

// export const config = { matcher: ["/dashboard"] };
