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

import { useState } from "react";

const ButtonCard = ({value, onClick}) => {
    return (
       <button 
       style={{
        width : "50px",
        height : "50px",
        margin : "10px",
        fontSize : "20px"
       }}

       onClick = {()=>onClick(value)}
       
       >
        {value}
       </button>
    )
}

const Calculator2 = () => {

   const [input, setInput] = useState("");

   const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "C", "0", "=", "/"
   ];


//    const handleClick = (val) => {

//     if(val === "="){
//         try {
//            setInput(eval(input).toString())
//         }
//         catch {
//             setInput("Error");
//         }

//     }else if(val === "C"){
//         setInput("");
//     }else {
//         setInput(input + val);
//     }

//    }

   const handleClick = (val) => {
    if (val === "=") {
      try {
        // Extra check for trailing operator
        const lastChar = input[input.length - 1];
        if (["+", "-", "*", "/"].includes(lastChar)) {
          setInput("Error");
        } else {
          const result = eval(input);
          setInput(result.toString());
        }
      } catch {
        setInput("Error");
      }
    } else if (val === "C") {
      setInput("");
    } else {
      setInput(input + val);
    }
  };
  

    return (
        <div style={{
             display : "flex",
             flexDirection : "column",
             alignItems : "center",
             margin : "40px"
        }}>
            <h1>React Calculator</h1>

            <input 
            type="text"
            readOnly
            value={input}
            style={{
                width: "260px",
                height: "40px",
                fontSize: "20px",
                textAlign: "right",
                marginBottom: "20px"
              }}
            />

            <div
             style={{
                display : "flex",
                width : "290px",
                alignItems : "center",
                flexWrap : "wrap"
             }}
            >
            {
                buttons.map((btn,idx)=>{
                    return <ButtonCard key={idx} value={btn} onClick={handleClick}/>
                })
            }
            </div>

        </div>
    )
}

export default Calculator2;