import { useState } from "react";

export default function Login({ users, setUsers, setCurrentUser }) {
  const [username, setUsername] = useState("");

  const handleFormSubmit = () => {
    const newUsername = username.toLowerCase();
    if (!users.map((u) => u.name).includes(newUsername))
      setUsers([...users, { name: newUsername, availableDays: [] }]);
    setCurrentUser(newUsername);
  };

  return (
    <div className="login-container" A>
      <h2>Login: </h2>
      <input
        type="text"
        placeholder="navn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleFormSubmit}>Velg</button>
    </div>
  );
}
