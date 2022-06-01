import "./styles.css";
import { useState, useEffect } from "react";

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
    month: months[d.getMonth()],
    availableUsers: []
  }));

  return daylist;
}

export default function App() {
  const [daylist, setDaylist] = useState(getDaylist());
  const [users, setUsers] = useState(["person1", "person2", "person3"]);
  const [currentUser, setCurrentUser] = useState("");

  function toggleAvailability(user, dayId) {
    let newDaylist = daylist.slice();
    let newAvailableUsers = newDaylist[dayId].availableUsers;
    if (newAvailableUsers.includes(user)) {
      const userIdx = newAvailableUsers.indexOf(user);
      newAvailableUsers.splice(userIdx, 1);
    } else {
      newAvailableUsers.push(user);
    }
    newDaylist[dayId].availableUsers = newAvailableUsers;
    setDaylist(newDaylist);
  }

  return (
    <div className="App">
      <h1>Når e dokk ledig for faen?</h1>
      <div className="days-container">
        {users.map((u, uid) => (
          <div style={{ display: "flex" }}>
            <div>{u}</div>
            <div className="days">
              {daylist.map((d, did) => (
                <div
                  className="day"
                  style={{
                    backgroundColor: d.availableUsers.includes(u) ? "green" : ""
                  }}
                  onClick={() => toggleAvailability(u, did)}
                >
                  {d.date}
                  <br />
                  {d.month}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
