import { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import TableAdmin from "~/components/TableAdmin";
import { authenticator } from "~/services/auth.server";

export const meta: V2_MetaFunction = () => {
    return [{ title: "Videos" }];
};

export const loader = async ({ request }: LoaderArgs) => {
    const profile = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login",
    });

    return profile
};

export default function VideoAdmin() {
    return (
        <>
        <div>
           <div className="flex flex-col px-20 py-8  place-content-center">
               <p className="text-lg font-bold py-5">Evaluaciones</p>
               <TableAdmin/>
           </div>

           <button className="bg-bluefigma4 text-base font-semibold text-white p-2 rounded-lg ml-20">Go Back</button>

        </div>
        </>
    );
}
