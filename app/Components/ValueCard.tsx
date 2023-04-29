const ValueCard = ({
  value,
  description,
}: {
  value: string;
  description: string;
}) => {
  return (
    <div className="box-content h-30 w-40 p-8 border-1 bg-cyan-100">
      <h1 className="text-center font-monserrat text-sky-600 text-base ml-5xt-lg  mb-5 px-30">
        {value}
      </h1>
      <p className="basis-1 mx-1 relative  place-items-left h-10 text-sm  text-center">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
