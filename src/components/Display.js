import React, { useState } from "react";
import "./Display.css";

const data = [{
  name : "Hafeez",
  age : 23,
  gender : "Male"
},
{
  name : "Salil",
  age : 23,
  gender : "Male"
}]

function Display(props) {

    let [count,setCount] = useState(props.count);


    const increaseHandler = ()=>{
        setCount(++count)
        console.log('increase')
    props.onGetData(data);

    }
    
    const decreaseHandler = ()=>{
        setCount(--count);
        console.log('decrease')
    props.onGetData(data);

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
