import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("hi");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default"}</h2>
      {text && (
        <div>
          <h2>returned:</h2>
          <h3>{name}</h3>
        </div>
      )}
    </div>
  );
};

export default ShortCircuitExamples;
