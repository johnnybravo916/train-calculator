import React from "react";

const Contribution = ({ sss, ph, hdmf }) => {

    return (
        <div className="block-deductions__mandatory mb-3">
            <div className="row mb-1">
                <label
                    htmlFor="sss_contribution"
                    className="col-sm-4 col-form-label"
                >
                    SSS Mandatory Contribution
                </label>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        name="sss_contribution"
                        readOnly
                        value={sss.monthly}
                    />
                </div>
                <div className="col-sm-4">
                    <input
                        className="form-control"
                        type="number"
                        name="sss_contribution_semi_monthly"
                        readOnly
                        value={sss.semi_monthly}
                    />
                </div>
            </div>
            <div className="row mb-1">
                <label
                    htmlFor="philhealth_contribution"
                    className="col-sm-4 col-form-label"
                >
                    PHILHEALTH Mandatory Contribution
                </label>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        name="philhealth_contribution"
                        readOnly
                        value={ph.monthly}
                    />
                </div>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        name="philhealth_contribution_semi_monthly"
                        readOnly
                        value={ph.semi_monthly}
                    />
                </div>
            </div>
            <div className="row mb-1">
            <label
                    htmlFor="hdmf_contribution"
                    className="col-sm-4 col-form-label"
                >
                    HDMF Mandatory Contribution
                </label>
                <div className="col-sm-4">
                <input
                        type="text"
                        className="form-control"
                        name="hdmf_contribution_semi_monthly"
                        readOnly
                        value={hdmf.monthly}
                    />
                </div>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        name="hdmf_contribution_semi_monthly"
                        readOnly
                        value={hdmf.semi_monthly}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contribution;
