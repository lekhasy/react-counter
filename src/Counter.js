import React from "react";
import classes from "./Counter.module.css";

function Counter({
  initialValue,
  counterName,
  onIncreaseSum,
  onDecreaseSum,
  mainCounterVal,
}) {
  const [count, setCount] = React.useState(initialValue);

  const handleIncrease = () => {
    setCount(count + 1);
    onIncreaseSum();
  };

  const handleDecrease = () => {
    setCount(count - 1);
    onDecreaseSum();
  };

  return (
    <div className={count % 2 === 0 ? classes.redText : classes.blueText}>
      {counterName}: {count + mainCounterVal}
      <div className={classes.btnContainer}>
        <button onClick={handleIncrease} className={classes.increaseBtn}>
          Increase
        </button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
