import React, { ReactNode } from "react";
import "./FormWrapper.scss";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div className="formWrapper">
      <h2 className="title">{title}</h2>
      <div className="children">{children}</div>
    </div>
  );
};

export default FormWrapper;
