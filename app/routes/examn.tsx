import Question from '~/components/examn/Question'
import Video from '~/components/examn/Video'

export default function Examn() {
    return (
        <div className="mx-auto">
            <Question texto="¿Cuál ha sido una situación en la que tuviste un desacuerdo en un ambiente de trabajo? ¿Cómo lo resolviste?"></Question>
            <Video />
        </div>
    )
}