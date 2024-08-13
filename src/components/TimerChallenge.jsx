import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer; //global variable is
// not a solition because the pointer to the previous timer is lost

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    console.log("Timer started");
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open()
    }, targetTime * 1000);
    setTimerStarted(true);
  }
  function handleStop() {
    console.log("Timer stopped");
    clearTimeout(timer.current);
  }

  return (
    <>
     <ResultModal ref={dialog} result="Lost" targetTime={targetTime} />

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p className="">You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
