import type { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction} from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Header";
import { authenticator } from "~/services/auth.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Resources" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return profile;
};

const videoLinks = [
  "https://www.youtube.com/watch?v=gOMypAhVaXE",
  "https://www.youtube.com/watch?v=R43MuLhW1MU",
  "https://www.youtube.com/watch?v=qAbiefKhMtQ",
  "https://www.youtube.com/watch?v=BdLwnXR4hng",
  "https://www.youtube.com/watch?v=TLFv5Ku7niU",
  "https://www.youtube.com/watch?v=VaNFqmgrC6A",
  "https://www.youtube.com/watch?v=v8nZsllwkt0",
  "https://www.youtube.com/watch?v=PHPTlFi7-_0",
  "https://www.youtube.com/watch?v=OX-XEa50fFw",
  "https://www.youtube.com/watch?v=Bt8OTU34WKw",
  "https://www.youtube.com/watch?v=HIW4BTUKBGc",
  "https://www.youtube.com/watch?v=sEmv9kM_COA",
];

const Grid = () => {
  const profile = useLoaderData();
  return (
    <>
      <Header nombre={profile} />
      <div className="container mx-auto px-5  pl-20 pr-20 ml-20 mr-20  ">
        <div className=" font-monserrat items-center pt-10 text-start text-cyan-600">
          <h1 className="text-2xl font-bold	 ">
            Te dejamos los siguientes videos para ir mejorando tu nivel de
            ingles 😃
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {videoLinks.map((link, index) => (
            <a href={link} target="_blank" rel="noreferrer" key={index}>
              <div className="bg-gray-100 h-36 w-64 flex justify-center items-center relative">
                <img
                  src={`https://img.youtube.com/vi/${
                    link.split("=")[1]
                  }/mqdefault.jpg`}
                  alt={`Thumbnail for video ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25 hover:bg-opacity-50 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M16.016 9.771l-10-6a1 1 0 0 0-1 0A1 1 0 0 0 5 5v10a1 1 0 0 0 .016.229l10-6a1 1 0 0 0 0-1.458z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* <Form method="post" action="/auth/logout">
        <button className="flex flex-row mt-10 mx-10 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-20 ">
          Log Out
        </button>
      </Form> */}
      </div>
    </>
  );
};

export default Grid;
