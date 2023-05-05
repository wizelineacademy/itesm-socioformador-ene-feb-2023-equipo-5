import Footer from "~/components/Footer";
import Question from "~/components/examn/Question";
import Video from "~/components/examn/Video";
import Header from "~/components/Header";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { authenticator } from "../services/auth.server";

//ESTO VA A CAMBIAR DE LUGAR
export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request);
  return json(profile);
};

export default function Examn() {
  const profile = useLoaderData();
  console.log(profile)
  return (
    <div className="mx-auto">
      <Header nombre={profile}/>
      <Question texto="¿Cuál ha sido una situación en la que tuviste un desacuerdo en un ambiente de trabajo? ¿Cómo lo resolviste?"></Question>
      <Video />
      <Footer />
    </div>
  );
}
