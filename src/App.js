import React, { useState } from "react";

import Input from "./Input";

import "./styles.css";

export default function App() {
  const [value, setValue] = useState("321");
  const buttonClickHandler = () => {
    setValue("123");
  };
  const inputChangeHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="App">
      <Input onChange={inputChangeHandler} value={value} />
      <button onClick={buttonClickHandler}>set value</button>
    </div>
  );
}
