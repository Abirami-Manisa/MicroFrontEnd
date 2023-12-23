import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../saga/auth/authSlice";

export const rootReducer = combineReducers({
    loginDetails:authSlice
});
