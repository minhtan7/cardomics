import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import MultiStepProgressBar from '../../components/CategoryForm/MultiStepProgressBar';
import { StepOne } from '../../components/CategoryForm/StepOne';
import StepThree from '../../components/CategoryForm/StepThree';
import StepTwo from '../../components/CategoryForm/StepTwo';
import "./style.css"

//set up default value for state data
const defaultData = {
    AV: null,
    SC: null,
    CRD: null,
    BEP: null,
    revenue: null,
    expenses: null,
    BEPtotal: null,
    DBT: null,
    MVP: null,
    profit: null,
    investment: null,
    spainPackages: null,
    francePackages: null,
    italyPackages: null,
    germanyPackages: null,
    netherlandsPackages: null,
    greecePackages: null,
    treeco2: null,
}

export const PredictionPage = () => {
    const [statistic, setStatistic] = useState("Break Even Point")
    const [step, setStep] = useState(1)
    const [data, setData] = useState(defaultData)

    //move to next step by step +1; 
    //3 is the last step can be set
    const next = () => {
        setStep(step >= 2 ? 3 : step + 1);
    }
    //move to previous step by step - 1
    const prev = () => {
        setStep(step <= 1 ? 1 : step - 1);
    }
    //go to step one, get data to default value by
    //putting object defaultData to setData
    const restart = () => {
        setStep(1)
        setData(defaultData)
    }

    //return nex or result button only if step doesn't equal to 3
    const nextButton = () => {
        if (step < 3) {
            return (
                <Button className='me-2' onClick={(next)}>
                    {step === 1 ? "Next" : "Result"}
                </Button>
            );
        }

        return null;
    }

    //return either previous or previous and result or null button base on current step
    const previousButton = () => {
        if (step === 2) {
            return (
                <Button className='me-2' onClick={prev}>
                    Previous
                </Button>
            );
        } else if (step === 3) {
            return (
                <>
                    <Button className='me-2' onClick={prev}>
                        Previous
                    </Button>
                    <Button className='me-2' onClick={restart}>
                        Re-start
                    </Button>
                </>
            );
        }
        return null;
    }
    // the event that happens when you select an item in the drop down menu.
    // it sets MyChoice to the targeted value
    const handleStatistic = (e) => {
        setStatistic(e.target.value)
    }

    // update value from input group in step two to state data
    const handleDataStepTwo = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <section id="prediction" className='position-relative vw-100 vh-100'>
            <video className='video-bg' autoPlay muted loop id="myVideo">
                <source src="https://res.cloudinary.com/tanvo/video/upload/v1670710997/Forest_jhlgzd.mp4" type="video/mp4" />

                Your browser does not support the video tag.
            </video>
            <Container className='form-wrapper'>
                {/*  MultiStepProgressBar component render the progress bar based on current step*/}
                <MultiStepProgressBar currentStep={step} />
                <StepOne
                    currentStep={step}
                    statistic={statistic}
                    handleStatistic={handleStatistic}
                />
                <StepTwo
                    currentStep={step}
                    statistic={statistic}
                    handleDataStepTwo={handleDataStepTwo}
                    data={data}
                />
                <StepThree
                    currentStep={step}
                    data={data}
                    statistic={statistic}
                />
                {previousButton()}
                {nextButton()}
            </Container>
        </section>
    )
}
