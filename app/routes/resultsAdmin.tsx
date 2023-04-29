import ResultsTable from "~/Components/ResultsTable";
import SquareR from "~/Components/SquareResult";
import { Link } from "react-router-dom";

export default function Result() {
  return (
    <>
      <div className="flex flex-row mt-14 mx-10">
        <div className="pb-5 absolute inset-x-0 bottom-0">
          <div className="flex  place-content-between mx-8">
            <Link to="/Instructions">
              <button className="py-2 w-40 rounded-md bg-blue-200">
                Repetir prueba
              </button>
            </Link>
            <Link to="/resources">
              <button className="py-2 w-40 rounded-md bg-graybgfigma">
                Recursos
              </button>
            </Link>
          </div>
        </div>
        <div className="basis-1/2 mx-2 relative ">
          <p className="text-lg font-bold mb-4  ">Evaluaciones</p>
          <span className="h-1 w-full bg-red-600 lg:w-1/3"></span>
          <ResultsTable />
        </div>
        <div className="basis-1/2 mx-2">
          <div className="mx-8 mt-4 p-3 ">
            <SquareR />
          </div>
        </div>
      </div>
    </>
  );
}
