import * as yup from "yup";

export const passwordValidator = () =>
  yup
    .string()
    .min(8, "Password should be at least 8 characters.")
    .max(32, "Password should be maximum 32 characters.")
    .matches(/[a-zA-Z]/, "Password should contain one letter.")
    .matches(/[0-9]/, "Password should contain at least one number.")
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      "Password should contain at least one symbol."
    );
