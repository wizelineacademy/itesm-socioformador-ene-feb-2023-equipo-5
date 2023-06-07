import { useRef, useEffect } from "react";
import type { ChartOptions } from "chart.js/auto";
import Chart from "chart.js/auto";

export function PolarAreaChart(props: any) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstanceRef.current) {
          // Destruir la instancia del gráfico anterior
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: "polarArea",
          data: {
            labels: props.data.map((test: any) => Object.keys(test)[0]),
            datasets: [
              {
                label: "English Level Counts",
                data: props.data.map((test: any) => Object.values(test)[0]),
                backgroundColor: [
                  "rgb(54, 162, 235)",
                  "rgb(30, 100, 200)",
                  "rgb(144, 202, 255)",
                  "rgb(150, 200, 255)",
                  "rgb(224, 242, 255)",
                  "rgb(100, 200, 170)",
                ],
                hoverOffset: 4,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          } as ChartOptions,
        });
      }
    }

    return () => {
      // Limpiar: destruir la instancia del gráfico cuando el componente se desmonte
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  });

  return (
    <div style={{ padding: "1rem" }}>
      <canvas ref={chartRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
