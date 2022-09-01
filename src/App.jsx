// Digital watch in react hook concept....

import React, { useState } from "react";

const App = () => {
  // hook function in react
  let Time = new Date().toLocaleTimeString();

  const [newTime, setTime] = useState(Time);
  const updateTime = () => {
    setTime({ Time });
  };
 setInterval(updateTime,1000);
  return (
    <>
      <h1>{Time}</h1>
    </>
  );
};
export default App;
