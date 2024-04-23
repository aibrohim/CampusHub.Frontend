import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please, enter an email!")
    .email("Please, enter a valid email!"),
});
