import React from "react";

const CustomInput = ({ placeholderText, type, onChangeAction, value }) => {
  return (
    <input type={type} value={value} placeholder={placeholderText} onChange={onChangeAction} />
  );
};

export default CustomInput;
