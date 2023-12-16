export const setLoginData = (sessionId: string) => {
  localStorage.setItem("sessionId", sessionId);
};

export function getLoggedUser() {
  return localStorage.getItem("sessionId");
}
