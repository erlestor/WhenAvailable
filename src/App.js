import "./styles.css";
import { useState, useEffect } from "react";
import DaysView from "./components/DaysView";
import Login from "./components/Login";

var getDaysArray = function (start, end) {
  for (
    var arr = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Des"
];

function getDaylist() {
  let daylist = getDaysArray(new Date("2022-06-10"), new Date("2022-08-15"));
  daylist = daylist.map((d) => ({
    date: d.getDate(),
    month: months[d.getMonth()]
  }));

  return daylist;
}

export default function App() {
  const [daylist, setDaylist] = useState(getDaylist());
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  return (
    <div className="App">
      <h1>Når e dokk ledig for faen?</h1>
      <Login
        users={users}
        setUsers={setUsers}
        setCurrentUser={setCurrentUser}
      />
      <DaysView
        users={users}
        setUsers={setUsers}
        daylist={daylist}
        setDaylist={setDaylist}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}
