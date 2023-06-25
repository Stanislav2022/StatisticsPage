import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterDate } from 'redux/filterdate/filterdate-selector';
import { setFilterDate } from 'redux/filterdate/filterdate-slice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PeriodPaginator.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const PeriodPaginator = () => {
  const filterdate = useSelector(selectFilterDate);
  const dispatch = useDispatch();

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleChange = date => {
    dispatch(setFilterDate(date[Symbol.toPrimitive]('number')));
  };

  return (
    <div className="paginator__box">
      <DatePicker
        selected={filterdate}
        onChange={handleChange}
        customInput={<CustomInput />}
        dateFormat="d MMM yyyy"
        calendarStartDay={1}
        formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
        fixedHeight
      />
      <ul className="paginator__btn--box">
        <li className="paginator__btn--list">
          <SlArrowLeft size={18} className="arrow" />
        </li>
        <li className="paginator__btn--list">
          <SlArrowRight size={18} className="arrow" />
        </li>
      </ul>
    </div>
  );
};

export default PeriodPaginator;
