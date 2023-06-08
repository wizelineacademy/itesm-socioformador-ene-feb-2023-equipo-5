import SquareR from "~/components/SquareResult";
import React from "react";
import { authenticator } from "~/services/auth.server";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/services/db";
import { Link, useLoaderData, useNavigation } from "@remix-run/react";
import Loading from "~/components/Loading";
import Header from "~/components/Header";
import { getHeaderData } from "~/services/header.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export const loader = async ({ request, params }: LoaderArgs) => {
  // const profile = await authenticator.isAuthenticated(request, {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  }).then((resp: any) => {
    if (!resp._json['https://smartspeak.example.com/roles'].includes('admin')) {
      throw redirect("/Instructions")
    }
    return resp
  });

  const headerData = await getHeaderData(request);

  const test = await db.test.findUnique({
    where: {
      id: params.id,
    },
  });

  const userId = test ? test.authorId : "";
  const situationId = test ? test.mainSituationId : "";

  const user: any = await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      fullName: true,
    },
  });

  const situation = await db.question.findUnique({
    where: {
      id: situationId,
    },
    select: {
      situation: true,
    },
  });

  const s3_endpoint = process.env.S3_ENDPOINT;

  return {
    headerData: headerData,
    test: test,
    s3_endpoint: s3_endpoint,
    user: user,
    situation: situation,
  };
};

export default function Result() {
  const { headerData, test, s3_endpoint, user, situation } = useLoaderData()
  const navigation = useNavigation();
  var videoLink;
  try {
    videoLink = s3_endpoint + "/" + test.videoURL;
  } catch {
    videoLink = "";
  }
  return (
    <>
      <Header name={headerData.name} role={headerData.role} photo={headerData.photo} />
      {navigation.state !== "idle" ? <Loading /> : <>
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
              <p className="text-2xl mb-4">
                English level:{" "}
                <span className="text-green-600 font-bold">
                  {test ? test.englishlevel : "---"}
                </span>
              </p>
              {test ? (
                <SquareR
                  grammar={test.grammar}
                  vocabulary={test.vocabulary}
                  coherence={test.coherence}
                  average={Math.round(
                    (test.grammar + test.coherence + test.vocabulary) / 3
                  )}
                />
              ) : (
                <SquareR
                  grammar={0}
                  vocabulary={0}
                  coherence={0}
                  average={0}
                />
              )}
              <p className="text-xl font-bold">Feedback</p>
              <p className="text-md">
                {test ? test.feedaback : "No feedback available"}
              </p>
              <p className="text-xl font-bold pt-4">Recommendations</p>
              <p className="text-md">
                {test ? test.recommendation : "No recommendations available"}
              </p>
            </div>
          </div>
        </div>
      </>
      }
    </>
  );
}
