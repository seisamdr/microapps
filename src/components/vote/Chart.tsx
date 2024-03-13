import { FC } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartProps {}

const Chart: FC<ChartProps> = ({}) => {
  const options = {
    labels: ["Cintara", "Cintara Surya Paloh", "Surya Surya"],

    colors: ["#36A2EB", "#FF6384", "#FFCD56"],

    animations: {
      enabled: true,
      easing: "easeOutExpo",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 500,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
      dataLabels: {
        enabled: false,
      },

      sparkline: {
        enabled: true,
      },
    },

    legend: {
      show: false,
    },
  };

  const series = [590, 170, 240];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={380}
        width={500}
      />
    </>
  );
};

export default Chart;
