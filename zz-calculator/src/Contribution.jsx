import React from "react";

const Contribution = ({sss}) => {
    const {monthly, semi_monthly} = sss;

    return (
        <div className="block-deductions__mandatory mb-3">
            <div className="row mb-1">
                <label htmlFor="sss_contribution" className="col-sm-4 col-form-label">
                    SSS Mandatory Contribution
                </label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" name="sss_contribution" readOnly value={monthly}/>
                </div>
                <div className="col-sm-4">
                    <input className="form-control" type="number" name="sss_contribution_semi_monthly" readOnly value={semi_monthly}/>
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="daily_rate" className="col-sm-4 col-form-label">
                    PHILHEALTH Mandatory Contribution
                </label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" />
                </div>
                <div className="col-sm-4">
                    <input className="form-control" type="number" />
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="daily_rate" className="col-sm-4 col-form-label">
                    HDMF Mandatory Contribution
                </label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" />
                </div>
                <div className="col-sm-4">
                    <input className="form-control" type="number" />
                </div>
            </div>
        </div>
    );
};

export default Contribution;
