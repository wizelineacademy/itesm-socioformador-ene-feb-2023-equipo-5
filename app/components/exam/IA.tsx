import IA from "../../../public/img/IA.png"

function Ia(props: any) {
  return (
    <div className="bg-white rounded-lg p-4 my-10 mx-auto w-5/12">
      <img src={IA} alt={props.alt} className="mx-auto w-2/5 h-auto" />
    </div>
  );
}

export default Ia;