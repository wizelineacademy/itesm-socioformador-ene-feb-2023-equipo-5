import React, { useState } from "react";
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
import { getHeaderData } from "~/services/header.server";

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

    const headerData = await getHeaderData(request)

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
    headerData: headerData
  };
};
export default function Example() {
  const { headerData, users, tests, s3_endpoint } = useLoaderData();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = React.useState("Usuario");
  const [nivel, setNivel] = useState("");
  const [query, setQuery] = useState("");

  let filteredUsers = users.filter(
    (user: any) =>
      (nivel === "" || user.englishlevel == nivel) &&
      // eslint-disable-next-line no-mixed-operators
      (query === "" ||
        // eslint-disable-next-line no-mixed-operators
        (user.fullName &&
          user.fullName.toLowerCase().includes(query.toLowerCase())))
  );

  const handleSelectChange = (event: any) => {
    setNivel(event.target.value);
    setQuery("");
  };

  return (
    <>
      <Header name={headerData.name} role={headerData.role} photo={headerData.photo} />
      {navigation.state !== "idle" ? (
        <Loading />
      ) : (
        <>
          <Tabs value={activeTab}>
            <div className="mt-8  ml-2">
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
                <div className="w-1/4 border-2 border-gray-200 rounded-md float-right text-center ">
                  <input
                    type="text"
                    placeholder=" Buscador"
                    className="w-full "
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <div className="w-1/4  float-right text-center">
                  <select
                    className="border-2 border-gray-200 rounded-md w-[90%]"
                    id="dificultad"
                    name="dificultad"
                    value={nivel}
                    onChange={handleSelectChange}
                  >
                    <option value="" defaultValue="true">
                      Nivel
                    </option>
                    <option value="">Todos</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                  </select>
                </div>

                <div className=" place-self-center mx-[5%] clear-both">
                  <TableAdminUsers users={filteredUsers} />
                </div>
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
