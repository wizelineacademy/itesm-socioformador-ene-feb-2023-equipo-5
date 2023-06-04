import { useRef, useEffect } from "react";
import type { ChartOptions } from "chart.js/auto";
import Chart from "chart.js/auto";

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
            labels: ["Coherence", "Vocabulary", "Grammar", "Average"],
            datasets: [
              {
                label: "Grades",
                data: [85, 73, 68, 82],
                backgroundColor: [
                  "rgb(134,233,233)",
                  "rgb(60,218,216)",
                  "rgb(56,201,238)",
                  "rgb(65,167,237",
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