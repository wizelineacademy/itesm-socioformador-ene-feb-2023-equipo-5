import ExamRow from "./ExamRow";

function TableAdmin(props: any) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light table-fixed">
              <thead className="font-medium">
                <tr className="text-center">
                  <th className="w-14">
                    <span></span>
                  </th>
                  <th className="text-grayfigma font-extralight text-sm ">
                    Date
                  </th>
                  <th className="text-grayfigma font-extralight text-sm ">
                    User
                  </th>
                  <th className="text-grayfigma font-extralight text-sm">
                    English level
                  </th>
                  <th className="text-grayfigma font-extralight text-sm">
                    Average Score
                  </th>
                  <th className="text-grayfigma font-extralight text-sm">
                    Video preview
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.tests.map(
                  (test: {
                    grammar: any;
                    coherence: any;
                    vocabulary: any;
                    author: any;
                    id: Number;
                    createdAt: String;
                    grade: Number;
                    englishlevel: String;
                    videoURL: String;
                  }) => {
                    const average = Math.round(
                      (test.grammar + test.coherence + test.vocabulary) / 3
                    );
                    const videoLink = props.s3_endpoint + "/" + test.videoURL;
                    return (
                      <ExamRow
                        key={test.id}
                        date={test.createdAt.split("T")[0]}
                        username={test.author.fullName}
                        grade={average}
                        level={test.englishlevel}
                        video={videoLink}
                        id={test.id}
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
export default TableAdmin;
