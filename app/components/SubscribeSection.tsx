const SubscribeSection = () => {
  return (
    <>
      <div
        id="SubscribeSection"
        className="bg-white max-h- fit mr-10 ml-10 rounded-lg mt-20"
      >
        <div className="grid grid-cols-3  gap-20 place-items-center h-200 pr-2">
          <div>
            <img
              className="mt-5 mb-5 "
              src="/img/Coltres.png"
              alt=""
              width="250px"
              height="auto"
            />
          </div>
          <div>
            <h1 className=" basis-1 mx-1 text-center font-monserrat text-slate-600 text-2xl ml-5xt-lg  mt-10 mb-10 ">
              Subscribe to our News and Updates
            </h1>
            <p className="basis-1/3 mx-2 relative  place-items-left h-10 text-sm  text-center mt-10 text-slate-500  mb-20">
              Stay up to date with the latest news and updates by subscribing to
              our social network feeds and notifications.
            </p>
            <div className="container mx-4 flex justify-center items-center grow h-14 rounded-lg">
              <input
                type="text"
                placeholder="Email adress"
                className="flex flex-row rounded  mx-10 bg-gray-100  py-2 px-4 grow h-10 w-18 mb-20  ml-2 justify-center pr-60 "
              />
              <button className="flex flex-row  mx-12 bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded items-center mb-20  ">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <img
              className="mt-5 mb-5"
              src="/img/Colcuatro.png"
              alt=""
              width="250px"
              height="auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeSection;
