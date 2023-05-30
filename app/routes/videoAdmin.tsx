import { LoaderArgs } from "@remix-run/node";
import { V2_MetaFunction, useLoaderData } from "@remix-run/react";
import TableAdmin from "~/components/TableAdmin";
import { authenticator } from "~/services/auth.server";
import { db } from "~/services/db";

export const meta: V2_MetaFunction = () => {
    return [{ title: "Videos" }];
};

export const loader = async ({ request }: LoaderArgs) => {
    const profile = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login",
    });

    const tests = await db.test.findMany({
        select: {
            id: true,
            videoURL: true,
            englishlevel: true,
            createdAt: true
        }
    })

    return {
        tests: tests
    }
};

export default function VideoAdmin() {
    const {tests} = useLoaderData()
    console.log(tests) 
    return (
        <>
        <div>
           <div className="flex flex-col px-20 py-8  place-content-center">
               <p className="text-lg font-bold py-5">Evaluaciones</p>
               <TableAdmin tests={tests}/>
           </div>

           <button className="bg-bluefigma4 text-base font-semibold text-white p-2 rounded-lg ml-20">Go Back</button>

        </div>
        </>
    );
}
