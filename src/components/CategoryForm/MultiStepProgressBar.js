import React from "react";
import "./MultiStepProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ currentStep }) => {
    //take current step of the form
    //then translate it to percentage.
    //there are three step in the form, so we have 0%, 50% and 100%
    let stepPercentage = 0;
    if (currentStep === 1) {
        stepPercentage = 0;
    } else if (currentStep === 2) {
        stepPercentage = 50;
    } else if (currentStep === 3) {
        stepPercentage = 100;
    } else {
        stepPercentage = 0;
    }
    return (
        <ProgressBar percent={stepPercentage}>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
};

export default MultiStepProgressBar;
