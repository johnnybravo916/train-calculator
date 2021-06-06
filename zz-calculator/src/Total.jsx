import React from "react";

const Total = ({pay, net}) => {
    return (
        <div className="block-total">
            <div className="block-total__deductions mb-4">
                <div className="row mb-1">
                <label
                    htmlFor="total_deductions"
                    className="col-sm-4 col-form-label"
                >
                        TOTAL DEDUCTIONS
                    </label>
                    <div className="col-sm-4">
                    <input
                        className="form-control"
                        name="total_deductions"
                        value={pay.deductions}
                        readOnly
                        type="number"
                    />
                    </div>
                </div>
            </div>
            <div className="block-total__net mb-5">
                <div className="row mb-1">
                <label
                    htmlFor="total_net_pay"
                    className="col-sm-4 col-form-label"
                >
                        TOTAL NET PAY
                    </label>
                    <div className="col-sm-4">
                    <input
                        className="form-control"
                        name="total_net_pay"
                        value={net}
                        readOnly
                        type="number"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;
