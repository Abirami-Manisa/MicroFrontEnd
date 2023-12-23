import { all } from "redux-saga/effects";
import authWatcher from "./auth/authSaga";
export function* WatchSagas() {
  yield all([authWatcher()]);
}
