import { useState } from "react";

const ShortCircuitOverview = () => {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("Dhruv");

  return (
    <div>
      <h4>1: {s1 || "hello"}</h4>
      <h4>2: {s2 || "hello"}</h4>
      <h4>3: {s1 && "hello"}</h4>
      <h4>4: {s2 && "hello"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
