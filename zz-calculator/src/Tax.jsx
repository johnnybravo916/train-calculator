import React from "react";

const Tax = ({ withholding }) => {
    return (
        <div className="block-deductions__tax mb-3">
            <div className="row mb-1">
                <label
                    htmlFor="withholding_tax"
                    className="col-sm-4 col-form-label"
                >
                    Withholding Tax
                </label>
                <div className="col-sm-4">
                    <input
                        className="form-control"
                        name="withholding_tax"
                        value={withholding}
                        readOnly
                        type="number"
                    />
                </div>
            </div>
        </div>
    );
};

export default Tax;
