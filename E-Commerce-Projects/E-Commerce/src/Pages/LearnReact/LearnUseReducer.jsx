import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

const LearnUseReducer = () => {
  const [reducerCounter, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Learn Use Reducer</h1>
      <p>Reducer counter = {reducerCounter}</p>
      <button onClick={() => dispatch("inc")}>Increment</button> ||{" "}
      <button onClick={() => dispatch("dec")}>Decrement</button>
    </div>
  );
};

export default LearnUseReducer;
