import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useLoaderData, useNavigation } from "@remix-run/react";
import Loading from "~/components/Loading";
import TableAdmin from "~/components/TableAdmin";
import TableAdminUsers from "~/components/TableAdminUsers";
import { authenticator } from "~/services/auth.server";
import { db } from "~/services/db";
import Header from "~/components/Header";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Videos" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator
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

  const tests = await db.test.findMany({
    include: {
      author: {
        select: {
          fullName: true,
        },
      },
    },
  });

  const users = await db.user.findMany({});

  const s3_endpoint = process.env.S3_ENDPOINT;

  return {
    profile: profile,
    users: users,
    tests: tests,
    s3_endpoint: s3_endpoint,
  };
};
export default function Example() {
  const { profile, users, tests, s3_endpoint } = useLoaderData();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Usuario",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Video",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <>
      <Header nombre={profile} />
      {navigation.state !== "idle" ? (
        <Loading />
      ) : (
        <>
          <Tabs value={activeTab}>
            <div className="mt-8 w-1/2">
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                }}
              >
                <Tab
                  key="Usuario"
                  value="Usuario"
                  onClick={() => setActiveTab("Usuario")}
                  className={activeTab === "Usuario" ? "text-blue-500" : ""}
                >
                  Usuarios
                </Tab>
                <Tab
                  key="Video"
                  value="Video"
                  onClick={() => setActiveTab("Video")}
                  className={activeTab === "Video" ? "text-blue-500" : ""}
                >
                  Videos
                </Tab>
              </TabsHeader>
            </div>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              <TabPanel key="Usuario" value="Usuario">
                <TableAdminUsers users={users} />
              </TabPanel>
              <TabPanel key={"Video"} value={"Video"}>
                {navigation.state !== "idle" ? (
                  <Loading />
                ) : (
                  <div>
                    <div className="flex flex-col px-20 py-8  place-content-center">
                      <p className="text-lg font-bold py-5">Evaluaciones</p>
                      {tests.length > 0 ? (
                        <TableAdmin tests={tests} s3_endpoint={s3_endpoint} />
                      ) : (
                        <p>No hay videos v2</p>
                      )}
                    </div>

                    <button className="bg-bluefigma4 text-base font-semibold text-white p-2 rounded-lg ml-20">
                      Go Back
                    </button>
                  </div>
                )}
              </TabPanel>
            </TabsBody>
          </Tabs>
        </>
      )}
    </>
  );
}
