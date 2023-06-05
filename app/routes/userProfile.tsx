import Dashboard from "~/components/DashboardAdmin";
import SquareR from "~/components/SquareResult";
import TableUser from "~/components/TableUser";
import React from "react";
import { authenticator } from "~/services/auth.server";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";
import Header from "~/components/Header";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { db } from "~/services/db";
import Loading from "~/components/Loading";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  var convo = [
    {
      role: "system",
      content:
        "You are part of an evaluation of english system. The system evaluates the english level of the users and provides a recommendation for each of the tests that the user has done. You will receive a large string of all the recommendations that the user has received in all of his/her tests. I want you to return a string of a summary of the recommendations given. Write the message in first person, as if you were talking to the user.",
    },
    {
      role: "assistant",
      content:
        "I understand, I will receive a big string of all of the historic recommendations given to the user in his/her tests and return a overall summary recommendation to show in the profile page of the user. I will talk to the user in a learning tone.",
    },
  ];

  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const tests = await db.test.findMany({
    where: { authorId: profile.id },
  });

  const recommendationsArray = tests.map((item) => item.recommendation);
  const reccomendations = recommendationsArray.join("\n");
  convo.push({ role: "user", content: reccomendations });
  var reccomendationsSummary = "hola";

  async function getResponse() {
    const answer = fetch(
      "https://chatgpt.lcuoodnsn630q.us-east-1.cs.amazonlightsail.com/chatgpt/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: convo }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data["response"];
      })
      .catch((error) => {
        console.error(error);
      });

    return answer;
  }

  reccomendationsSummary = await getResponse();

  return {
    tests: tests,
    profile: profile,
    reccomendationsSummary: reccomendationsSummary,
  };
};

export default function Result() {
  const [showModal, setShowModal] = React.useState(false);
  const { tests, profile, reccomendationsSummary } = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      {navigation.state !== "idle" ? (
        <Loading />
      ) : (
        <>
          <Header nombre={profile} />
          <div className="flex flex-row mt-6 mx-10">
            <div className="basis-1/2 ml-4 relative ">
              <p className="text-lg font-bold mb-4  ">Evaluaciones</p>

              <TableUser tests={tests} />
              <div className="bg-gray-200 px-3 py-3 mt-16 text-left rounded-md">
                <p className="font-bold">Recomendaciones</p>
                <p className="text-sm"> {reccomendationsSummary} </p>
              </div>
              <div className="pb-5 mt-8 ">
                <Link
                  to="/instructions"
                  className="py-2 w-60 px-8 rounded-md bg-blue-200"
                >
                  Realizar Prueba
                </Link>

                <Link
                  to="/resources"
                  className="py-2 w-60 px-8 rounded-md mx-12 bg-blue-200"
                >
                  Recursos
                </Link>
              </div>
            </div>
            <div className="basis-1/2 mx-2">
              <div className="mx-2 mt-4 p-3 ">
                <button
                  className=" ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  <div className=" mt-20 ml-36 w-full">
                    <SquareR
                      grammar={50}
                      vocabulary={60}
                      coherence={40}
                      average={50}
                    />
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
      )}
    </>
  );
}
