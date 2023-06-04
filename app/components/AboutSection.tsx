const AboutSection = ({
  title,
  description,
  img_1_url,
  img_2_url,
}: {
  title: string;
  description: string;
  img_1_url: string;
  img_2_url: string;
}) => {
  return (
    <header className="flex items-center justify-between bg-gray-100 py-50 px-100 content-center ">
      <div id="AboutSection" className="flex flex-row mt-14 mx-10">
        <div className="basis-1/3  mx-10 relative place-items-center h-56 ">
          <h1 className="text-center text-sky-600 text-2xl ml-10xt-lg  mb-4  mt-20 inline-block align-top">
            {title}
          </h1>
          <p className="text-zinc-500 text-justify leading-normal  inline-block align-top ">
            {description}
          </p>
        </div>

        <div className="flex flex-row mx-12 mt-8 p-3 rounded-md bg-gray-20">
          <img
            className="object-center object-scale-down h-48 w-96 mt-12"
            src={img_1_url}
            alt="Foto"
          />
          <img
            className="object-center object-scale-down h-48 w-96 mb-15 "
            src={img_2_url}
            alt="Foto"
          />
        </div>
      </div>
    </header>
  );
};

export default AboutSection;
