import Chart from "./Chartresult";
import SquareR from "./SquareResult";
function Dashboard() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex justify-center">
          <h2 className="text-xl font-bold ">RESULTADOS</h2>
        </div>

        <div className="w-2/4 float-left">
          <Chart />
        </div>
        <div className="w-1/4 mx-[10%] my-[2%] float-left">
          <SquareR />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
