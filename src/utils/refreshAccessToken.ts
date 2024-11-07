export const refreshAccessToken = async () => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/auth/refresh-token`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to refresh access token");
  }
  console.log(response);
  const data = await response.json();
  return data.accessToken;
};
