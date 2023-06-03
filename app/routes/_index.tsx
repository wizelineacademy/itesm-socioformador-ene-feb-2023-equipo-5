import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      Asi es, Deploy exitoso
      <p>Junto con prueba de CICD con deploy tanto para MAIN como DEV final final</p>
    </div>
  );
}
