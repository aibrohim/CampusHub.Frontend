import { RouteObject } from "react-router-dom";

import { Login } from "@/pages/Login";

export const AuthPages: RouteObject[] = [
  { path: "/login", element: <Login /> },
];
