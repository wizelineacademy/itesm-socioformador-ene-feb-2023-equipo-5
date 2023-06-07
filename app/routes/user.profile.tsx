import SquareR from "~/components/SquareResult";
import TableUser from "~/components/TableUser";
import { authenticator } from "~/services/auth.server";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";
import Header from "~/components/Header";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { db } from "~/services/db";
import Loading from "~/components/Loading";
import { getHeaderData } from "~/services/header.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const headerData = await getHeaderData(request);

  const tests = await db.test.findMany({
    where: { authorId: profile.id },
  });

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

  let grammaraverage = 0;
  let vocabularyaverage = 0;
  let coherenceaverage = 0;
  for (let i = 0; i < tests.length; i++) {
    grammaraverage += tests[i].grammar;
    vocabularyaverage += tests[i].vocabulary;
    coherenceaverage += tests[i].coherence;
  }

  return {
    grammaraverage: Math.round(grammaraverage / tests.length),
    vocabularyaverage: Math.round(vocabularyaverage / tests.length),
    coherenceaverage: Math.round(coherenceaverage / tests.length),
    tests: tests,
    profile: profile,
    reccomendationsSummary: reccomendationsSummary,
    headerData: headerData
  };
};

export default function Result() {
  const { tests, headerData, grammaraverage, vocabularyaverage, coherenceaverage, reccomendationsSummary } = useLoaderData();
  const average = Math.round(
    (grammaraverage + vocabularyaverage + coherenceaverage) / 3
  );
  const navigation = useNavigation();
  return (
    <>
      <Header name={headerData.name} role={headerData.role} photo={headerData.photo} />
      {navigation.state !== "idle" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-row mt-6 mx-10">
            <div className="basis-1/2 ml-4 relative ">
              <p className="text-lg font-bold mb-4  ">Evaluaciones</p>
              {tests.length > 0 ? (
                <TableUser tests={tests} />
              ) : (
                <p>There are no examns here</p>
              )}
              <div className="bg-gray-200 px-3 py-3 mt-16 text-left rounded-md">
                <p className="font-bold">Recomendaciones</p>
                <p className="text-sm"> {reccomendationsSummary} </p>
              </div>
              <div className="pb-5 mt-8 ">
                <Link
                  to="/instructions"
                  className="py-2 w-60 px-8 rounded-md bg-blue-200"
                >
                  Take test
                </Link>

                <Link
                  to="/resources"
                  className="py-2 w-60 px-8 rounded-md mx-12 bg-blue-200"
                >
                  Resources
                </Link>
              </div>
            </div>
            <div className="basis-1/2 mx-2">
              <div className="mx-2 mt-4 p-3 ">
                <button className="ease-linear" disabled>
                  <div className=" mt-20 ml-36 w-full">
                    <SquareR
                      grammar={grammaraverage}
                      vocabulary={vocabularyaverage}
                      coherence={coherenceaverage}
                      average={average}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
