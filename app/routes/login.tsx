import type { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Login" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request, {
    successRedirect: "/user/profile",
  });

  return profile;
};

export default function LoginPage() {
  return (
    <>
      <div className="grid place-content-center">
        <div className="max-w-lg grid place-content-center px-24 py-12 mt-20 border-2 border-stone-200 rounded-2xl shadow-xl">
          <p className="font-bold text-xl text-center">Welcome!</p>
          <p className="mt-6 text-justify text-gray-600">
            Welcome back to{" "}
            <span className="text-bluefigma5 font-bold">SmartSpeak</span>. We
            are thrilled to assist you on your journey towards improving your
            English language skills. Let's get started!
          </p>
          <Form
            action="/auth/auth0"
            method="post"
            className="grid place-content-center"
          >
            <button className="mt-10 px-20 py-4 border-2 border-stone-200 rounded-lg shadow bg-bluefigma5">
              <span className="text-cyan-50">Log in</span>
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
