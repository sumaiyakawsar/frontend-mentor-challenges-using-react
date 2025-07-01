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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
    const labels = data.map((item) => item.day);
    const amounts = data.map((item) => item.amount);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const todayDay = daysOfWeek[new Date().getDay()].toLowerCase(); // e.g. "Tue"

    const backgroundColors = data.map((item) =>
        item.day === todayDay ? "rgba(135, 190, 196,1)" : "rgba(236, 119, 95,1)"
    );

    //For Max
    const maxValue = Math.max(...amounts);

    // const backgroundColors = data.map((item) =>
    //     item.amount === maxValue ? "rgba(135, 190, 196,1)" : "rgba(236, 119, 95,1)"
    // );

    const chartData = {
        labels,
        datasets: [
            {
                data: amounts,
                backgroundColor: backgroundColors,
                hoverBackgroundColor: backgroundColors.map((color) =>
                    color.replace("1)", "0.6)") // reduce opacity on hover
                ),
                borderRadius: {
                    topLeft: 6,
                    topRight: 6,
                    bottomLeft: 6,
                    bottomRight: 6,
                },
                barThickness: 30,
            },
        ],
    };


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: { top: 30 }, // space for tooltip above bars
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                backgroundColor: "#382314",
                cornerRadius: 6,
                padding: 6,
                caretSize: 0,               // remove pointer
                caretPadding: 8,
                position: "nearest",        // closest to bar
                yAlign: "bottom",           // push tooltip upward
                xAlign: "center",           // center align above bar
                displayColors: false,       // no color box
                bodyFont: { size: 14, weight: "bold" },
                callbacks: {
                    title: () => "", // no title
                    label: (ctx) => `$${ctx.parsed.y}`, // only value
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                display: false,
                grid: {
                    drawBorder: false, // ✅ this removes the horizontal baseline
                },
            },
            x: {
                border: {
                    display: false, // ✅ This is the correct way in Chart.js 4.5+
                },
                grid: {
                    display: false,      // hides vertical grid lines
                }
            },


        },
    };




    return <Bar data={chartData} options={options} />;
};

export default BarChart;
