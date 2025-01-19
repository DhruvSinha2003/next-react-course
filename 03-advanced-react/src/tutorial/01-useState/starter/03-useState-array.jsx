import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [userData, setData] = useState(data);
  const removeItem = (id) => {
    setData(userData.filter((user) => user.id !== id));
  };
  const removeAll = () => {
    setData([]);
  };
  return (
    <>
      <h2>useState array example</h2>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <button
              type="button"
              onClick={() => {
                removeItem(user.id);
              }}
            >
              Remove Item
            </button>
          </div>
        );
      })}
      <button
        onClick={removeAll}
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
      >
        Remove All
      </button>
    </>
  );
};

export default UseStateArray;
