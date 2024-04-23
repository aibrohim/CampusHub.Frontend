import { Navigate, RouteObject } from "react-router-dom";

import { Login } from "@/pages/Login";
import { ForgotPasswordPage as ForgotPassword } from "@/pages/ForgotPassword";
import { RecoverPassword } from "@/pages/RecoverPassword";

export const AuthRoutes: RouteObject[] = [
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login /> },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <RecoverPassword />,
  },
  { path: "*", element: <Navigate to="/login" /> },
];
