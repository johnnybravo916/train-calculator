import React from "react";

const Loan = () => {
    return (
        <div className="block-deductions__loan mb-3">
            <div className="row mb-1">
            <label htmlFor="sss_loan" className="col-sm-4 col-form-label">
                    SSS Loan
                </label>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Loan"
                    />
                </div>
            </div>
            <div className="row mb-1">
            <label htmlFor="hdmf_loan" className="col-sm-4 col-form-label">
                    HDMF Loan
                </label>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Loan"
                    />
                </div>
            </div>
        </div>
    );
};

export default Loan;
