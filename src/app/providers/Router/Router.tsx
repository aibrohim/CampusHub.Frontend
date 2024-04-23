import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/layouts/App";

import { useGetUserQuery } from "@/entities/User";

import { PageLoading } from "@/shared/ui/PageLoading";

import { ErrorBoundary } from "../../ErrorBoundary";
import { ProtectedRoutes } from "./config/ProtectedRoutes";
import { AuthRoutes } from "./config/AuthRoutes";
import { PublicRoutes } from "./config/PublicRoutes";

export const Router: FC = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <Suspense fallback={<PageLoading />}>
      {isLoading && <PageLoading />}
      {!isLoading && (
        <RouterProvider
          router={createBrowserRouter(
            [
              ...(data
                ? [
                    {
                      path: "/",
                      element: <AppLayout />,
                      children: ProtectedRoutes,
                    },
                  ]
                : [
                    {
                      path: "/",
                      children: AuthRoutes,
                    },
                  ]),
              {
                path: "/",
                children: PublicRoutes,
              },
            ].map((route) => ({
              ...route,
              errorElement: <ErrorBoundary />,
            }))
          )}
          fallbackElement={<PageLoading />}
        />
      )}
    </Suspense>
  );
};
