import { passwordValidator } from "@/shared/lib/validators/passwordValidator";
import * as yup from "yup";

export const resetPasswordValidationSchema = yup.object().shape({
  password: passwordValidator().required("Password is required!"),
});
