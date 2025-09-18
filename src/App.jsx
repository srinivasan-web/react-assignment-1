import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="center vh-100 d-flex justify-content-center align-items-center ">
        <div className="loader " />
      </div>
    );
  if (error) return <div className="alert alert-danger m-4 ">{error}</div>;

  return (
    <div className="container py-4 bg-primary text-white min-vh-100 min-vw-100 ">
      <h2 className="mb-4 text-center  ">User Profiles</h2>
      <div className="row g-4 ml-2 mr-2 d-flex justify-content-center ">
        {users.map((user) => (
          <div key={user.id} className="col-md-6 col-lg-4 mb-4 cards">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
