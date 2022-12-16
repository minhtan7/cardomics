import React from 'react'
import { Form } from 'react-bootstrap'

// creating default array object for the drop down menu.
const stats = [
    { id: "net", statistic: "Net Profit Margin" },
    { id: "eco", statistic: "Yearly Co2 Emissions" },
    { id: "bre", statistic: "Break Even Point" },
    { id: "mrk", statistic: "Mark Up" },
    { id: "lqr", statistic: "Liquidity Ratio" },
    { id: "roi", statistic: "Return on Investment" },
    { id: "np", statistic: "Net Profit" },
    { id: "tree", statistic: "Tree Planter" }
]
export const StepOne = ({ currentStep, statistic, handleStatistic }) => {
    // return null if current step is not equal to step one
    // this make sure we render right component at a step
    if (currentStep !== 1) {
        return null;
    }
    // this function puts the drop down menu into alphabetical order
    function sortStatistic(dx, dy) {
        let DX = dx.statistic.toUpperCase();
        let DY = dy.statistic.toUpperCase();
        if (DX > DY) return 1;
        else if (DX < DY) return -1;
        else return 0;
    }

    return (
        <div id="step-one">
            <h1>Choose a Statistic:</h1>
            {/* this is the form that is rendered and it sets the choice with handleStatistic */}
            <Form.Select aria-label="Default select example" onChange={handleStatistic} value={statistic} required>
                {stats.sort(sortStatistic).map((x, key) => (
                    <option key={key} value={x.statistic}>
                        {x.statistic}
                    </option>
                ))}
            </Form.Select>
        </div >

    )
}
