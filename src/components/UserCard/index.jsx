import React from "react";
import "./index.css";

export default function UserCard({ user }) {
  const avatar = `https://avatars.dicebear.com/v2/avataaars/${encodeURIComponent(
    user.username
  )}.svg?options[mood][]=happy`;

  return (
    <div className="card h-100 shadow-sm border-0 rounded  ">
      <div className="card-body d-flex align-items-center p-3 ">
        <img
          src={avatar}
          alt={user.username}
          style={{ width: 80, height: 80 }}
        />
        <div className="ms-3 ">
          <h5>{user.name}</h5>
          <p className="mb-1 ">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="mb-1">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="mb-1 ">
            <strong>Address:</strong> {user.address.street},{" "}
            {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </p>
          <p className="mb-0 website">
            <strong>Website:</strong> {user.website}
           </p>
          <p className="mb-0">
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      </div>
    </div>
  );
}
