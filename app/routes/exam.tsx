import Question from "~/components/exam/Question";
import Video from "~/components/exam/Video";
import Header from "~/components/Header";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useNavigation } from "@remix-run/react";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { getCredentials } from "~/services/s3Credentialsvideos.server";
import { db } from "~/services/db";
import Loading from "~/components/Loading";
import { getHeaderData } from "~/services/header.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Test" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const headerData = await getHeaderData(request);

  const s3ClientVideo = await getCredentials();

  const question = await db.question.findMany();
  const randomIndex = Math.floor(Math.random() * question.length);
  const randomquestion = question[randomIndex];

  const fechaActual = new Date().toISOString();
  const urlVideo =
    randomquestion.id + "_" + profile.id + "_" + fechaActual + ".mp4";

  return {
    profile: { profile },
    credentials: s3ClientVideo,
    question: randomquestion,
    urlVideo: urlVideo,
    headerData: headerData
  };
};

export default function Examn() {
  const navigation = useNavigation();
  const {
    profile: { profile },
    credentials,
    question,
    urlVideo,
    headerData
  } = useLoaderData();
  return (
    <>
      <Header name={headerData.name} role={headerData.role} photo={headerData.photo} />
      {navigation.state !== "idle" ? (
        <Loading />
      ) : (
        <div className="mx-auto">
          <Question
            texto={question.situation}
          ></Question>
          <Video
            credentials={credentials}
            question={question}
            profile={profile}
            urlVideo={urlVideo}
          />
        </div>
      )}
    </>
  );
}

export const action = async ({ request }: any) => {
  const form = await request.formData();

  const user = form.get("userid");
  const situation = form.get("situationid");
  const urlVideo = form.get("url");
  let answer = form.get("answer");
  const regex = /{[^{}]+}/g;
  const match = answer.match(regex);
  try {
    if (match) {
      answer = JSON.parse(match[0]);
    } else {
      throw json({ message: "No se encontró un JSON válido" }, { status: 404 });
    }
  } catch (error) {
    throw json(
      { message: "Error al analizar el JSON:", error },
      { status: 404 }
    );
  }
  const test = await db.test.create({
    // await db.test.create({
    data: {
      videoURL: urlVideo,
      coherence: answer.Coherence,
      vocabulary: answer.Vocabulary,
      grammar: answer.Grammar,
      feedaback: answer.Feedback,
      recommendation: answer.Recommendations,
      englishlevel: answer.English_Level,
      authorId: user,
      mainSituationId: situation,
    },
  });

  const userdata = await db.user.findUnique({
    where: { id: user },
  });

  const average = Math.round(
    (answer.Grammar + answer.Coherence + answer.Vocabulary) / 3
  );

  if (userdata?.averageMaxLevel == null || average > userdata.averageMaxLevel) {
    await db.user.update({
      where: { id: user },
      data: {
        averageMaxLevel: average,
        englishlevel: answer.English_Level,
        dateMaxLevel: test.createdAt,
      },
    });
  }

  return redirect(`/results/${test.id}`);
};

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="grid place-items-center clear-both h-[80%]">
        <div className="flex max-w-sm my-0 mx-auto p-6 rounded-lg bg-white shadow-xl items-center">
          <h1 className="text-xl text-center">{error.data.message}</h1>
        </div>
      </div>
    );
  }

  return (
    //ESTE ERROR QUIZAS SE DEBA A QUE NO SE ESTA CONECTANDO A LA BASE DE DATOS
    <div className="grid h-screen place-items-center">
      <div className="flex max-w-sm my-0 mx-auto p-6 rounded-lg bg-white shadow-xl items-center">
        <h1 className="text-center">No se pudo cargar la página</h1>
      </div>
    </div>
  );
}