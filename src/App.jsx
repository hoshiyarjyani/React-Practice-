import React, { useState } from "react";

const App = () => {
  // hook function in react
  let Time = new Date().toLocaleTimeString();

  const [newTime, setTime] = useState(Time);
  const updateTime = () => {
    setTime({ Time });
  };

  return (
    <>
      <h1>{Time}</h1>
      <button onClick={updateTime}>click me</button>
    </>
  );
};
export default App;
