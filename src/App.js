import "./App.css";
import { useState } from "react";
import React from 'react';

function App() {
  let h = "00",
    m = "00",
    s = "00";
let val=0
  let [sec, setSec] = useState(0);
  let [min, setMin] = useState(0);
  let [hour, setHour] = useState(0);
  const [lap, setLap] = useState([])
  // const [val, setVal] = useState(0);

  const addHandler = () => {
    if (min >= 59 && sec >= 59) {
      setHour(++hour);
      setMin(0);
      setSec(0);
    } else if (sec >= 59) {
      setMin(++min);
      setSec(0);
    } else {
      setSec(++sec);
    }
  };
  const subHandler = () => {
    if (hour > 0 && min <= 0 && sec <= 0) {
      setHour(--hour);
      setMin(59);
      setSec(59);
    } else if (min > 0 && sec <= 0) {
      setMin(--min);
      setSec(59);
    } else if (sec > 0) {
      setSec(--sec);
    }
  };
  const displayTime = () => {
    sec < 10 ? (s = "0" + sec) : (s = sec);
    min < 10 ? (m = "0" + min) : (m = min);
    hour < 10 ? (h = "0" + hour) : (h = hour);
  };
  const timerHandler = () => {
    val= setInterval(addHandler, 1000);
    return val
  };

  const restart = () => {
    setSec(0);
    setMin(0);
    setHour(0);
  };
const lapHandler = () => {
  setLap([...lap,{h:h,m:m,s:s}])
  return lap
}
  return (
    <div className="App">
      <header>Stopwatch</header>
      <h1>
        {displayTime()}
        {h}:{m}:{s}
      </h1>
      <input onClick={addHandler} type="button" value="+" />
      <input onClick={timerHandler} type="button" value="Start" />
      <input onClick={()=>window.location.reload(false)} type="button" value="Stop" />{console.log(val)}
      <input onClick={()=>lapHandler} type="button" value="Lap" />{lap}
      <input onClick={restart} type="button" value="Reset" />
      <input onClick={subHandler} type="button" value="-" />
      <p>Lap</p>
    </div>
  );
}

export default App;
