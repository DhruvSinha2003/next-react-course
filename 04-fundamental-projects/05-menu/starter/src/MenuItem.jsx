import React from "react";

const MenuItem = ({ menuItem }) => {
  return (
    <div className="card">
      <img
        style={{ maxWidth: "120px" }}
        src={menuItem.img}
        alt={menuItem.title}
      />
      <h2>{menuItem.title}</h2>
      <h3>{menuItem.price}</h3>
      <span>{menuItem.desc}</span>
    </div>
  );
};

export default MenuItem;
