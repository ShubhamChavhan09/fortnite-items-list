import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    info();
  }, []);

  const info = () => {
    fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
      .then((res) => res.json())
      .then((item) => {
        console.log(item.data);
        setItems(item.data);
      });
  };

  return (
    <div style={{ backgroundColor: "#74b9ff" }}>
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link
            style={{ textDecoration: "none", color: "#2d3436" }}
            to={`/profile/${item.itemId}`}
          >
            {item.item.name}
          </Link>
        </h1>
      ))}
    </div>
  );
};

export default Profile;
