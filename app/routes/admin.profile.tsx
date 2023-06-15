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
import { Link, useLoaderData, useNavigation } from "@remix-run/react";
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

  const tests = await db.test.findMany({
    include: {
      author: {
        select: {
          fullName: true
        },
      },
    }, where: {
      author: {
        isAdmin: false
      }
    }
  });

  const users = await db.user.findMany({
    where: { isAdmin: false }
  });

  const s3_endpoint = process.env.S3_ENDPOINT;

  return {
    users: users,
    tests: tests,
    s3_endpoint: s3_endpoint,
    headerData: headerData,
  };
};
export default function Example() {
  const { headerData, users, tests, s3_endpoint } = useLoaderData();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = React.useState("Usuario");
  const [nivelUsers, setNivelUsers] = useState("");
  const [queryUsers, setQueryUsers] = useState("");
  const [nivelVideos, setNivelVideos] = useState("");
  const [queryVideos, setQueryVideos] = useState("");

  let filteredUsers = users.filter(
    (user: any) =>
      (nivelUsers === "" || user.englishlevel == nivelUsers) &&
      // eslint-disable-next-line no-mixed-operators
      (queryUsers === "" ||
        // eslint-disable-next-line no-mixed-operators
        (user.fullName &&
          user.fullName.toLowerCase().includes(queryUsers.toLowerCase())))
  );

  let filteredVideos = tests.filter(
    (test: any) =>
      (nivelVideos === "" || test.englishlevel == nivelVideos) &&
      // eslint-disable-next-line no-mixed-operators
      (queryVideos === "" ||
        // eslint-disable-next-line no-mixed-operators
        (test.author.fullName &&
          test.author.fullName.toLowerCase().includes(queryVideos.toLowerCase())))
  );

  const handleSelectChangeUsers = (event: any) => {
    setNivelUsers(event.target.value);
    setQueryUsers("");
  };

  const handleSelectChangeVideos = (event: any) => {
    setNivelVideos(event.target.value);
    setQueryVideos("");
  };

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
                  Users
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
                    placeholder="Search by user"
                    className="w-full "
                    value={queryUsers}
                    onChange={(e) => setQueryUsers(e.target.value)}
                  />
                </div>
                <div className="w-1/4  float-right text-center">
                  <select
                    className="border-2 border-gray-200 rounded-md w-[90%]"
                    id="dificultad"
                    name="dificultad"
                    value={nivelUsers}
                    onChange={handleSelectChangeUsers}
                  >
                    <option value="" defaultValue="true">
                      English level
                    </option>
                    <option value="">All</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                  </select>
                </div>
                <div className=" place-self-center mx-[5%] clear-both">
                  {filteredUsers.length > 0 ? (
                    <>
                      <TableAdminUsers users={filteredUsers} />
                      <div className="w-full p-5 text-center">
                        <Link
                          to={'/admin/dash/users'}
                          className="py-2 w-60 px-8 rounded-md bg-blue-200"
                        >
                          Dashboard
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className="text-center">No users found</p>
                  )}
                </div>
              </TabPanel>
              <TabPanel key={"Video"} value={"Video"}>
                <div>
                  <div className="w-1/4 border-2 border-gray-200 rounded-md float-right text-center ">
                    <input
                      type="text"
                      placeholder="Search by user"
                      className="w-full "
                      value={queryVideos}
                      onChange={(e) => setQueryVideos(e.target.value)}
                    />
                  </div>
                  <div className="w-1/4  float-right text-center">
                    <select
                      className="border-2 border-gray-200 rounded-md w-[90%]"
                      id="dificultad"
                      name="dificultad"
                      value={nivelVideos}
                      onChange={handleSelectChangeVideos}
                    >
                      <option value="" defaultValue="true">
                        English level
                      </option>
                      <option value="">All</option>
                      <option value="A1">A1</option>
                      <option value="A2">A2</option>
                      <option value="B1">B1</option>
                      <option value="B2">B2</option>
                      <option value="C1">C1</option>
                      <option value="C2">C2</option>
                    </select>
                  </div>
                  <div className="place-self-center mx-[5%] clear-both">
                    {filteredVideos.length > 0 ? (
                      <>
                        <TableAdmin tests={filteredVideos} s3_endpoint={s3_endpoint} />
                        <div className="w-full p-5 text-center">
                          <Link
                            to={'/admin/dash/videos'}
                            className="py-2 w-60 px-8 rounded-md bg-blue-200"
                          >
                            Dashboard
                          </Link>
                        </div>
                      </>
                    ) : (
                      <p className="text-center">No videos found</p>
                    )}
                  </div>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </>
      )}
    </>
  );
}
