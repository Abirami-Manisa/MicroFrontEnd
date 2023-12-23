import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { setLoader } from "../loader/loaderSlice";
import { CONSTANTS } from "../types";
import { endpoints } from "../../../config/apiEndPoints";
import { axiosInstance } from "../../../config/networkConfig";
import { setAuthStatus, setAuthToken, setLoggedIn } from "./authSlice";
import showToast from "../../../helper/toastMessage";
import toast from "react-hot-toast";
import { getLoggedUser, setLoginData } from "../../../helper/auth";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* authLoginWorker(action: any) {
  yield put(setLoader(true));
  const { payload, onLogin } = action;
  const { email, password } = payload;
  console.log(onLogin)
  const loginData = {
    username: email,
    password: password,
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    realm: process.env.REACT_APP_REALM,
  };

  try {
    const response: ResponseGenerator = yield call(
      axiosInstance.post.bind(axiosInstance),
      endpoints.auth.login,
      loginData
    );
    const { data } = response;
    yield put(setAuthToken(data!.data));
    yield put(setAuthStatus(data!.status));
    if (data!.status) {
      showToast(data!.message, "success");
      onLogin && onLogin();
      setLoginData(data!.data!.refresh_token);
      yield put(setLoggedIn(true));
    } else {
      showToast(data!.message, "error");
      setLoginData("");
      yield put(setLoggedIn(false));
    }
  } catch (error) {}
}

function* authLogoutWorker(action: any) {
  yield put(setLoader(true));
  const logoutData = {
    refresh_token: getLoggedUser(),
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    realm: process.env.REACT_APP_REALM,
  };

  try {
    const response: ResponseGenerator = yield call(
      axiosInstance.post.bind(axiosInstance),
      endpoints.auth.logOut,
      logoutData
    );
    const { data } = response;
    yield put(setAuthToken({}));
    yield put(setAuthStatus(data!.status));
    setLoginData("");
    if (data!.status) {
      showToast(data!.message, "success");
      yield put(setLoggedIn(true));
      action.onLogout();
    } else {
      showToast(data!.message, "error");
      yield put(setLoggedIn(false));
    }
  } catch (error) {}
}

export default function* authWatcher() {
  yield takeLatest(CONSTANTS.USER_LOGIN, authLoginWorker);
  yield takeLatest(CONSTANTS.USER_LOGOUT, authLogoutWorker);
}
