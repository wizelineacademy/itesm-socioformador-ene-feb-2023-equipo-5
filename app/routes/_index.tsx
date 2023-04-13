import type { V2_MetaFunction } from "@remix-run/react";
import { Link } from "@remix-run/react";


export const meta: V2_MetaFunction = () => {
  return [{ title: "Home" }];
};

export default function Index() {
  return (
    <div>
      <p><Link to='/results'>Ir a la pagina de resultados</Link></p>
      <p><Link to='/resultsAdmin'>Ir a la pagina de resultados de Admin</Link></p>
      <p><Link to='/tests'>Ir a la pagina de tests</Link></p>
    </div>
  );
}
