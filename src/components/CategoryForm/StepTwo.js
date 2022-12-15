import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';

const catForm = {
    "Break Even Point": [
        {
            label: "Article Vale",
            name: "AV"
        },
        {
            label: "Shipping Cost (to you)",
            name: "SC"
        },
        {
            label: "Amount of cards in Shipment",
            name: "CRD"
        }
    ],
    "Net Profit Margin": [
        {
            label: "BEP",
            name: "BEP"
        },
        {
            label: "Revenue",
            name: "revenue"
        }
    ],
    "Net Profit": [
        {
            label: "Revenue",
            name: "revenue"
        },
        {
            label: "Total Expenses",
            name: "expenses"
        }
    ],
    "Mark Up": [
        {
            label: "BEP total",
            name: "BEPtotal"
        },
        {
            label: "Revenue",
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
            name: "francePackages"
        },
        {
            label: "Number of packages sent to Italy",
            name: "italyPackages"
        },
        {
            label: "Number of packages sent to Germany",
            name: "germanyPackages"
        },
        {
            label: "Number of packages sent to Netherlands",
            name: "netherlandsPackages"
        },
        {
            label: "Number of packages sent to Greece",
            name: "greecePackages"
        }
    ],
    "Liquidity Ratio": [
        {
            label: "Loan Debt",
            name: "DBT"
        },
        {
            label: "Current Market Value of Products",
            name: "MVP"
        }
    ],
    "Return on Investment": [
        {
            label: "Initial Investment",
            name: "investment"
        },
        {
            label: "Net Profit",
            name: "profit"
        }
    ],
    "Tree Planter": [
        {
            label: "Co2 in KG",
            name: "treeco2"
        }
    ]
}

const StepTwo = ({ currentStep, statistic, handleDataStepTwo, data }) => {
    if (currentStep !== 2) {
        return null;
    }
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