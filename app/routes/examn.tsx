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

  const question = await db.question.findMany()
  const randomIndex = Math.floor(Math.random() * question.length);
  const randomquestion = question[randomIndex];

  return {
    profile: { profile },
    credentials: s3ClientVideo,
    question: randomquestion
  }
}

export default function Examn() {
  const { profile: { profile }, credentials, question } = useLoaderData()
  console.log(question)
  return (
    <div className="mx-auto">
      <Header nombre={profile} />
      <Question texto={question.situation}></Question>
      <Video credentials={credentials} question={question}/>
    </div>
  )
}

export const action = async ({ request }: any) => {
  const form = await request.formData()

  const answer = JSON.parse(form.get('answer'))

  const test = await db.test.create({
    data: {
      videoURL: 'Prueba de subida',
      coherence: answer.data.Coherence,
      vocabulary: answer.data.Vocabulary,
      grammar: answer.data.Grammar,
      feedaback: answer.data.Feedback,
      recommendation: answer.data.Recommendations,
      englishlevel: answer.data.English_Level,
      authorId: 'google-oauth2|116725110233682628133',
      mainSituationId: '7d10df40-099d-44dd-8d3a-065bb17e0ca4'
    }
  })
  console.log(test)
  return "ok"
}
