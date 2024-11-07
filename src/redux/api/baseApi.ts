/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import {
  logOut,
  setUser,
  setUserToken,
} from "../features/auth/userCredentialSlice";
// import {
//   logOut,
//   setUser,
//   setUserToken,
// } from "../features/auth/userCredentialSlice";

const baseQuery = fetchBaseQuery({
  //baseUrl: `https://car-colledtion-reservation-backend.vercel.app/api`,
  baseUrl: `http://localhost:5000/api`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).userCredentialInfo.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const res = await fetch(
      //`https://car-colledtion-reservation-backend.vercel.app/api/v1/auth/refresh-token`,
      `http://localhost:5000/api/auth/refresh-token`,
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await res.json();
    console.log(data);
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).userCredentialInfo.user;
      api.dispatch(setUser(user));
      api.dispatch(setUserToken(data?.data?.accessToken));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  //tagTypes: ["car", "booking", "user"],
  endpoints: () => ({}),
});
