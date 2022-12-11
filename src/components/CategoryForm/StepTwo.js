import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';

const catForm = {
    "Break Even Point": [
        {
            label: "Article Vale",
            type: "double",
            name: "AV"
        },
        {
            label: "Shipping Cost (to you)",
            type: "double",
            name: "SC"
        },
        {
            label: "Amount of cards in Shipment",
            type: "double",
            name: "CRD"
        }
    ],
    "Net Profit Margin": [
        {
            label: "BEP",
            type: "double",
            name: "BEP"
        },
        {
            label: "Revenue",
            type: "double",
            name: "revenue"
        }
    ],
    "Net Profit": [
        {
            label: "Revenue",
            type: "double",
            name: "revenue"
        },
        {
            label: "Total Expenses",
            type: "double",
            name: "expenses"
        }
    ],
    "Mark Up": [
        {
            label: "BEP total",
            type: "double",
            name: "BEPtotal"
        },
        {
            label: "Revenue",
            type: "double",
            name: "revenue"
        }
    ],
    "Yearly Co2 Emissions": [
        {
            label: "Number of packages sent to Spain",
            type: "int",
            name: "spainPackages"
        },
        {
            label: "Number of packages sent to France",
            type: "double",
            name: "francePackages"
        },
        {
            label: "Number of packages sent to Italy",
            type: "double",
            name: "italyPackages"
        },
        {
            label: "Number of packages sent to Germany",
            type: "double",
            name: "germanyPackages"
        },
        {
            label: "Number of packages sent to Netherlands",
            type: "double",
            name: "netherlandsPackages"
        },
        {
            label: "Number of packages sent to Greece",
            type: "double",
            name: "greecePackages"
        }
    ],
    "Liquidity Ratio": [
        {
            label: "Loan Debt",
            type: "double",
            name: "DBT"
        },
        {
            label: "Current Market Value of Products",
            type: "double",
            name: "MVP"
        }
    ],
    "Return on Investment": [
        {
            label: "Initial Investment",
            type: "double",
            name: "investment"
        },
        {
            label: "Net Profit",
            type: "double",
            name: "profit"
        }
    ],
    "Tree Planter": [
        {
            label: "Co2 in KG",
            type: "double",
            name: "treeco2"
        }
    ]
}

const StepTwo = ({ currentStep, statistic, handleDataStepTwo, data }) => {
    if (currentStep !== 2) {
        return null;
    }
    console.log("cat", statistic)
    return (
        <div id="step-two">
            <Row className='w-100 justify-content-center'>
                {catForm[statistic].map(e => (
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{e.label}</Form.Label>
                            <Form.Control
                                type="number" placeholder={e.label}
                                name={e.name}
                                value={data[e.name]}
                                onChange={handleDataStepTwo}
                                required
                            />
                        </Form.Group>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default StepTwo