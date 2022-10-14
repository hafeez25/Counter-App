
import React, { useState } from 'react';
import './index.css'


function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }


  const handleData = (data)=>{
    console.log(data)
  }

  return (
<<<<<<< HEAD
    
    <div className="App">
      <Display  onGetData = {handleData} count = {count}/>
    
=======

    <div className="container">

      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <p>Made with ❤️ by Hafeez</p>
>>>>>>> 0d332a2130ab0b2b5b9b273da4e2f543a955d28e
    </div>
  )
}

export default App;
