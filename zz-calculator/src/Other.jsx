import React from "react";

const Other = () => {
    return (
        <div className="block-deductions__other mb-3">
            <div className="row mb-1">
                <label htmlFor="daily_rate" className="col-sm-4 col-form-label">
                    Other Deductions
                </label>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Deduction"
                    />
                </div>
            </div>
        </div>
    );
};

export default Other;
