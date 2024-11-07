// import { getSession } from "next-auth/react";

// export const fetchClient = async (url, options) => {
//   const session = await getSession();
//   console.log("From the fetch client", session?.accessToken);

//   return fetch(url, {
//     ...options,
//     headers: {
//       ...options?.headers,
//       ...(session && { Authorization: `${session.accessToken}` }),
//     },
//   });
// };
