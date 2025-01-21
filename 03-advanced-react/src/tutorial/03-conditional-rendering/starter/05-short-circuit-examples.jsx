import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("text");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default"}</h2>
      {name && (
        <div>
          <h2>returned:</h2>
          <h3>{user.name}</h3>
        </div>
      )}

      <div style={{ marginTop: "90px" }}>
        <h1>Ternary</h1>
        {isEditing ? "Edit" : "Add"}
      </div>
    </div>
  );
};

export default ShortCircuitExamples;
