import { sha256 } from "js-sha256";

export const setLoginData = (sessionId: string) => {
  localStorage.setItem("sessionId", sessionId);
};

export function getLoggedUser() {
  return localStorage.getItem("sessionId");
}

export function encryptPassword(text: string) {
  return sha256(text);
}
