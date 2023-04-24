import ResultsTable from "~/components/ResultsTable"
import SquareR from "~/components/SquareResult";

export default function Result() {
    return (
        <>
            <div className="flex flex-row mt-14 mx-10">
                <div className="pb-5 absolute inset-x-0 bottom-0">
                    <div className="flex  place-content-between mx-8">
                        <button className="py-2 w-40 rounded-md bg-blue-200">Cambiar resultados</button>
                        <button className="py-2 w-40 rounded-md bg-graybgfigma">Recomendaciones</button>
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
