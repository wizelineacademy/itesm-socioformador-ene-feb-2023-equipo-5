import Question from "~/components/examn/Question";
import Video from "~/components/examn/Video";
import Header from "~/components/Header";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { getCredentials } from "~/services/s3Credentialsvideos.server";
import { db } from "~/services/db";
import { random } from "cypress/types/lodash";

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

export const action = async () => {
  // const randomquestion = await db.question.findMany({
  //   data:
  // })
  // console.log(randomquestion)
  const test = await db.test.create({
    data: {
      videoURL: "Prueba de subida",
      result: "Resultado de prueba",
      feedaback: "Feedback de prueha",
      resources: "Recursos de prueba",
      authorId: "google-oauth2|116725110233682628133",
      mainSituationId: "d242037c-29eb-43ff-aa6b-19230c7c08c4",
      englishlevel: "A2"
    }
  })
  console.log(test)
  return "ok"
}
