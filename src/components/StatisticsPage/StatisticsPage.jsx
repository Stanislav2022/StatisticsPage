import React from 'react'
import StatisticsChart from "../StatisticsChart/StatisticsChart";
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator'


const StatisticsPage = () => {
  return (
    <div>
      <StatisticsChart />
      <PeriodPaginator/>
    </div>
  )
}

export default StatisticsPage