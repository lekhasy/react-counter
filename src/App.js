import "./App.css";
import React from "react";
import Counter from "./Counter";

function App() {
  const [sum, setSum] = React.useState(1 + 2 + 3 + 4);

  const increaseSum = () => {
    setSum(sum + 1);
  };

  const decreaseSum = () => {
    setSum(sum - 1);
  };

  const [mainCounterVal, setMainCounterVal] = React.useState(1);

  const increaseMainCounter = () => {
    setMainCounterVal(mainCounterVal + 1);
  };

  const decreaseMainCounter = () => {
    setMainCounterVal(mainCounterVal - 1);
  };

  return (
    <div className="App btnContainer red-text">
      <Counter
        counterName="main counter"
        onIncreaseSum={increaseMainCounter}
        onDecreaseSum={decreaseMainCounter}
        initialValue={1}
        mainCounterVal={0}
      />
      another counter:
      <Counter
        counterName="counter mot"
        onIncreaseSum={increaseSum}
        onDecreaseSum={decreaseSum}
        initialValue={1}
        mainCounterVal={mainCounterVal}
      />
      <Counter
        counterName="counter hai"
        onIncreaseSum={increaseSum}
        onDecreaseSum={decreaseSum}
        initialValue={2}
        mainCounterVal={mainCounterVal}
      />
      <Counter
        counterName="counter ba"
        onIncreaseSum={increaseSum}
        onDecreaseSum={decreaseSum}
        initialValue={3}
        mainCounterVal={mainCounterVal}
      />
      <Counter
        counterName="counter bon"
        onIncreaseSum={increaseSum}
        onDecreaseSum={decreaseSum}
        initialValue={4}
        mainCounterVal={mainCounterVal}
      />
    </div>
  );
}

export default App;
