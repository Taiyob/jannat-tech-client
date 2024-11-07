// import { getServerSession } from "next-auth";
// import { authOptions } from "../authOptions";
// import { signOut } from "next-auth/react";

// export const handleLogout = async () => {
//     const session = await getServerSession(authOptions);
//     localStorage.removeItem("accessToken");

//     if (session?.user) {
//       signOut();
//     }

//     router.push("/");
// };
