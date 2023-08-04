import "./index.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="calculator-body">
      <input className="screen" type="text" value={value} />
      <input
        type="button"
        value="1"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="2"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="3"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="+"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="4"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="5"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="6"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="-"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="7"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="8"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="9"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="*"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="0"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="🗑️"
        onClick={(e) => setValue(value.slice(0, -1))}
      />
      <input type="button" value="❌" onClick={(e) => setValue("")} />
      <input
        type="button"
        value="/"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        className="span-three"
        value="="
        onClick={() => setValue(eval(value))}
      />
      <input
        type="button"
        value="."
        onClick={(e) => setValue(value + e.target.value)}
      />
    </div>
  );
}
