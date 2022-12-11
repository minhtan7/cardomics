import React from 'react'

const calc = ({ data, myChoice }) => {
    const {
        AV,
        SC,
        CRD,
        BEP,
        revenue,
        BEPtotal,
        expenses,
        DBT,
        MVP,
        profit,
        investment,
        spainPackages,
        francePackages,
        italyPackages,
        germanyPackages,
        netherlandsPackages,
        greecePackages,
        treeco2
    } = data
    switch (myChoice) {
        case "Break Even Point":
            const div = SC / CRD;
            const cost = Number(div) + Number(AV);
            const fees = cost * 0.15;
            const final = fees + cost;
            const finalNumber = Number(final);
            const roundedNumber2 = Number(finalNumber.toFixed(2));
            return roundedNumber2;
        case "Net Profit Margin":
            return BEP / revenue;
        case "Mark Up":
            return (revenue - BEPtotal) / BEPtotal;
        case "Return on Investment":
            return (profit / investment) * 100;
        case "Net Profit":
            return revenue - expenses;
        case "Tree Planter":
            const rounded2 = Math.ceil(treeco2 / 20);
            return rounded2;
        case "Yearly Co2 Emissions":
            const spainCo2 = 0.00046;
            const franceCo2 = 0.00045;
            const italyCo2 = 0.00045;
            const germanyCo2 = 0.00041;
            const netherlandsCo2 = 0.00044;
            const greeceCo2 = 0.00047;
            const spainDistance = 1469;
            const franceDistance = 962;
            const italyDistance = 1711;
            const germanyDistance = 1197;
            const netherlandsDistance = 1040;
            const greeceDistance = 2585;
            const totalSpainCo2 = spainPackages * spainCo2 * spainDistance * 0.1;
            const totalFranceCo2 = francePackages * franceCo2 * franceDistance * 0.1;
            const totalItalyCo2 = italyPackages * italyCo2 * italyDistance * 0.1;
            const totalGermanyCo2 =
                germanyPackages * germanyCo2 * germanyDistance * 0.1;
            const totalNetherlandsCo2 =
                netherlandsPackages * netherlandsCo2 * netherlandsDistance * 0.1;
            const totalGreeceCo2 = greecePackages * greeceCo2 * greeceDistance * 0.1;
            const totalCo2 =
                totalSpainCo2 +
                totalFranceCo2 +
                totalItalyCo2 +
                totalGermanyCo2 +
                totalNetherlandsCo2 +
                totalGreeceCo2;
            const roundedNumber = Number(totalCo2.toFixed(3));
            return roundedNumber;
        case "Liquidity Ratio":
            return MVP / DBT;
        default:
            break;
    }

}

const StepThree = ({ currentStep, data, statistic }) => {
    if (currentStep !== 3) {
        return null;
    }
    const result = calc({ data, myChoice: statistic })
    return (
        <div id="step-three">
            <h1 style={{ color: "var(--secondary)" }}>Result is:</h1>
            <h1>{result && result !== Infinity ? result : "Wrong input. Please try again!"}</h1>
        </div>
    )
}

export default StepThree