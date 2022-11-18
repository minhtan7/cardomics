import React from 'react'
import MultiStep from 'react-multistep'
import "./style.css"

export const Prediction = () => {
    const steps = [
        { title: 'StepOne', component: <h1>heeloo</h1> },
        { title: 'StepTwo', component: <h1>he</h1> },
        { title: 'StepThree', component: <h1>hi</h1> },
        { title: 'StepFour', component: <h1>haha</h1> }
    ];
    console.log("prediction")
    return (
        <section id="prediction">
            <MultiStep activeStep={1} showNavigation={true} steps={steps} />
        </section>
    )
}
