import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/layouts/App";

import { PageLoading } from "@/shared/ui/PageLoading";

import { AppRoutes } from "./config/AppPages";
import { ErrorBoundary } from "../../ErrorBoundary";

export const Router: FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <RouterProvider
        router={createBrowserRouter(
          [{ path: "/", element: <AppLayout />, children: AppRoutes }].map(
            (route) => ({
              ...route,
              errorElement: <ErrorBoundary />,
            })
          )
        )}
        fallbackElement={<PageLoading />}
      />
    </Suspense>
  );
};
