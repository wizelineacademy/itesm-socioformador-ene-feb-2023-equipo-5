import ExamRow from "./ExamRowAdmin";

// interface Exam {
//   date: String;
//   level: String;
//   grade: String;
// }

// var fake_exams: Exam[];

// const exam1: Exam = { date: "24/03/2023", level: "B2", grade: "97%" };
// const exam2: Exam = { date: "19/03/2023", level: "C2", grade: "85%" };
// const exam3: Exam = { date: "02/03/2023", level: "C1", grade: "77%" };
// const exam4: Exam = { date: "25/02/2023", level: "A2", grade: "91%" };

// fake_exams = [exam1, exam2, exam3, exam4];

function TableAdminUsers(props: any) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 scroll-auto h-[150px]">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light table-fixed">
              <thead className="font-medium">
                <tr className="text-center">
                  <th className="w-14">
                    <span></span>
                  </th>
                  <th className="text-grayfigma font-extralight text-sm ">
                    Users
                  </th>
                  <th className="text-grayfigma font-extralight text-sm">
                    Level
                  </th>
                  <th className="text-grayfigma font-extralight text-sm">
                    Date
                  </th>
                  <th className="text-grayfigma font-extralight text-sm">
                    Average Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.users.map(
                  (user: {
                    id: Number;
                    fullName: String;
                    englishlevel: String;
                    dateMaxLevel: string;
                    averageMaxLevel: Number;
                    createdAt: String;
                  }) => {
                    return (
                      <ExamRow
                        key={user.id}
                        name={user.fullName}
                        date={user.dateMaxLevel}
                        level={user.englishlevel}
                        grade={user.averageMaxLevel}
                        id={user.id}
                      />
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TableAdminUsers;
