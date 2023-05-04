import ResultsTable from "~/components/ResultsTable";
import type { V2_MetaFunction } from "@remix-run/react";
import { isRouteErrorResponse } from "@remix-run/react";
import { useRouteError } from "@remix-run/react";
import Header from "~/components/Header";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Tests" }];
};

export default function TestsPages() {
  return (
    <>
        <Header />
      <div className="flex flex-row mt-14 mx-10">
        <div className="basis-1/2 mx-2 relative">
          <p className="text-lg font-bold mb-4">Evaluaciones</p>
          <ResultsTable />
          <div className="pb-5 absolute inset-x-0 bottom-0">
            <div className="flex space-x-8 place-content-center">
              <button className="py-2 w-40 rounded-md bg-blue-200">
                Repetir prueba
              </button>
              <button className="py-2 w-40 rounded-md bg-blue-200">
                Recursos
              </button>
            </div>
          </div>
        </div>
        <div className="basis-1/2 mx-2">
          <p className="text-lg font-bold mb-4">
            Puntaje Máximo: *prop de puntaje maximo*
          </p>
          <p>Aqui va la grafica</p>
          <div className="mx-12 mt-8 p-3 rounded-md bg-gray-200">
            <p>Recomendaciones</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper
              malesuada justo, eget aliquam magna maximus eget. Vivamus porta
              mauris iaculis, luctus erat vel, rhoncus erat. Praesent elit
              tortor, feugiat ac lectus eget, aliquam vulputate orci. Vivamus
              pulvinar lacus ut dui tempor porta laoreet suscipit magna. Integer
              dapibus pellentesque nisi vitae efficitur. Etiam diam ipsum,
              maximus ut pharetra at, lobortis in felis. Etiam sit amet tortor
              id augue ultricies tempor quis eget orci. Aenean ligula eros,
              tempor eget blandit ut, elementum vel nulla. Nullam laoreet
              sodales arcu at pulvinar. Nunc posuere enim ex. Praesent auctor
              lacus vitae suscipit lacinia. Nam non orci et erat sagittis
              aliquet. Aenean pellentesque quis leo at efficitur. Nullam
              suscipit ultricies tempus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h3>ERROR</h3>
        <p>{error.data.message}</p>
      </div>
    )
  }

  return (
    <div>
      <p>ERROR PREDETETRMINADO</p>
    </div>
  )
}
