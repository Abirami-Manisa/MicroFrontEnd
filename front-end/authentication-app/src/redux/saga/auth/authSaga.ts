import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { setLoader } from "../loader/loaderSlice";
import { CONSTANTS } from "../types";
import { endpoints } from "../../../config/apiEndPoints";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* authWorker(action: any) {
  yield put(setLoader(true));
  try {
    const response: ResponseGenerator = yield call(
      axios.get,
      endpoints.auth.login,
      {},
    );
  } catch (error) {}
}

export default function* authWatcher() {
  yield takeLatest(CONSTANTS.AUTH_REQUEST, authWorker);
}
