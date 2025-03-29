"use client"

import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

interface PieChartProps {
  options: any;
}

const PieChart: React.FC<PieChartProps> = ({ options }) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
