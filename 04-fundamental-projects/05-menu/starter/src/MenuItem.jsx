import React from "react";

const MenuItem = ({ menuItem }) => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        alignItems: "center",
        margin: "20px 0",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "10px",
          marginRight: "20px",
          objectFit: "cover",
        }}
        src={menuItem.img}
        alt={menuItem.title}
      />
      <div style={{ flex: "1" }}>
        <h2 style={{ margin: "0 0 10px 0" }}>{menuItem.title}</h2>
        <h3 style={{ margin: "0 0 10px 0", color: "#e91e63" }}>
          ${menuItem.price}
        </h3>
        <p style={{ margin: "0", color: "#555" }}>{menuItem.desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
