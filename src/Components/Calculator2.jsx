/*
Plan :
✅ Step 2: List All Core Features
Ask: "What features does this need?" (Don’t worry about UI yet)

Show a heading.

Show input/output box.

Show buttons (0-9, +, -, etc.).

Buttons update input.

= button evaluates.

C button clears.

 */

import React, { useState } from "react";

const Calculator2 = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input);
        setInput(String(result));
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "C", "0", "=", "/"
  ];

  return (
    <div style={{ width: "250px", margin: "20px auto", textAlign: "center" }}>
      {/* ✅ Display with input */}
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "100%", height: "40px", fontSize: "20px", marginBottom: "10px" }}
      />

      {/* Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              padding: "15px",
              fontSize: "18px",
              cursor: "pointer"
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator2;


