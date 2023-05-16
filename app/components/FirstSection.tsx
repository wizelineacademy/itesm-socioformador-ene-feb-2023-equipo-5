export default function FirstSection() {
  return (
    <>
      <div
        id="FirstSection"
        className="bg-white min-h-screen mx-20 rounded-lg mt-10 px-20"
      >
        <div className="grid grid-cols-3 gap-10 h-200 pr-2 mt-10  ">
          <div className="pt-52 mb-10">
            <img src="/img/Coluno.png" width="350px" height="auto" />
          </div>
          <div className=" font-monserrat items-center pt-72 text-center">
            <h1 className="text-3xl r">
              This is us
            </h1>
            <p className="font-light mt-5">
              Wizeline is facing the problem of receiving too many job
              applications and it needs to efficiently evaluate the applicants
              English level.
            </p>
          </div>
          <div className="pt-20">
            <img src="/img/Coldos.png" width="350px" height="auto" />
          </div>
        </div>
      </div>
    </>
  );
}
