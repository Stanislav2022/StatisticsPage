import React from 'react';
import {
  BarChart,
  Bar,
  // Cell,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
// для прикладу створюємо константи, в подальшому отримуватимемо дані з бекенду
const todoByDay = 6;
const inprogressByDay = 10;
const doneByDay = 5;
const todoByMonth = 30;
const inprogressByMonth = 20;
const doneByMonth = 15;

const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
const todoByDayPerсent = Math.round((todoByDay / allTasksByDay) * 100);
const inprogressByDayPerсent = Math.round(
  (inprogressByDay / allTasksByDay) * 100
);
const doneByDayPerсent = Math.round((doneByDay / allTasksByDay) * 100);
const allTasksByMonth = todoByMonth + inprogressByMonth + doneByMonth;
const todoByMonthPerсent = Math.round((todoByMonth / allTasksByMonth) * 100);
const inprogressByMonthPerсent = Math.round(
  (inprogressByMonth / allTasksByMonth) * 100
);
const doneByMonthPerсent = Math.round((doneByMonth / allTasksByMonth) * 100);

const data = [
  {
    name: 'To Do',
    dv: todoByDay,
    mv: todoByMonth,
    dp: `${todoByDayPerсent}%`,
    mp: `${todoByMonthPerсent}%`,
  },
  {
    name: 'In Progress',
    dv: inprogressByDay,
    mv: inprogressByMonth,
    dp: `${inprogressByDayPerсent}%`,
    mp: `${inprogressByMonthPerсent}%`,
  },
  {
    name: 'Done',
    dv: doneByDay,
    mv: doneByMonth,
    dp: `${doneByDayPerсent}%`,
    mp: `${doneByMonthPerсent}%`,
  },
];

export const StatisticsChart = () => {
  return (
    <BarChart
      width={860}
      height={440}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <defs>
        <linearGradient id="colorDv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FFD2DD" stopOpacity={0} />
          <stop offset="95%" stopColor="#FFD2DD" stopOpacity={0.8} />
        </linearGradient>
        <linearGradient id="colorMv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3E85F3" stopOpacity={0} />
          <stop offset="95%" stopColor="#3E85F3" stopOpacity={0.8} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="dv" fill="url(#colorDv)" barSize={27}>
        <LabelList dataKey="dp" position="top" />
      </Bar>
      <Bar dataKey="mv" fill="url(#colorMv)" barSize={27}>
        <LabelList dataKey="mp" position="top" />
      </Bar>
    </BarChart>
  );
};
export default StatisticsChart;
