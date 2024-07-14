'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  // TooltipProps,
} from 'recharts';

interface PieData {
  name: string;
  value: number;
}

const pieData: PieData[] = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <>
            
            {entry && <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />}</>
          ))}
        </Pie>
        {/* <Tooltip content={<CustomTooltip />} /> */}
        {/* <Legend /> */}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;

// interface CustomTooltipProps extends TooltipProps<number, string> {}

// const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
//         <p className="text-medium text-lg">{payload[0].name}</p>
//         <p className="text-sm text-blue-400">
//           Value:
//           <span className="ml-2">${payload[0].value}</span>
//         </p>
//       </div>
//     );
//   }
//   return null;
// };
