import type { V2_MetaFunction} from "@remix-run/react";
import Table from "~/Components/ResultsTable";
 


export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Result() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-grayfigma">Welcome to Result</h1>
     <Table/>
     
    </div>
    
  );
}
