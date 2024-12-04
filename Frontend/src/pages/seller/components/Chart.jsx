import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Đăng ký các phần tử Chart.js cần thiết
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: [
      "00:00",
      "03:00",
      "06:00",
      "09:00",
      "12:00",
      "15:00",
      "18:00",
      "21:00",
    ],
    datasets: [
      {
        label: "Doanh Số (VND)",
        data: [120000, 80000, 108000, 92000, 60000, 71000, 12800, 42000], // Dữ liệu doanh số theo từng giờ
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Màu nền cho cột
        borderColor: "rgba(75, 192, 192, 1)", // Màu viền cho cột
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Thống Kê Doanh Số Theo Giờ",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Giờ Trong Ngày",
        },
      },
      y: {
        title: {
          display: true,
          text: "Doanh Số (VND)",
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
