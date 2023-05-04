import { Links } from "@remix-run/react";
import {
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

//Ver este componente...
//--------------------------------------
import PageHeader from "~/components/PageHeader";
//--------------------------------------
import Footer from "~/components/Footer";

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="min-h-[35vw]">
        <Outlet />
      </body>

      {/* Ver esta seccion... */}
      {/* -------------------------------------- */}
      <footer className="static inset-x-0 bottom-0 clear-both">
        <Footer />
      </footer>
      {/* -------------------------------------- */}

      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </html>
  );
}
