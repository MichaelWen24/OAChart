import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

interface SalesChartProps {
  sales: Array<{ weekEnding: string; retailSales: number; wholesaleSales: number }>;
}

const SalesChart: React.FC<SalesChartProps> = ({ sales }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={sales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weekEnding" />
        <YAxis domain={[0, 'dataMax + 100000']}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
