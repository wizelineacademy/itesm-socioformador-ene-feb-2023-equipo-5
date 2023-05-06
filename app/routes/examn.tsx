import Footer from "~/components/Footer";
import Question from "~/components/examn/Question";
import Video from "~/components/examn/Video";
import Header from "~/components/Header";
import { getCredentials } from "~/services/s3Credentialsvideos.server";
import { useLoaderData } from '@remix-run/react';

export async function loader() {
  const s3ClientVideo = await getCredentials()
  /*
  if (s3ClientVideo.region === undefined ||
      s3ClientVideo.credentials.accessKeyId === undefined ||
      s3ClientVideo.credentials.secretAccessKey === undefined) {
      console.log('nmms')
  }
  */
  return s3ClientVideo
}

export default function Examn() {
  const s3ClientCredentials = useLoaderData()
  return (
    <div className="mx-auto">
      <Header />
      <Question texto="¿Cuál ha sido una situación en la que tuviste un desacuerdo en un ambiente de trabajo? ¿Cómo lo resolviste?"></Question>
      <Video credentials={s3ClientCredentials}/>
    </div>
  );
}
