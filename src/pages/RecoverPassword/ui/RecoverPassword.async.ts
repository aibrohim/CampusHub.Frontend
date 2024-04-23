import { FC, lazy } from "react";

export const RecoverPassword: FC = lazy(() =>
  import("./RecoverPassword").then((module) => ({
    default: module.RecoverPasswordPage,
  }))
);
