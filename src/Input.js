import React, { useRef } from "react";

const Input = ({ value, onChange }) => {
  const ref = useRef(null);

  const selectHandler = (event) => {
    console.log("selection fired");
  };

  const changeHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      ref={ref}
      onChange={changeHandler}
      onSelect={selectHandler}
      value={value}
    />
  );
};

export default Input;
