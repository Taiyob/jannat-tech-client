/* eslint-disable @typescript-eslint/no-unused-vars */
// src/types/next-auth.d.ts
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface User {
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    id?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}
