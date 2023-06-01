import type { V2_MetaFunction } from "@remix-run/node";
import ChartComponent from "~/components/BarChart";
import React, { useEffect, useState } from "react";
import ChartComponentPie from "~/components/Chart";
import ChartComponentRadar from "~/components/Radarchart";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    fetch("/dummyData.json")
      .then((response) => response.json())
      .then((data) => {
        setDummyData(data);
      })
      .catch((error) => {
        console.error("Error reading dummyData.json:", error);
      });
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "1rem" }}>
          <ChartComponentPie />
        </div>
        <div style={{ flex: 1, padding: "1rem" }}>
          <ChartComponentRadar />
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "0" }}>
        <div style={{ flex: 1, padding: "1rem" }}>
          <ChartComponentRadar />
        </div>
        <div style={{ flex: 1, padding: "1rem" }}>
          <ChartComponent />
        </div>
      </div>
    </>
  );
}
