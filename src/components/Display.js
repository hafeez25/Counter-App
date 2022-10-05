import React, { useState } from "react";
import "./Display.css";

function Display(props) {

    let [count,setCount] = useState(props.count);

    const increaseHandler = ()=>{
        setCount(++count)
        console.log('increase')
    }
    
    const decreaseHandler = ()=>{
        setCount(--count);
        console.log('decrease')
    }


  return (
    <div>
      <div className="display">{count}</div>

      <div className="button-container">
        <button className="btn" onClick={increaseHandler}>
          +
        </button>
        <button className="btn" onClick={decreaseHandler}>
          -
        </button>
      </div>
    </div>
  );
}

export default Display;
