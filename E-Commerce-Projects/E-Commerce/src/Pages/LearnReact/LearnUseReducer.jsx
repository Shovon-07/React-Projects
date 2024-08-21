import React, { useReducer } from "react";

const LearnUseReducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Learn Use Reducer</h1>
      <p>Counter value = {counter}</p>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        INCREMENT
      </button>{" "}
      | {""}
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        DECREMENT
      </button>
    </div>
  );
};

export default LearnUseReducer;
