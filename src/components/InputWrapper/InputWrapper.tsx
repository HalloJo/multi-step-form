import React from "react";
import "./InputWrapper.scss";

type InputWrapperProps = {
  label: string;
  inputType: string;
  min?: number;
  max?: number;
  value: string | number;
  updateFields: (fields: any) => void;
};

const InputWrapper = ({
  label,
  inputType,
  min,
  max,
  value,
  updateFields,
}: InputWrapperProps) => {
  return (
    <div className="inputWrapper">
      <label>{label}</label>
      <input type={inputType} required min={min} max={max} value={value} />
    </div>
  );
};

export default InputWrapper;
