import type { V2_MetaFunction } from "@remix-run/react";
import Table from "~/components/ResultsTable";
import SquareR from "~/components/SquareResult";
import Chart from "~/components/Chartresult";
import { Link } from "react-router-dom";
import Header from "~/components/Header";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export default function Result() {
  return (
    <div className="grid grid-cols-4 grid-flow-col gap-10">
      <div>
        <canvas className="max-w-100" id="TrafficChart"></canvas>
        <h1 className="text-grayfigma">Welcome to Result</h1>
        <Table />
      </div>
      <div>
        <Chart />
        <SquareR />
      </div>
      {/* <div>
        <Link to="/Instructions">
          <button className="flex flex-row mt-9 mx-10 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Repetir prueba
          </button>
        </Link>
      </div> */}
    </div>
  );
}
