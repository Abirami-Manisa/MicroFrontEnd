import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {},
  status: false,
  loggedIn: false,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      return { ...state, token: action.payload };
    },
    setAuthStatus: (state, action) => {
      return { ...state, status: action.payload };
    },
    setLoggedIn: (state, action) => {
      return { ...state, loggedIn: action.payload };
    },
  },
});

export const { setAuthToken, setAuthStatus, setLoggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
