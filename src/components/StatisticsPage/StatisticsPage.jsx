import React from 'react';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import css from './StatisticsPage.module.css';

const StatisticsPage = () => {
  return (
    <div className={css.statistic__container}>
      <StatisticsChart />
    </div>
  );
};

export default StatisticsPage;
