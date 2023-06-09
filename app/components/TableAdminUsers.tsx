import ExamRow from "./ExamRowAdmin";

function TableAdminUsers(props: any) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 scroll-auto h-[400px]">
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
