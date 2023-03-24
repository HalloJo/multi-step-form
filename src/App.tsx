import { FormEvent, useState } from "react";
import "./App.scss";
import AccountForm from "./components/AccountForm/AccountForm";
import AddressForm from "./components/AddressForm/AddressForm";
import UserForm from "./components/UserForm/UserForm";
import { useMultistepForm } from "./useMultistepForm";
import cn from "clsx";

type FormDataProps = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  zip: string;
  email: string;
  password: string;
};

function App() {
  const INITIAL_DATA: FormDataProps = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    zip: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormDataProps>) => {
    setData((previous) => {
      return { ...previous, ...fields };
    });
  };
  const { step, steps, currentStep, next, back, isFirstStep, isLastStep } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    !isLastStep ? next() : alert("Succesfull account creation!");
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {/* <div
          className="progress"
          style={{
            width:
              currentStep === 0
                ? "10%"
                : currentStep === 1
                ? "33.3%"
                : currentStep === 2
                ? "80%"
                : "100%",
          }}
        /> */}
        <div className="steps">
          <p
            style={
              currentStep >= 1
                ? { background: "green" }
                : { background: "black" }
            }
            className="step"
          >
            {currentStep >= 1 ? "✔" : "1"}
          </p>
          <p
            style={
              currentStep >= 2
                ? { background: "green" }
                : { background: "black" }
            }
            className="step"
          >
            {currentStep >= 2 ? "✔" : "2"}
          </p>
          <p className="step">3</p>
        </div>
        {/* <div className="steps">
          {currentStep + 1} / {steps.length}
        </div> */}
        {step}
        <div className="buttons">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Previous
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
