export const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
  phone: /^[6-9]{1}[0-9]{9}$/,
};

export const validateEmail = (value: string) => {
  return regex.email.test(value);
};

export const validatePassword = (value: string) => {
  return regex.password.test(value);
};

export const validatePhone = (value: string) => {
  return regex.phone.test(value);
};
