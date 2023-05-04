import videoImagen from "../../public/img/video.png";
import ExamRow from "~/components/ExamRow";

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

function TableAdmin() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light table-fixed">
              <thead className="font-medium">
                <tr>
                  <th className="w-14" ><span></span></th>
                  <th className="text-grayfigma font-extralight text-sm " >Fecha de Examen</th>
                  <th className="text-grayfigma font-extralight text-sm">Nivel</th>
                  <th className="text-grayfigma font-extralight text-sm">Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                {
                  fake_exams.map(exam => {
                    return (
                      <ExamRow date={exam.date} grade={exam.grade} level={exam.level} image={videoImagen} />
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