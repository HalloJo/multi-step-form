import { ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((index) => {
      if (index >= steps.length - 1) return index;
      return index + 1;
    });
  };

  const back = () => {
    setCurrentStep((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStep(index);
  };

  return {
    currentStep,
    setCurrentStep,
    step: steps[currentStep],
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    steps,
    goTo,
    next,
    back,
  };
};
