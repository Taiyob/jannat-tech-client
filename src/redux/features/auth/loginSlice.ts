import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  email: string;
  password: string;
};

const initialState: TInitialState = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setLoginEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setLoginPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setLoginEmail, setLoginPassword } = loginSlice.actions;
export default loginSlice.reducer;
