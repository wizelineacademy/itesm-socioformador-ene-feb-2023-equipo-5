import { V2_MetaFunction, Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import type { LoaderArgs } from "@remix-run/node";

const videoLinks = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
];

const Grid = () => {
  return (
    <div className="container mx-auto px-10 pt-20">
      <div className="grid grid-cols-3 gap-4">
        {videoLinks.map((link, index) => (
          <a href={link} target="_blank" rel="noreferrer" key={index}>
            <div className="bg-gray-100 h-32 flex justify-center items-center">
              Cell {index + 1}
            </div>
          </a>
        ))}
        <Form method="post" action="/auth/logout">
          <button className="py-2 w-40 rounded-md bg-graybgfigma">
            Log Out
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Grid;
