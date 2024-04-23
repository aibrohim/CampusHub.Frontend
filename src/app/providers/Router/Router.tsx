import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/layouts/App";

import { PageLoading } from "@/shared/ui/PageLoading";

import { AppRoutes } from "./config/AppPages";
import { ErrorBoundary } from "../../ErrorBoundary";
import { AuthPages } from "./config/AuthPages";

export const Router: FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <RouterProvider
        router={createBrowserRouter(
          [
            {
              path: "/",
              element: <AppLayout />,
              children: AppRoutes,
            },
            {
              path: "/",
              children: AuthPages,
            },
          ].map((route) => ({
            ...route,
            errorElement: <ErrorBoundary />,
          }))
        )}
        fallbackElement={<PageLoading />}
      />
    </Suspense>
  );
};
