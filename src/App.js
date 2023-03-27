import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/counteSlice";
import "./index.css";

function App() {
  let counter = useSelector((state) => state.counter.counter);
  console.log(counter);

  // const counter = 5;
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(counterAction.increment())}>+</button>
      <button onClick={() => dispatch(counterAction.decrement())}>-</button>
    </div>
  );
}

export default App;
