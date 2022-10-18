import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./Slice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amt, setAmt] = useState(1);
  const selectedoptn = (e) => {
    if (e === "inc") {
      dispatch(incrementByAmount(Number(amt)));
    }
    if (e === "dec") {
      dispatch(decrementByAmount(Number(amt)));
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="counter">
            <button
              onClick={() => dispatch(decrement())}
              style={{ backgroundColor: "green" }}
            >
              Descrease
            </button>
            <p>{count}</p>
            <button
              onClick={() => dispatch(increment())}
              style={{ backgroundColor: "red" }}
            >
              Increase
            </button>
          </div>
          <div className="counter">
            <input
              onChange={(e) => setAmt(e.target.value)}
              placeholder="Enter number."
              type="Number"
            />
            <select onChange={(e) => selectedoptn(e.target.value)}>
              <option disabled selected>
                Select Choice
              </option>

              <option value="inc">Increase</option>
              <option value="dec">Decrease</option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
