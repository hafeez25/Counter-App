import { useSelector, useDispatch } from "react-redux";
import "./index.css";

function App() {
  let counter = useSelector((state) => state.counter);
  console.log(counter);

  // const counter = 5;
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default App;
