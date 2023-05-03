import ValueCard from "./ValueCard";

const ValuesSection = () => {
  return (
    <>
      <div>
        <h1 className="text-center font-monserrat text-slate-600 text-2xl ml-5xt-lg  mb-10 mt-20 ">
          OUR VALUES
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-20 place-items-center h-200 pr-20 mr-2  flex flex-row pl-60 pr-60">
        <ValueCard
          value="RESPONSBILITY"
          description="For the use of AI-based technologies"
        />
        <ValueCard
          value="KNOWLEDGE"
          description="Using innovative tools to improve education"
        />
        <ValueCard
          value="INNOVATION"
          description="Present your ideas to the audience in easy-to-understand language"
        />
        <ValueCard
          value="COLLABORATION"
          description="Build solutions by listening to different perspectives"
        />
      </div>
    </>
  );
};

export default ValuesSection;
