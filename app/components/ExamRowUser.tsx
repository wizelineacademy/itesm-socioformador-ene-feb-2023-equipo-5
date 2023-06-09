import { Link } from "@remix-run/react";

export default function ExamRow(props: any) {
  return (
    <>
      <tr className="text-center">
        <td className="w-14">
          <div className="w-4 h-4 bg-bluefigma1 rounded-full"></div>
        </td>
        <td className="font-bold">{props.date}</td>
        <td className="text-greenfigma font-bold">{props.level}</td>
        <td className="font-bold">{props.grade}%</td>
        <td className="font-gray-800 underline">
          {" "}
          <Link to={`/results/${props.id}`}>Details</Link>
        </td>
      </tr>
    </>
  );
}
