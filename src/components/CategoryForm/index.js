import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { predictionContext } from '../../pages/PredictionPage'
import { StepOne } from "./StepOne"

const catForm = {
    "Break Even Point": [
        {
            label: "Article Vale",
            type: "double"
        },
        {
            label: "Shipping Cost (to you)",
            type: "double"
        },
        {
            label: "Amount of cards in Shipment",
            type: "double"
        }
    ],
    "Net Profit Margin": [
        {
            label: "BEP",
            type: "double"
        },
        {
            label: "Revenue",
            type: "double"
        }
    ],
    "Net Profit": [
        {
            label: "Revenue",
            type: "double"
        },
        {
            label: "Total Expenses",
            type: "double"
        }
    ],
    "Mark Up": [
        {
            label: "BEP total",
            type: "double"
        },
        {
            label: "Revenue",
            type: "double"
        }
    ],
    "Yearly Co2 Emissions": [
        {
            label: "Number of packages sent to Spain",
            type: "int"
        },
        {
            label: "Number of packages sent to France",
            type: "double"
        },
        {
            label: "Number of packages sent to Italy",
            type: "double"
        },
        {
            label: "Number of packages sent to Germany",
            type: "double"
        },
        {
            label: "Number of packages sent to Netherlands",
            type: "double"
        },
        {
            label: "Number of packages sent to Greece",
            type: "double"
        }
    ],
    "Liquidity Ratio": [
        {
            label: "Loan Debt",
            type: "double"
        },
        {
            label: "Current Market Value of Products",
            type: "double"
        }
    ],
    "Return on Investment": [
        {
            label: "Initial Investment",
            type: "double"
        },
        {
            label: "Net Profit",
            type: "double"
        }
    ],
    "Tree Planter": [
        {
            label: "Co2 in KG",
            type: "double"
        },
        {
            label: "Net Profit",
            type: "double"
        }
    ]
}

export const CategoryForm = ({ hello, handleSubmit, set, state }) => {
    const { statistic } = useContext(predictionContext)
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                {/* {statistic && catForm[statistic.statistic].map(e => (
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{e.label}</Form.Label>
                        <Form.Control type="number" placeholder={e.type} />
                    </Form.Group>
                ))} */}
                <StepOne />
            </Form>
        </div>
    )
}
