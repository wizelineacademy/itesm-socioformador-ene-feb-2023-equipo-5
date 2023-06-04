import type { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { Link } from "react-router-dom";
import { authenticator } from "~/services/auth.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Instructions" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return profile
};

export default function Result() {
  return (
    <>
      <div className="content-center	 flex-row mt-14 mx-40 ">
        <div className=" mx-40 bg-graybgfigma">
          <div className=" py-10 ">
            <p className="text-center flex-row mt-4 mx-20 font-bold">INSTRUCCIONES</p>
            <p className="text-center  flex-row mt-4 mx-20 ">La prueba consiste en una conversación en tiempo real, por lo que deberás hacer click en el botón azul al iniciar y terminar de grabar para que tus respuestas sean procesadas. Para los resultados se tienen en consideración los siguientes puntos:</p>
            <div className=" mx-20 mt-10">
              <svg className=" float-left  h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="flex-row mx-10 ">Grammar</p>
            </div>
            <div className=" mx-20 mt-10">
              <svg className=" float-left  h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="flex-row mx-10 ">Speaking</p>
            </div>
            <div className=" mx-20 mt-10">
              <svg className=" float-left  h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="flex-row mx-10 ">Comprehension</p>
            </div>
            <div className=" mx-20 mt-10">
              <svg className=" float-left  h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="flex-row mx-10 ">Technical Language</p>
            </div>

          </div>
          <div className="flex flex-col items-center">
            <Link to="/examn">
              <button className="mb-10 py-2 w-40 rounded-md bg-blue-200 shadow-md">Comenzar prueba</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}