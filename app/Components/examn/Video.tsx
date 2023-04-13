import video from "../../../public/img/video.png";
import IA from "~/components/examn/IA";
import Progress from "./Progress";
import Section from "./Section";

function Video(props: any) {
  return (
    <div className="mx-auto w-4/6">
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <img src={video} alt={props.alt} className=" w-3/5 h-auto" />
        <IA />
      </div>
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <Progress checked={true} />
        <Section texto="Grammar section"></Section>
      </div>
    </div>
  );
}

export default Video;
