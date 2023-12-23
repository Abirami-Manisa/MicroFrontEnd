const baseURL = process.env.REACT_APP_API_BASE_URL;
export const endpoints = {
  auth: {
    login: baseURL + "/signin",
    forgotPassword: baseURL + "/User/ForgotPassword",
    logOut: baseURL + "/signout",
  },
};
