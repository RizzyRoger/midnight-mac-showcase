import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: Outlet,
});
