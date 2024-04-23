import { Navigate, RouteObject } from "react-router-dom";

import { Buildings } from "@/pages/Buildings";
import { Clubs } from "@/pages/Clubs";
import { Courses } from "@/pages/Courses";
import { Groups } from "@/pages/Groups";
import { Modules } from "@/pages/Modules";
import { Rooms } from "@/pages/Rooms";
import { Students } from "@/pages/Students";

export const ProtectedRoutes: RouteObject[] = [
  {
    path: "/buildings",
    element: <Buildings />,
  },
  {
    path: "/building/:id/rooms",
    element: <Rooms />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/course/:id/modules",
    element: <Modules />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/groups",
    element: <Groups />,
  },
  {
    path: "/clubs",
    element: <Clubs />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
