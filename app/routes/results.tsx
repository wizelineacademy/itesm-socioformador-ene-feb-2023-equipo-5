import type { V2_MetaFunction } from "@remix-run/react";
import Table from "~/Components/ResultsTable";
import SquareR from "~/Components/SquareResult";
import Chart from "~/Components/Chartresult";
import { Link } from "react-router-dom";

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
      <Link to="/Instructions">
        <button className="flex flex-row mt-9 mx-10 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Repetir prueba
        </button>
      </Link>
    </div>
  );
}
