import { Navigate, RouteObject } from "react-router-dom";

import { Buildings } from "@/pages/Buildings";
import { Clubs } from "@/pages/Clubs";
import { Course } from "@/pages/Course";
import { Courses } from "@/pages/Courses";
import { Group } from "@/pages/Group";
import { Groups } from "@/pages/Groups";
import { Module } from "@/pages/Module";
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
    path: "/course/:id",
    element: <Course />,
    children: [
      {
        path: "modules",
        element: <Modules />,
      },
      {
        path: "groups",
        element: <Groups />,
      },
    ],
  },
  {
    path: "/module/:id",
    element: <Module />,
    children: [
      {
        path: "assessments",
        element: <div>Assessments</div>,
      },
      {
        path: "students",
        element: <div>Students</div>,
      },
    ],
  },
  {
    path: "/group/:id",
    element: <Group />,
  },
  {
    path: "/group/:id",
    element: <Group />,
  },
  {
    path: "/students",
    element: <Students />,
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
