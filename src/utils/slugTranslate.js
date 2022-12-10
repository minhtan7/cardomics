const slugs = {
    price_tag: {
        average: "Average",
        high: "High",
        low: "Low",
        shift: "Shift (24 Hours)",
        shift_3: "Shift (3 Days)",
        shift_7: "Shift (7 Days)",
        shift_21: "Shift (21 Days)",
        shift_30: "Shift (30 Days)",
        shift_90: "Shift (90 Days)",
        shift_180: "Shift (180 Days)",
        shift_365: "Shift (365 Days)",
    }
}

export const slugTranslate = ({ slug, target }) => slugs[target][slug.toLowerCase()]