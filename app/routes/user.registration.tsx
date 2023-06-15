import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import brainWaveLogo from "../../public/img/LogoAzulSinFondo.png";
import { db } from "~/services/db";
import Loading from "~/components/Loading";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Registration" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  //Aqui podriamos poner una verificacion si el usuario ya tiene nombre que te haga throw redirect a /user/profile
  const profileId = profile.id;

  return profileId;
};

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const fname: any = form.get("name");
  const fsurname: any = form.get("surname");
  const fid: any = form.get("profileId");

  await db.user.update({
    where: {
      id: fid,
    },
    data: {
      name: fname,
      familyName: fsurname,
      fullName: fname + " " + fsurname,
    },
  });
  return redirect("/auth/handle/redirect");
}

export default function Exam() {
  const profileId = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
      {navigation.state !== "idle" ? (
        <Loading />
      ) : (
        <div className="grid place-content-center">
          <div className="max-w-lg grid place-content-center px-24 py-12 mt-20 border-2 border-stone-200 rounded-2xl shadow-xl">
            <img
              src={brainWaveLogo}
              className="h-20 mx-auto"
              alt="Logo de BrainWave"
            />
            <p className="font-bold text-xl text-center">
              Let's finish your registration!
            </p>
            <p className="mt-6 text-justify text-gray-600">
              We just need some data to complete your profile
            </p>
            <Form action="" method="post" className="mt-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mb-4 bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <label
                htmlFor="surname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Surname(s)
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <div className="grid align-items-center">
                <button
                  type="submit"
                  name="profileId"
                  value={profileId}
                  className="mt-10 mx-auto px-20 py-4 border-2 border-stone-200 rounded-lg shadow bg-bluefigma5"
                >
                  <span className="text-cyan-50">Submit</span>
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
