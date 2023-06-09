import { Link, useLoaderData, useNavigation } from "@remix-run/react";
import { db } from "~/services/db";
import { PolarAreaChart } from "~/components/ChartDash";
import { ChartComponent } from "~/components/BarChart";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getHeaderData } from "~/services/header.server";
import { authenticator } from "~/services/auth.server";
import Header from "~/components/Header";
import Loading from "~/components/Loading";

export const loader = async ({ request }: LoaderArgs) => {
  await authenticator
    .isAuthenticated(request, {
      failureRedirect: "/login",
    })
    .then((resp: any) => {
      if (
        !resp._json["https://smartspeak.example.com/roles"].includes("admin")
      ) {
        throw redirect("/Instructions");
      }
      return resp;
    });

  const headerData = await getHeaderData(request);

  const countTests = await getEnglishLevelCountsPerTest();

  const data = {
    countTests,
  };

  return {
    countTests: data,
    headerData: headerData,
  }
}

async function getEnglishLevelCountsPerTest() {
  const englishLevelCounts = await db.test.groupBy({
    by: ["englishlevel"],
    _count: {
      englishlevel: true,
    },
  });

  const result: { [level: string]: number }[] = [];

  for (const obj of englishLevelCounts) {
    const { _count, englishlevel } = obj;
    const levelCount = _count.englishlevel;
    result.push({ [englishlevel]: levelCount });
  }

  return result;
}

export default function Index() {
  const { countTests, headerData } = useLoaderData()
  const navigation = useNavigation();

  return (
    <>
      <Header
        name={headerData.name}
        role={headerData.role}
        photo={headerData.photo}
      />
      {navigation.state !== "idle" ? (
        <Loading />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "140vh",
              backgroundColor: "#f5f5f5",
            }}
          >
            <div
              style={{
                width: "1000px",
                height: "800px",
                //sborder: "1px solid black",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gap: "15rem",
                  height: "100%",
                }}
              >
                <div>
                  <PolarAreaChart data={countTests.countTests} />
                  <ChartComponent data={countTests.countTests} />
                </div>

                <div>
                  <PolarAreaChart data={countTests.countTests} />
                  <ChartComponent data={countTests.countTests} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#f5f5f5] p-5 text-center">
            <Link
              to={"/admin/profile"}
              className="py-2 w-60 px-8 rounded-md bg-blue-200"
            >
              Go Back
            </Link>
          </div>
        </>
      )}
    </>
  );
}
