import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
// для прикладу створюємо константи, в подальшому отримуватимемо дані з бекенду
// const todoByDay = 5;
// const inprogressByDay = 10;
// const doneByDay = 5;

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];
// const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
// const todoByDayPerсent = todoByDay / allTasksByDay;
// const inprogressByDayPerсent = inprogressByDay / allTasksByDay;
// const doneByDayPerсent = doneByDay / allTasksByDay;

export default class StatisticsChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
