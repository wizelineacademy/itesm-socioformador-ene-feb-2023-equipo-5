import { authenticator } from "~/services/auth.server";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";
import Header from "~/components/Header";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { db } from "~/services/db";
import { PolarAreaChart } from "../components/Chart";
import Loading from "~/components/Loading";
import { getHeaderData } from "~/services/header.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const headerData = await getHeaderData(request);

  const test = await db.test.findUnique({
    where: {
      id: params.id,
    },
  });
  const mainsituation = test?.mainSituationId;

  const question = await db.question.findUnique({
    where: { id: mainsituation },
    select: {
      situation: true,
    },
  });

  return {
    test: test,
    question: question,
    profile: profile,
    headerData: headerData,
  };
};

export default function Result() {
  const { headerData, test, question } = useLoaderData()
  const navigation = useNavigation();

  return (
    <>
      <Header name={headerData.name} role={headerData.role} photo={headerData.photo} />
      {navigation.state !== "idle" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-row mt-14 mx-10">
            <div className="basis-1/2 ml-4 relative ">
              <p className="text-lg font-bold mb-4  ">
                {question ? question.situation : "No recommendations available"}
              </p>
              <div className="bg-gray-200 px-3 py-3 mt-10 text-left rounded-md">
                <p className="font-bold">Feedback</p>
                <p className="text-sm">
                  {test ? test.feedaback : "No feedback available"}
                </p>
              </div>

              <div className="bg-gray-200 px-3 py-3 mt-10 text-left rounded-md">
                <p className="font-bold">Recommendations</p>
                <p className="text-sm">
                  {test ? test.recommendation : "No recommendations available"}
                </p>
              </div>
              <div className="pb-5 mt-8 ">
                <Link
                  to={
                    profile._json[
                      "https://smartspeak.example.com/roles"
                    ].includes("admin")
                      ? "/adminProfile"
                      : "/user/profile"
                  }
                  className="py-2 w-60 px-8 rounded-md bg-blue-200"
                >
                  Home
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
                <div className=" ml-20 w-10/12">
                  <PolarAreaChart
                    grammar={test.grammar}
                    coherence={test.coherence}
                    vocabulary={test.vocabulary}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
