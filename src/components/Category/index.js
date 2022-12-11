import React from 'react'

export const Category = ({ statistic, handleStatistic }) => {
    function sortStatistic(dx, dy) {
        let DX = dx.statistic.toUpperCase();
        let DY = dy.statistic.toUpperCase();
        if (DX > DY) return 1;
        else if (DX < DY) return -1;
        else return 0;
    }
    return (
        <div>
            <h2>Choose a Statistic</h2>
            <select onChange={handleStatistic}>
                {statistic.sort(sortStatistic).map((x, key) => (
                    <option key={key} value={x.statistic}>
                        {x.statistic}
                    </option>
                ))}
            </select>
        </div>
    )
}
