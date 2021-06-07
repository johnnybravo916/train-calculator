import React from "react";

const Contribution = ({ sss, ph, hdmf, formatPHP }) => {

    return (
        <div className="block-deductions__mandatory mb-3">
            <div className="row mb-1">
                <label
                    htmlFor="sss_contribution"
                    className="col-sm-6 col-form-label"
                >
                    SSS Mandatory Contribution
                </label>
                <div className="col-sm-3 d-none">
                    <input
                        type="text"
                        className="form-control"
                        name="sss_contribution"
                        readOnly
                        hidden
                        value={sss.monthly}
                    />
                </div>
                <div className="col-sm-3">
                    <input
                        className="form-control"
                        type="text"
                        name="sss_contribution_semi_monthly"
                        readOnly
                        value={formatPHP(sss.semi_monthly)}
                    />
                </div>
            </div>
            <div className="row mb-1">
                <label
                    htmlFor="philhealth_contribution"
                    className="col-sm-6 col-form-label"
                >
                    PHILHEALTH Mandatory Contribution
                </label>
                <div className="col-sm-3 d-none">
                    <input
                        type="text"
                        className="form-control"
                        name="philhealth_contribution"
                        readOnly
                        hidden
                        value={ph.monthly}
                    />
                </div>
                <div className="col-sm-3">
                    <input
                        type="text"
                        className="form-control"
                        name="philhealth_contribution_semi_monthly"
                        readOnly
                        value={formatPHP(ph.semi_monthly)}
                    />
                </div>
            </div>
            <div className="row mb-1">
            <label
                    htmlFor="hdmf_contribution"
                    className="col-sm-6 col-form-label"
                >
                    HDMF Mandatory Contribution
                </label>
                <div className="col-sm-3 d-none">
                <input
                        type="text"
                        className="form-control"
                        name="hdmf_contribution_semi_monthly"
                        readOnly
                        hidden
                        value={hdmf.monthly}
                    />
                </div>
                <div className="col-sm-3">
                    <input
                        type="text"
                        className="form-control"
                        name="hdmf_contribution_semi_monthly"
                        readOnly
                        value={formatPHP(hdmf.semi_monthly)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contribution;
