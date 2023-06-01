import ResultsTable from "~/components/ResultsTable";
import Dashboard from "~/components/DashboardAdmin";
import SquareR from "~/components/SquareResult";
import React from "react";
import { authenticator } from "~/services/auth.server";
import { LoaderArgs, V2_MetaFunction, redirect } from "@remix-run/node";
import { db } from "~/services/db";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  }).then(( resp:any ) => {
    if(!resp._json['https://smartspeak.example.com/roles'].includes('admin')){
        throw redirect("/Instructions")
    }
    //return resp
  });

  const test = await db.test.findUnique({
    where: {
      id: params.id
    }
  })

  const userId = test ? test.authorId : ""
  const situationId = test ? test.mainSituationId : ""

  const user = await db.user.findUnique({
    where: {
      id: userId
    },
    select: {
      fullName: true
    }
  })

  const situation = await db.question.findUnique({
    where: {
      id: situationId
    },
    select: {
      situation: true
    }
  })
  
  const s3_endpoint = process.env.S3_ENDPOINT;

    return {
      test: test,
      s3_endpoint: s3_endpoint,
      user: user,
      situation: situation
  }
};

export default function Result() {
  const [showModal, setShowModal] = React.useState(false);
  const {test, s3_endpoint, user, situation} = useLoaderData()
  var videoLink
  try{
    videoLink = s3_endpoint + "/" + test.videoURL
  } catch {
    videoLink = ""
  }
  return (
    <>
      <div className="ml-12 my-4">
        <Link className="px-6 py-2 w-max rounded-md bg-blue-200" to={"/admin/videos"}>Go back</Link>
      </div>
      <div className="flex flex-row mt-6 mx-10">
        <div className="basis-1/2 mx-2 relative">
          <p className="text-3xl font-bold">{situation ? situation.situation : "No data available"}</p>
          <p className="text-md text-gray-600"> {user ? user.fullName : "---"} </p>
          
          <div>
              <video className="w-11/12 my-5 rounded-lg" controls>
                  <source src={videoLink} type="video/mp4" />
                  Video not supported by your browser.
              </video>
          </div>
        </div>
        <div className="basis-1/2 mx-2">
          
          <div className="mx-8 mt-4 p-3 ">
          <p className="text-2xl mb-4">English level: <span className="text-green-600 font-bold">{test ? test.englishlevel : "---"}</span></p>
          {test ? 
            <SquareR grammar={test.grammar} vocabulary={test.vocabulary} coherence={test.coherence} average={Math.round((test.grammar +  test.coherence + test.vocabulary)/3)} />
            : 
            <SquareR grammar={0} vocabulary={0} coherence={0} average={0} />
          }
          <p className="text-xl font-bold">Feedback</p>
          <p className="text-md">{test ? test.feedaback : "No feedback available"}</p>
          <p className="text-xl font-bold pt-4">Recommendations</p>
          <p className="text-md">{test ? test.recommendation : "No recommendations available"}</p>
                {/*
            <button
              className=" ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <div className="">
                <p className="text-2xl">English level: <span className="text-green-600 font-bold">{test ? test.englishlevel : "---"}</span> </p>
                {test ? 
                  <SquareR grammar={test.grammar} vocabulary={test.vocabulary} coherence={test.coherence} average={Math.round((test.grammar +  test.coherence + test.vocabulary)/3)} />
                  : 
                  <SquareR grammar={0} vocabulary={0} coherence={0} average={0} />
                }
              </div>
            </button>
              */}
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
