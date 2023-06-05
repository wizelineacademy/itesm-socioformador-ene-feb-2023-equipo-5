import React from "react";
import { authenticator } from "~/services/auth.server";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";
import Header from "~/components/Header";
import { useLoaderData } from "@remix-run/react";
import ChartComponentRadar from "~/components/Radarchart";
// import { db } from "~/services/db";

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
  const profile = useLoaderData();
  return (
    <>
      <Header nombre={profile} />
      <div className="flex flex-row mt-14 mx-10">
        <div className="basis-1/2 ml-4 relative ">
          <p className="text-lg font-bold mb-4  ">Evaluaciones</p>

          <div className="bg-gray-200 px-3 py-3 mt-10 text-left rounded-md">
            <p className="font-bold">Feedback</p>
            <p className="text-sm">
              {" "}
              To improve your phrasing, it would be recommended to replace the
              incorrect sentence 'I really love everything that has to do with
              mobile app development artificial intelligence and cyber security
              and I will love to have a specific concentration in this', with 'I
              am interested in mobile app development, artificial intelligence,
              and cybersecurity, and would like to concentrate my studies in
              these areas.' Another recommendation would be to replace 'so I
              think that this is an amazing major that has a lot of
              opportunities', with 'due to the versatility and potential of
              technological advancement, I believe that the computer science and
              technology major offers countless opportunities and a promising
              future.'. Lastly, to improve sentence structure, I would recommend
              avoiding run-on sentences such as 'it's amazing that technology
              can be applied in almost every area and every field so I think
              that this is an amazing major that has a lot of opportunities'.
              Instead, try breaking it up into two separate sentences for better
              readability.{" "}
            </p>
          </div>

          <div className="bg-gray-200 px-3 py-3 mt-10 text-left rounded-md">
            <p className="font-bold">Recommendations</p>
            <p className="text-sm">
              {" "}
              To improve your phrasing, it would be recommended to replace the
              incorrect sentence 'I really love everything that has to do with
              mobile app development artificial intelligence and cyber security
              and I will love to have a specific concentration in this', with 'I
              am interested in mobile app development, artificial intelligence,
              and cybersecurity, and would like to concentrate my studies in
              these areas.' Another recommendation would be to replace 'so I
              think that this is an amazing major that has a lot of
              opportunities', with 'due to the versatility and potential of
              technological advancement, I believe that the computer science and
              technology major offers countless opportunities and a promising
              future.'. Lastly, to improve sentence structure, I would recommend
              avoiding run-on sentences such as 'it's amazing that technology
              can be applied in almost every area and every field so I think
              that this is an amazing major that has a lot of opportunities'.
              Instead, try breaking it up into two separate sentences for better
              readability.{" "}
            </p>
          </div>
          <div className="pb-5 mt-8 ">
            <Link
              to="/instructions"
              className="py-2 w-60 px-8 rounded-md bg-blue-200"
            >
              Repetir prueba
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
            <div className=" ml-20 w-10/12">
              <ChartComponentRadar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
