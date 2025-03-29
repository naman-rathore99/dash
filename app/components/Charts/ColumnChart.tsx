"use client"

import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

interface ColumnChartProps {
  options: any;
}

const ColumnChart: React.FC<ColumnChartProps> = ({ options }) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ColumnChart;
