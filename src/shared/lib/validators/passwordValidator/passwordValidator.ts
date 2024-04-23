import * as yup from "yup";

export const passwordValidator = () =>
  yup
    .string()
    .min(4, "Password should be at least 4 characters.")
    .max(50, "Password should be maximum 50 characters.");
