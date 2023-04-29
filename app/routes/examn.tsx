import Footer from "~/components/Footer";
import Question from "~/components/examn/Question";
import Video from "~/components/examn/Video";
import Header from "~/components/Header";

export default function Examn() {
  return (
    <div className="mx-auto">
      <Header />
      <Question texto="¿Cuál ha sido una situación en la que tuviste un desacuerdo en un ambiente de trabajo? ¿Cómo lo resolviste?"></Question>
      <Video />
      <Footer />
    </div>
  );
}
