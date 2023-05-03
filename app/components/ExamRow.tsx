import videoImagen from "../../public/img/video.png";

export default function ExamRow(props: any) {

    return (
        <>      <tr>
                    <td className="w-14" ><div className="w-4 h-4 bg-bluefigma1 rounded-full"></div></td>
                    <td className="font-bold" >{props.date}</td>
                    <td className="text-greenfigma font-bold">{props.level}</td>
                    <td className="font-bold">{props.grade}</td>
                    <td ><img className="w-28 my-5 rounded-lg" src={props.image} /></td>
                  </tr>
        </>
    )

}
