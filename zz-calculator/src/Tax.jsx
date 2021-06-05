import React from "react";

const Tax = () => {
    return (
        <div className="block-deductions__tax mb-3">
            <div className="row mb-1">
                <label htmlFor="daily_rate" className="col-sm-4 col-form-label">
                    Withholding Tax
                </label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" />
                </div>
            </div>
        </div>
    );
};

export default Tax;
