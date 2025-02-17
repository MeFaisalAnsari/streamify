import React from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { mockChartsData } from "../data/mockData";
import Card from "./Card";

const Charts = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ChartCard title="User Growth">
        <LineChart width={400} height={200} data={mockChartsData.userGrowth}>
          <XAxis dataKey="month" fontSize={10} />
          <YAxis fontSize={12} />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="var(--color-primary)" />
          <Line type="monotone" dataKey="active" stroke="#82ca9d" />
        </LineChart>
      </ChartCard>

      <ChartCard title="Revenue Distribution">
        <PieChart width={300} height={240}>
          <Tooltip />
          <Pie
            data={mockChartsData.revenueDistribution}
            dataKey="value"
            nameKey="source"
            fill="var(--color-primary)"
            stroke="var(--background)"
            label
          />
        </PieChart>
      </ChartCard>

      <ChartCard title="Top 5 Streamed Songs">
        <BarChart width={400} height={250} data={mockChartsData.topSongs}>
          <XAxis dataKey="name" fontSize={9} />
          <YAxis fontSize={12} />
          <Tooltip />
          <Bar dataKey="streams" fill="var(--color-primary)" />
        </BarChart>
      </ChartCard>
    </div>
  );
};

export default Charts;

const ChartCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <Card className="flex flex-col">
      <h3 className="text-xl font-semibold mt-2 mb-6">{title}</h3>
      <div className="flex flex-1 justify-center items-center">{children}</div>
    </Card>
  );
};
