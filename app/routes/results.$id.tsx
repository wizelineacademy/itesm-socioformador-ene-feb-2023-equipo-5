import ResultsTable from "~/components/ResultsTable";
import Dashboard from "~/components/DashboardAdmin";
import SquareR from "~/components/SquareResult";
import Chart from "~/components/Chartresult";
import React from "react";
import { authenticator } from "~/services/auth.server";
import { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";
import Header from "~/components/Header";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/services/db";
import ChartComponentRadar from "../Components/RadarChart";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Results" }];
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const test = await db.test.findUnique({
    where: {
      id: params.id
    }
  })

  return {
    test: test,
    profile: profile,
  };
};

export default function Result() {
  const [showModal, setShowModal] = React.useState(false);
  const {profile, test} = useLoaderData()

  return (
    <>
      <Header nombre={profile} />
      <div className="flex flex-row mt-14 mx-10">
        <div className="basis-1/2 ml-4 relative ">
          <p className="text-lg font-bold mb-4  ">{test ? test.createdAt.split("T")[0] : "No recommendations available"}</p>
          <div className="bg-gray-200 px-3 py-3 mt-10 text-left rounded-md">
            <a className="font-bold">Feedback</a>
            <p className="text-sm">
              {test ? test.feedaback : "No feedback available"}
            </p>
          </div>

          <div className="bg-gray-200 px-3 py-3 mt-10 text-left rounded-md">
            <a className="font-bold">Recommendations</a>
            <p className="text-sm">
              {test ? test.recommendation : "No recommendations available"}
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
