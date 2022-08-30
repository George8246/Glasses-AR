import { useState } from "react";

function RangeIput(props) {
    const [minRangeValue, setMinRangeValue] = useState(" $ ");
    const [maxRangeValue, setMaxRangeValue] = useState(" $ ");

    function handleMinRangeChange(event) {
        const { value } = event.target;
        setMinRangeValue(value);
    }

    function handleMaxRangeChange(event) {
        const { value } = event.target;
        setMaxRangeValue(value);
    }

    return (
        <div className="text-left">
            <h5 className="filter-header">Badget In Dollar</h5>
            <div className="money-filter position-relative">
                <label htmlFor="min">Min Value</label>
                <input type="number" name="min" value={minRangeValue} onChange={handleMinRangeChange} min={0} />
                <label htmlFor="max">Max Value</label>
                <input type="number" name="max" value={maxRangeValue} onChange={handleMaxRangeChange} min={0} />
            </div>
            <hr />
        </div>
    );
}

export default RangeIput;
