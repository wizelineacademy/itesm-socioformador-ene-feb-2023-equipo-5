import Question from "~/components/examn/Question";
import Video from "~/components/examn/Video";
import Header from "~/components/Header";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { getCredentials } from "~/services/s3Credentialsvideos.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Test" }]
}

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const s3ClientVideo = await getCredentials()
  return {
    profile: { profile },
    credentials: s3ClientVideo
  }
}

export default function Examn() {
  const { profile: { profile }, credentials } = useLoaderData()
  return (
    <div className="mx-auto">
      <Header nombre={profile} />
      <Question texto="What are you currently studying and why?"></Question>
      <Video credentials={credentials} />
    </div>
  )
}
