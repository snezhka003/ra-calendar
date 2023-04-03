import "../App.css";
import CalendarWeek from "./Calendar-Week";
import CalendarDates from "./Calendar-Dates";
import CalendarHeader from "./Calendar-Header";
import { lastDayOfMonth, startOfMonth, eachDayOfInterval, format, addDays } from "date-fns";
import { ru } from "date-fns/locale";
import cn from "classnames";
import { countWeek, namesWeek, weekends } from "../basicElements/basicElements";

export default function Calendar () {
  const date = new Date();
  const lastDay = lastDayOfMonth(date);
  const firstDay = startOfMonth(date);

  const prevMonth = addDays(firstDay, 1 - format(firstDay, "i"));
  const nextMonth = addDays(lastDay, 7 - format(lastDay, "i"));

  const allDaysOfMonth = eachDayOfInterval({
    start: prevMonth,
    end: nextMonth,
  });

  const formatDate = (check) => format(date, check, { locale: ru });

  return (
    <div className="ui-datepicker">
      <CalendarHeader formatDate={formatDate} />
      <table className="ui-datepicker-calendar">
        <colgroup>
          {namesWeek.map((name) => (
            <col
              className={cn({
                "ui-datepicker-week-end": weekends.includes(name),
              })}
              key={name}
            />
          ))}
        </colgroup>
        <CalendarWeek namesWeek={namesWeek} />
        <CalendarDates
          allDaysOfMonth={allDaysOfMonth}
          countWeek={countWeek}
          date={date}
        />
      </table>
    </div>
  )
}