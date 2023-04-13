import type { V2_MetaFunction } from "@remix-run/react";
import Table from "~/components/ResultsTable";
import SquareR from "~/components/SquareResult";


export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export default function Result() {
  return (
    <div>
      <h1 className="text-grayfigma">Welcome to Result</h1>
      <Table />
      <SquareR />
    </div>
  );
}
