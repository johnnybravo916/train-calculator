import React from "react";

const Other = ({ handleContribution }) => {
    return (
        <div className="block-deductions__other mb-3">
            <div className="row mb-1">
                <label
                    htmlFor="other_deductions"
                    className="col-sm-6 col-form-label"
                >
                    Other Deductions
                </label>
                <div className="col-sm-3">
                    <input
                        type="number"
                        className="form-control"
                        id="other_deductions"
                        onChange={(e) => {
                            handleContribution(e, "other");
                        }}
                        placeholder="0.00"
                        name="other_deductions"
                    />
                </div>
            </div>
        </div>
    );
};

export default Other;
