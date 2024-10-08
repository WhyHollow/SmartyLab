import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    const operators = input.match(/[-+*/]/g);
    const numbers = input.split(/[-+*/]/).map(Number);
    if (!operators || numbers.length < 2) return;

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      switch (operators[i - 1]) {
        case "+":
          result += numbers[i];
          break;
        case "-":
          result -= numbers[i];
          break;
        case "*":
          result *= numbers[i];
          break;
        case "/":
          result /= numbers[i];
          break;
        default:
          break;
      }
    }

    setInput(result.toString());
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">
          CLEAR
        </button>
        <button onClick={handleDelete} className="delete">
          DEL
        </button>

        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0].map((num) => (
          <button
            onClick={() => handleClick(num.toString())}
            key={num}
            className={num === 0 ? "zero" : ""}
          >
            {num}
          </button>
        ))}

        <button onClick={handleCalculate} className="equals">
          =
        </button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
    </div>
  );
}

export default App;
