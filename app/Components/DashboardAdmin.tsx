import Chart from "./Chartresult";
import SquareR from "./SquareResult";
function Dashboard() {
  return (
    <>
      <div className="rounded-md ">
        <div className="float-left  h-2/4 ">
          <Chart />
        </div>
        <div className="float-right mx-5 h-2/5 ">
          <SquareR />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
