import type { V2_MetaFunction } from "@remix-run/react";
import Table from "~/Components/ResultsTable";
import SquareR from "~/Components/SquareResult";
import Dashboard from "~/Components/DashboardAdmin";

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
