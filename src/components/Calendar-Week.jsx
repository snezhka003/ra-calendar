import "../App.css";

export default function CalendarWeek ({ namesWeek }) {
  return (
    <thead>
      <tr>
        {namesWeek.map((name) => (
          <th key={name} scope="col">
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
}