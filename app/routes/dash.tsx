import { useLoaderData } from "@remix-run/react";
import { db } from "~/services/db";
import { PolarAreaChart } from "~/components/Chart";
import { ChartComponent } from "~/components/BarChart";

// Define the loader method hook to retrieve data from the prisma client "Test" table
export async function loader() {
  const countTests = await getEnglishLevelCountsPerTest();

  const data = {
    countTests,
  };
  return data;
}

async function getEnglishLevelCountsPerTest() {
  const englishLevelCounts = await db.test.groupBy({
    by: ["englishlevel"],
    _count: {
      englishlevel: true,
    },
  });

  const result: { [level: string]: number }[] = [];

  for (const obj of englishLevelCounts) {
    const { _count, englishlevel } = obj;
    const levelCount = _count.englishlevel;
    result.push({ [englishlevel]: levelCount });
  }

  return result;
}

export default function Index() {
  const { countTests } = useLoaderData<typeof loader>();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "140vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "1000px",
          height: "800px",
          //sborder: "1px solid black",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "15rem",
            height: "100%",
          }}
        >
          <div>
            <PolarAreaChart data={countTests} />
            <ChartComponent data={countTests} />
          </div>

          <div>
            <PolarAreaChart data={countTests} />
            <ChartComponent data={countTests} />
          </div>
        </div>
      </div>
    </div>
  );
}