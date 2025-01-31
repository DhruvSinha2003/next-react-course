import React, { useReducer, useState } from "react";
import { data } from "../../../data";

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  if (action.type === "CLEAR_LIST") {
    return { ...state, people: [] };
  } else if (action.type === "RESET_LIST") {
    return { ...state, people: data };
  }

  return state;
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({});
  };

  const handleReset = () => {
    // setPeople(data);
    dispatch({ type: "RESET_LIST" });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_LIST" });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={handleClear}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={handleReset}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
