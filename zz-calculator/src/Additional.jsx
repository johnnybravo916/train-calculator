import React from "react";

const Additional = () => {
    return (
        <div className="block-deductions__contribution mb-3">
            <div className="row mb-1">
                <label htmlFor="daily_rate" className="col-sm-4 col-form-label">
                    HDMF Additional Contribution
                </label>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Contribution"
                    />
                </div>
            </div>
            <div className="row mb-1">
                <label htmlFor="daily_rate" className="col-sm-4 col-form-label">
                    HMO Additional Contribution
                </label>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Contribution"
                    />
                </div>
            </div>
        </div>
    );
};

export default Additional;
