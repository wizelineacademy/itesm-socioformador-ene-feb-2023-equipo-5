import React, { useRef, useEffect } from "react";
import Chart, { ChartOptions } from "chart.js/auto";

export default function ChartComponentRadar() {
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
            labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
            datasets: [
              {
                label: "My First Dataset",
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                  "rgb(54, 162, 235)",
                  "rgb(30, 100, 200)",
                  "rgb(144, 202, 255)",
                  "rgb(184, 222, 255)",
                  "rgb(224, 242, 255)",
                ],
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
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <canvas ref={chartRef} style={{ width: "50%", height: "50%" }} />
    </div>
  );
}
