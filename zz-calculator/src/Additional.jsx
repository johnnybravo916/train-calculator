import React from "react";

const Additional = ({handleContribution}) => {
    return (
        <div className="block-deductions__contribution mb-3">
            <div className="row mb-1">
                <label
                    htmlFor="hdmf_add_contribution"
                    className="col-sm-4 col-form-label"
                >
                    HDMF Additional Contribution
                </label>
                <div className="col-sm-4">
                    <input
                        type="number"
                        className="form-control"
                        id="hdmf_add_contribution"
                        onChange={(e) => {
                            handleContribution(e, "hdmf_add");
                        }}
                        placeholder="0.00"
                        name="hdmf_add_contribution"
                    />
                </div>
            </div>
            <div className="row mb-1">
                <label
                    htmlFor="hmo_add_contribution"
                    className="col-sm-4 col-form-label"
                >
                    HMO Additional Contribution
                </label>
                <div className="col-sm-4">
                    <input
                        type="number"
                        className="form-control"
                        id="hmo_add_contribution"
                        onChange={(e) => {
                            handleContribution(e, "hmo_add");
                        }}
                        placeholder="0.00"
                        name="hmo_add_contribution"
                    />
                </div>
            </div>
        </div>
    );
};

export default Additional;
