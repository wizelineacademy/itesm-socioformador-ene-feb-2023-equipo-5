import type { V2_MetaFunction } from "@remix-run/react";
import Dashboard from "~/components/DashboardAdmin";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export default function Result() {
  return (
    <div>
      <h1 className="text-grayfigma">Welcome to Result</h1>
      <Dashboard />
    </div>
  );
}
