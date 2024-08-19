import { useState, useCallback, useMemo } from "react";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MemoBtn from "./MemoBtn";
import MemoCount from "./MemoCount";
import MemoTitle from "./MemoTitle";

const LearnReact = () => {
  const [incOne, setIncOne] = useState(0);
  const [incFive, setIncFive] = useState(0);

  const incOneFunc = useCallback(() => {
    setIncOne((prev) => prev + 1);
  }, []);
  const incFiveFunc = useCallback(() => {
    setIncFive((prev) => prev + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    for (let i = 0; i <= 1000; i++) {
      console.log(i);
    }
    return incOne % 2 === 0;
  }, [incOne]);

  return (
    <>
      <Header />
      <div className="container">
        <MemoTitle title="Learn React.memo, useMemo, useCallback" />
        <br />
        <div>
          <MemoCount title="Inc by one title" counter={incOne} />
          <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
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
