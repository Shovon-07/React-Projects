import { useState, useCallback } from "react";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MemoBtn from "./MemoBtn";
import MemoCount from "./MemoCount";
import MemoTitle from "./MemoTitle";

const LearnReact = () => {
  // Use memo
  // const [counter_1, setCounter_1] = useState(0);
  // const [counter_2, setCounter_2] = useState(0);

  // const incByOne = () => {
  //   setCounter_1((prev) => prev + 1);
  // };

  // const incByFive = () => {
  //   setCounter_2((prev) => prev + 5);
  // };

  const [incOne, setIncOne] = useState(0);
  const [incFive, setIncFive] = useState(0);

  const incOneFunc = () => {
    setIncOne((prev) => prev + 1);
  };
  const incFiveFunc = () => {
    setIncFive((prev) => prev + 5);
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* <MemoTitle />
        <MemoCount counter={counter_1} title="Increment by one" />
        <MemoBtn handleClick={incByOne}>Increment by one </MemoBtn>

        <br />
        <hr />

        <MemoCount counter={counter_2} title="Increment by five" />
        <MemoBtn handleClick={incByFive}>Increment by five button</MemoBtn> */}

        <MemoTitle title="Learn React.memo, useMemo, useCallback" />
        <br />
        <div>
          <MemoCount title="Inc by one title" counter={incOne} />
          <MemoBtn handleClick={incOneFunc}>Inc by one button</MemoBtn>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <MemoCount title="Inc by five title" counter={incFive} />
          <MemoBtn handleClick={incFiveFunc}>Inc by five button</MemoBtn>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LearnReact;
