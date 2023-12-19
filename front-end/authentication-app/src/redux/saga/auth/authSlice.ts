import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {},
  profileObj: {},
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      return { ...state, token: action.payload };
    },
    setAuthProfile: (state, action) => {
      return { ...state, profileObj: action.payload };
    },
  },
});

export const { setAuthToken, setAuthProfile } = AuthSlice.actions;
export default AuthSlice.reducer;
