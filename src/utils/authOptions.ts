/* eslint-disable @typescript-eslint/no-explicit-any */
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "./actions/loginUser";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          const response = await loginUser(credentials);
          console.log("This is authorize area:", response);

          if (response.success) {
            const user = response.data.user;
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            return {
              id: user._id,
              email: user.email,
              name: user.name,
              role: user.role,
              accessToken,
              refreshToken,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  secret: process.env.NEXTAUTH_SECRET as string,

  callbacks: {
    async jwt({ token, account, user }) {
      //console.log(`In jwt call back token is ${JSON.stringify(token)}`);

      if (account && user) {
        //console.log(`In jwt call back, user is ${JSON.stringify(user)}`);
        //console.log(`In jwt call back, account is ${JSON.stringify(account)}`);

        const { id } = user;
        console.log("Only Id is: ", id);

        return {
          ...token,
          user,
          id,
          accesstoken: user.accessToken,
          refreshToken: user.refreshToken,
        };
      }

      return token;
    },
    async session({ session, token }) {
      console.log(`In session call back session is ${JSON.stringify(session)}`);
      console.log(`In session call back token is ${JSON.stringify(token)}`);

      if (token) {
        session.accessToken = token?.accessToken as string | undefined;
        session.refreshToken = token?.refreshToken as string | undefined;
        session.id = token?.id as string | undefined;
      }

      return session;
    },
  },
};

// async function authenticateUser(email: string, password: string) {
//   // Replace this logic with your database/API call
//   const users = [
//     { id: "1", email: "jsmith@example.com", password: "password123", name: "J Smith" },
//     // Add more users as needed
//   ];

//   const user = users.find((user) => user.email === email && user.password === password);

//   return user ? { id: user.id, email: user.email, name: user.name } : null;
// }
