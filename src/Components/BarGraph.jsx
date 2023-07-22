/* eslint-disable no-unused-vars */
import Chart from "chart.js/auto";
import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarGraph() {
  const xLabels = [
    20, 22.5, 25, 27.5, 30, 32.5, 35, 37.5, 40, 42.5, 45, 47.5, 50, 52.5, 55,
    57.5, 60, 62.5, 65,
  ];
  const dataset1 = [
    30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 108, 110,
    120,
  ];
  const dataset2 = [
    20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 98, 99, 110,
  ];
  const dataset3 = [
    10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 88, 90, 100,
  ];

  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "Employer: K 73,500",
        data: dataset1,
        backgroundColor: "#2C1F94",
      },
      {
        label: "Employee: K 52,500",
        data: dataset2,
        backgroundColor: "#4D35FF",
      },
      {
        label: "Total Interest: K 244,313",
        data: dataset3,
        backgroundColor: "#7996FF",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            weight: "bold",
          },
        },
      },
    },
    responsive: true,
    barPercentage: 0.4,
  };

  return <Bar data={data} options={options} />;
}
