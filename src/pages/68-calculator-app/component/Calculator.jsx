import { useEffect, useState } from "react";
import { formatNumberComma, formatWithCommas } from "../../../components/utility/numberFormat";

export default function Calculator() {
    const [value, setValue] = useState("0");

    const operators = ["+", "-", "x", "÷"];

    const handleInput = (input) => {
        if (input === "RESET") return setValue("0");
        if (input === "DEL") return setValue(value.slice(0, -1) || "0");

        if (input === "=" || input === "Enter") {
            try {
                const result = eval(value.replace(/x/g, "*").replace(/÷/g, "/"));
                setValue(result.toString());
            } catch {
                setValue("Error");
            }
            return;
        }

        // Prevent multiple consecutive operators
        const lastChar = value.slice(-1);

        // Replace last operator with new one if both are operators
        if (operators.includes(lastChar) && operators.includes(input)) {
            setValue(value.slice(0, -1) + input);
            return;
        }

        // Prevent two decimal points in the same number
        if (input === ".") {
            const parts = value.split(/[\+\-x÷]/);
            const lastPart = parts[parts.length - 1];
            if (lastPart.includes(".")) return;
        }


        // Append input
        setValue(value === "0" ? input : value + input);
    };

    const handleClick = (e) => handleInput(e.target.innerText);

    const handleKeyDown = (e) => {
        const key = e.key;

        if ((key >= "0" && key <= "9") || key === ".") {
            handleInput(key);
        } else if (key === "+" || key === "-") {
            handleInput(key);
        } else if (key === "*" || key === "x") {
            handleInput("x");
        } else if (key === "/" || key === "÷") {
            handleInput("÷");
        } else if (key === "Enter" || key === "=") {
            handleInput("=");
        } else if (key === "Backspace") {
            handleInput("DEL");
        } else if (key === "Delete") {
            handleInput("RESET");
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });

    const buttons = [
        "7", "8", "9", "DEL",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "/", "x",
        "RESET", "=",
    ];


    const displayValue = formatNumberComma(value);


    return (
        <div className="calculator">
            <div className="calc-display">{displayValue}</div>

            <div className="calc-grid">
                {buttons.map((btn) => (
                    <button
                        key={btn}
                        onClick={handleClick}
                        className={`btn 
                            ${btn === "RESET" ? "reset" : ""} 
                            ${btn === "=" ? "equal" : ""} 
                            ${btn === "DEL" ? "del" : ""}`}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}
