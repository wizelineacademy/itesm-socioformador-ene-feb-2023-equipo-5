import videoImagen from "../../public/img/video.png";
import ExamRow from "./ExamRow";

interface Exam {

  date: String;
  level: String
  grade: String;

}

var fake_exams: Exam[];

const exam1: Exam = { date: "24/03/2023", level: "B2", grade: "97%" }
const exam2: Exam = { date: "19/03/2023", level: "C2", grade: "85%" }
const exam3: Exam = { date: "02/03/2023", level: "C1", grade: "77%" }
const exam4: Exam = { date: "25/02/2023", level: "A2", grade: "91%" }

fake_exams = [exam1, exam2, exam3, exam4]

function TableAdmin(props:any) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light table-fixed">
              <thead className="font-medium">
                <tr>
                  <th className="w-14" ><span></span></th>
                  <th className="text-grayfigma font-extralight text-sm " >Date</th>
                  <th className="text-grayfigma font-extralight text-sm " >User</th>
                  <th className="text-grayfigma font-extralight text-sm">English level</th>
                  <th className="text-grayfigma font-extralight text-sm">Average Score</th>
                  <th className="text-grayfigma font-extralight text-sm">Video preview</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.tests.map((test: {
                    grammar: any; coherence: any; vocabulary: any; author: any; id: Number; createdAt: String; grade: Number; englishlevel: String; videoURL: String}) => {
                    const average = Math.round((test.grammar +  test.coherence + test.vocabulary)/3)
                    const videoLink = props.s3_endpoint + "/" + test.videoURL
                    return (
                      <ExamRow key={test.id} date={test.createdAt.split("T")[0]} username={test.author.fullName} grade={average} level={test.englishlevel} video={videoLink} id={test.id} />
                    )

                  })

                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TableAdmin;