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

  return profile;
};

export default function Result() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex flex-row mt-14 mx-10">
        <div className="pb-5 absolute inset-x-0 bottom-[13%]">
          <div className="  ml-24">
            <button className="py-2 w-60 rounded-md bg-blue-200">
              Cambiar resultados
            </button>
            <button className="py-2 w-60 rounded-md mx-12 bg-blue-200">
              Recursos
            </button>
          </div>
        </div>
        <div className="basis-1/2 ml-4 relative ">
          <p className="text-lg font-bold mb-4  ">Evaluaciones</p>

          <ResultsTable />
        </div>
        <div className="basis-1/2 mx-2">
          <div className="mx-2 mt-4 p-3 ">
            <button
              className=" ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <div className="  w-full">
                <SquareR />

                <div className="bg-gray-200 px-4 py-3 text-left rounded-md">
                  <a className="font-bold">Recomendaciones</a>
                  <p className="text-sm">
                    {" "}
                    To improve your phrasing, it would be recommended to replace
                    the incorrect sentence 'I really love everything that has to
                    do with mobile app development artificial intelligence and
                    cyber security and I will love to have a specific
                    concentration in this', with 'I am interested in mobile app
                    development, artificial intelligence, and cybersecurity, and
                    would like to concentrate my studies in these areas.'
                    Another recommendation would be to replace 'so I think that
                    this is an amazing major that has a lot of opportunities',
                    with 'due to the versatility and potential of technological
                    advancement, I believe that the computer science and
                    technology major offers countless opportunities and a
                    promising future.'. Lastly, to improve sentence structure, I
                    would recommend avoiding run-on sentences such as 'it's
                    amazing that technology can be applied in almost every area
                    and every field so I think that this is an amazing major
                    that has a lot of opportunities'. Instead, try breaking it
                    up into two separate sentences for better readability.{" "}
                  </p>
                </div>
              </div>
            </button>
            {showModal ? (
              <>
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
                {/body/}
                <Dashboard />
                {/footer/}
                <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-bluefigma5 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
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
