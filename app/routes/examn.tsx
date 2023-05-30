import Question from "~/components/examn/Question";
import Video from "~/components/examn/Video";
import Header from "~/components/Header";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { getCredentials } from "~/services/s3Credentialsvideos.server";
import { db } from "~/services/db";

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

  const fechaActual = (new Date()).toISOString();
  const urlVideo = randomquestion.situation + "_" + profile.id + "_" + fechaActual + ".mp4"

  return {
    profile: { profile },
    credentials: s3ClientVideo,
    question: randomquestion,
    urlVideo: urlVideo
  }
}

export default function Examn() {
  const { profile: { profile }, credentials, question, urlVideo } = useLoaderData()
  console.log(urlVideo)
  return (
    <div className="mx-auto">
      <Header nombre={profile} />
      <Question texto={question.situation}></Question>
      <Video credentials={credentials} question={question} profile={profile} urlVideo={urlVideo}/>
    </div>
  )
}

export const action = async ({ request }: any) => {
  const form = await request.formData()

  const user = form.get('userid')
  const situation = form.get('situationid')
  const answer = JSON.parse(form.get('answer'))
  const urlVideo = form.get('url')
  // const test = await db.test.create({
  await db.test.create({
    data: {
      videoURL: urlVideo,
      coherence: answer.data.Coherence,
      vocabulary: answer.data.Vocabulary,
      grammar: answer.data.Grammar,
      feedaback: answer.data.Feedback,
      recommendation: answer.data.Recommendations,
      englishlevel: answer.data.English_Level,
      authorId: user,
      mainSituationId: situation
    }
  })
  // console.log(test)
  return redirect('/')
}
