import React from "react";

const Tax = ({ withholding, formatPHP }) => {
    return (
        <div className="block-deductions__tax mb-3">
            <div className="row mb-1">
                <label
                    htmlFor="withholding_tax"
                    className="col-sm-6 col-form-label"
                >
                    Withholding Tax
                </label>
                <div className="col-sm-3">
                    <input
                        className="form-control"
                        name="withholding_tax"
                        value={formatPHP(withholding)}
                        readOnly
                        type="string"
                    />
                </div>
            </div>
        </div>
    );
};

export default Tax;
