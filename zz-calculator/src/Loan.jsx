import React from "react";

const Loan = ({ handleContribution }) => {
    return (
        <div className="block-deductions__loan mb-3">
            <div className="row mb-1">
                <label htmlFor="sss_loan" className="col-sm-4 col-form-label">
                    SSS Loan
                </label>
                <div className="col-sm-4">
                    <input
                        type="number"
                        className="form-control"
                        id="sss_loan"
                        onChange={(e) => {
                            handleContribution(e, "sss");
                        }}
                        placeholder="0.00"
                        name="sss_loan"
                    />
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="hdmf_loan" className="col-sm-4 col-form-label">
                    HDMF Loan
                </label>
                <div className="col-sm-4">
                    <input
                        type="number"
                        className="form-control"
                        id="hdmf_loan"
                        onChange={(e) => {
                            handleContribution(e, "hdmf");
                        }}
                        placeholder="0.00"
                        name="hdmf_loan"
                    />
                </div>
            </div>
        </div>
    );
};

export default Loan;
