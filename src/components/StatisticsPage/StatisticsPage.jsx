import React from 'react';
import PeriodPaginator from 'components/PeriodPaginator/PeriodPaginator';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import css from './StatisticsPage.module.css';

const StatisticsPage = () => {
  return (
    <div className={css.statistic__container}>
      <PeriodPaginator />
      <StatisticsChart />
    </div>
  );
};

export default StatisticsPage;
