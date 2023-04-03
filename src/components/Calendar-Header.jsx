import "../App.css";
import capFirst from '../basicElements/basicElements';

export default function CalendarHeader ({ formatDate }) {
  return (
    <>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{capFirst(formatDate("EEEE"))}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">
            {formatDate("d")}
          </div>
          <div className="ui-datepicker-material-month">
            {formatDate("MMMM")}
          </div>
          <div className="ui-datepicker-material-year">{formatDate("Y")}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{capFirst(formatDate("LLLL"))}</span>
          &nbsp;
          <span className="ui-datepicker-year">{formatDate("Y")}</span>
        </div>
      </div>
    </>
  );
}