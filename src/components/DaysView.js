import { useEffect } from "react";

export default function DaysView({
  users,
  setUsers,
  daylist,
  setDaylist,
  currentUser,
  setCurrentUser
}) {
  useEffect(() => {
    console.log(users);
  }, [users]);

  function toggleAvailability(userId, dayId) {
    const user = users[userId];
    const day = daylist[dayId];

    if (user !== currentUser) return;

    const newUsers = JSON.parse(JSON.stringify(users));
    if (user.map((u) => u.availableDays).includes(day)) {
      // fjern dag
      const idx = newUsers[userId].availableDays.indexOf(day);
      newUsers[userId].availableDays.splice(idx, 1);
      setUsers(newUsers);
    } else {
      // legg til dag
      newUsers[userId].availableDays.push(day);
      setUsers(newUsers);
    }
  }

  const deleteUser = (user) => {
    // todo
  };

  return (
    <div className="days-container">
      {users.map((u, uid) => (
        <div style={{ display: "flex" }}>
          <div
            className="user"
            style={{
              textDecoration: u.name === currentUser ? "underline" : ""
            }}
          >
            {u.name}
          </div>
          <div className="days">
            {daylist.map((d, did) => (
              <div
                className="day"
                style={{
                  backgroundColor: u.availableDays.includes(d) ? "green" : ""
                }}
                onClick={() => toggleAvailability(uid, did)}
              >
                {d.date}
                <br />
                {d.month}
              </div>
            ))}
          </div>
          <button onClick={() => deleteUser(u)}>slett</button>
        </div>
      ))}
    </div>
  );
}
