import type { V2_MetaFunction } from "@remix-run/react";
import Table from "~/Components/ResultsTable";
import SquareR from "~/Components/SquareResult";
import Chart from "~/Components/Chartresult";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export default function Result() {
  return (
    <div>
      <canvas className="max-w-100" id="TrafficChart"></canvas>
      <h1 className="text-grayfigma">Welcome to Result</h1>
      <Chart />
      <Table />

      <SquareR />
    </div>
  );
}
