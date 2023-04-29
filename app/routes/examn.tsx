import Footer from "~/Components/Footer";
import Question from "~/Components/examn/Question";
import Video from "~/Components/examn/Video";
import Header from "~/Components/Header";

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
