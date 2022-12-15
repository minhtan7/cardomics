import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import MultiStepProgressBar from '../../components/CategoryForm/MultiStepProgressBar';
import { StepOne } from '../../components/CategoryForm/StepOne';
import StepThree from '../../components/CategoryForm/StepThree';
import StepTwo from '../../components/CategoryForm/StepTwo';
import "./style.css"

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

    const next = () => {
        setStep(step >= 2 ? 3 : step + 1);
    }
    const prev = () => {
        setStep(step <= 1 ? 1 : step - 1);
    }
    const restart = () => {
        setStep(1)
        setData(defaultData)
    }
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
    const handleStatistic = (e) => {
        setStatistic(e.target.value)
    }

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
