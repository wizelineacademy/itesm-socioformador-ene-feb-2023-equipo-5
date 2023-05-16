import { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import Dashboard from "~/components/DashboardAdmin";
import { authenticator } from "~/services/auth.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return profile
};

export default function Result() {
  return (
    <div>
      <h1 className="text-grayfigma">Welcome to Result</h1>
      <Dashboard />
    </div>
  );
}
