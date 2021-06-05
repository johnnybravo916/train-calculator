import React from "react";

const Total = () => {
    return (
        <div className="block-total">
            <div className="block-total__deductions mb-4">
                <div className="row mb-1">
                    <label
                        htmlFor="daily_rate"
                        className="col-sm-4 col-form-label"
                    >
                        TOTAL DEDUCTIONS
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="block-total__net mb-5">
                <div className="row mb-1">
                    <label
                        htmlFor="daily_rate"
                        className="col-sm-4 col-form-label"
                    >
                        TOTAL NET PAY
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;
