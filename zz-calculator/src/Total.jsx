import React from "react";

const Total = ({pay, net, formatPHP}) => {
    return (
        <div className="block-total">
            <div className="block-total__deductions mb-4">
                <div className="row mb-1">
                <label
                    htmlFor="total_deductions"
                    className="col-sm-6 col-form-label font-important"
                >
                        TOTAL DEDUCTIONS
                    </label>
                    <div className="col-sm-3">
                    <input
                        className="form-control"
                        name="total_deductions"
                        value={formatPHP(pay.deductions)}
                        readOnly
                        type="text"
                    />
                    </div>
                </div>
            </div>
            <div className="block-total__net mb-5">
                <div className="row mb-1">
                <label
                    htmlFor="total_net_pay"
                    className="col-sm-6 col-form-label font-important"
                >
                        TOTAL NET PAY
                    </label>
                    <div className="col-sm-3">
                    <input
                        className="form-control"
                        name="total_net_pay"
                        value={net}
                        readOnly
                        type="text"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;
