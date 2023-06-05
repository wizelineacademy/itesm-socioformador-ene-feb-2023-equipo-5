import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useLoaderData, useNavigation } from "@remix-run/react";
import Loading from "~/components/Loading";
import TableAdmin from "~/components/TableAdmin";
import { authenticator } from "~/services/auth.server";
import { db } from "~/services/db";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Videos" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  // const profile = await authenticator.isAuthenticated(request, {
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
      //return resp
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

  const s3_endpoint = process.env.S3_ENDPOINT;

  return {
    tests: tests,
    s3_endpoint: s3_endpoint,
  };
};

export default function VideoAdmin() {
  const { tests, s3_endpoint } = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
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
    </>
  );
}
