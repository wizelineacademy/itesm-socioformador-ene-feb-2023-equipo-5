import Question from "~/components/examn/Question";
import Video from "~/components/examn/Video";
import Header from "~/components/Header";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Test" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return json(profile);
};

export default function Examn() {
  const profile = useLoaderData();
  return (
    <div className="mx-auto">
      <Header nombre={profile}/>
      <Question texto="¿Cuál ha sido una situación en la que tuviste un desacuerdo en un ambiente de trabajo? ¿Cómo lo resolviste?"></Question>
      <Video />
    </div>
  );
}
