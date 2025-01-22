import React from "react";

const Tour = ({ id, image, info, name, price }) => {
  return (
    <div
      className="card"
      style={{
        maxWidth: "300px",
        margin: "20px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3 style={{ margin: "10px 0" }}>{name}</h3>
        <p style={{ color: "#555" }}>{info}</p>
        <h4 style={{ color: "#e91e63" }}>${price}</h4>
      </div>
    </div>
  );
};

export default Tour;
