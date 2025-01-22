import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
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
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <h4 style={{ color: "#e91e63" }}>${price}</h4>
      </div>
      <button className="btn" onClick={() => removeTour(id)}>
        Remove tour
      </button>
    </div>
  );
};

export default Tour;
