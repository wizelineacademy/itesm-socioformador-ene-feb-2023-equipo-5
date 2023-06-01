import React, { useRef, useEffect } from "react";
import Chart, { ChartOptions } from "chart.js/auto";

export default function ChartComponentPie() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstanceRef.current) {
          // Destroy the previous chart instance
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: [
              "Coherencia",
              "Gramática",
              "Fluidez",
              "Vocabulario",
              "Pronunciación",
              "Comprensión",
            ],

            datasets: [
              {
                label: "Results Belen Ariadna González Mendoza ",
                data: [300, 50, 100, 50, 100],
                backgroundColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],

                //borderWidth: 5,
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
          } as ChartOptions, // Cast options to ChartOptions type
        });
      }
    }

    return () => {
      // Cleanup: destroy the chart instance when the component unmounts
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return <canvas ref={chartRef} style={{ width: "56px", height: "56px" }} />;
}
