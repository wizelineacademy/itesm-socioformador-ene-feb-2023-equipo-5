import ResultsTable from "~/components/ResultsTable";
import Dashboard from "~/components/DashboardAdmin";
import SquareR from "~/components/SquareResult";
import React from "react";
import { authenticator } from "~/services/auth.server";
import { LoaderArgs, V2_MetaFunction } from "@remix-run/node";

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
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex flex-row mt-14 mx-10">
        <div className="pb-5 absolute inset-x-0 bottom-[13%]">
          <div className="flex  place-content-between mx-10">
            <button className="py-2 w-40 rounded-md bg-blue-200">
              Cambiar resultados
            </button>
            <button className="py-2 w-40 rounded-md bg-graybgfigma">
              Recomendaciones
            </button>
          </div>
        </div>
        <div className="basis-1/2 mx-2 relative">
          <p className="text-lg font-bold mb-4  ">Evaluaciones</p>
          <span className="h-1 w-full bg-red-600 lg:w-1/3"></span>
          <ResultsTable />
        </div>
        <div className="basis-1/2 mx-2">
          <div className="mx-8 mt-4 p-3 ">

            <button
              className=" ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <div className="absolute inset-y-[14%] right-[15%] ">
                <SquareR />
              </div>
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-2xl font-semibold">RESULTADOS</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <Dashboard />
                      {/*footer*/}
                      <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-bluefigma5 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
