import { Navigate, RouteObject } from "react-router-dom";

import { Login } from "@/pages/Login";

export const AuthRoutes: RouteObject[] = [
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Navigate to="/login" /> },
];
