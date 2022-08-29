import React, { useState } from "react";

const App = () => {

    // hook function in react

const [count, setCount] = useState(1);
const IncNum = () => {
    setCount(count+1);};
return(
<>
<h1>{count}</h1>
<button onClick={IncNum}>click me</button>
</>)};
export default App;