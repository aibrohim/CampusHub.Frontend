import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required!")
    .email("Wrong email!")
    .min(1, "Email must contain at least 1 char.")
    .max(100, "Email must contain at least 100 chars."),

  password: yup
    .string()
    .required("Password is required!")
    .min(4, "Password must contain at least 4 characters!")
    .max(50, "Password must contain at least 50 characters!"),
});

export type TFormState = yup.InferType<typeof validationSchema>;
