import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterDate } from 'redux/filterdate/filterdate-selector';
import { setFilterDate } from 'redux/filterdate/filterdate-slice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PeriodPaginator.css';

const PeriodPaginator = () => {
  const dispatch = useDispatch();

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <DatePicker
      selected={useSelector(selectFilterDate)}
      onChange={date => dispatch(setFilterDate(date))}
      customInput={<CustomInput />}
      dateFormat="d MMM yyyy"
      calendarStartDay={1}
      formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
      fixedHeight
    />
  );
};

export default PeriodPaginator;
