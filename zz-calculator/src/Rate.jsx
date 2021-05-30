import React from "react";

const Rate = (props) => {
    const {handleMonthly, rate} = props;
    

    return (
        <>
            <h1>Salary Calculator</h1>
            <div className="block-rate">
                <div className="row mb-3">
                    <label htmlFor="monthly_salary" className="col-sm-4 col-form-label">
                        Monthly Salary
                    </label>
                    <div className="col-sm-4">
                        <input
                            type="number"
                            className="form-control"
                            id="monthly_salary"
                            onChange={handleMonthly}
                            placeholder="0.00"
                            name="monthly_rate"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="daily_rate" className="col-sm-4 col-form-label">
                        Daily Rate
                    </label>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className="form-control"
                            id="daily_rate"
                            value={rate.daily}
                            placeholder="0.00"
                            name="daily_rate"
                            readOnly
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="hourly_rate" className="col-sm-4 col-form-label">
                        Hourly Rate
                    </label>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className="form-control"
                            id="hourly_rate"
                            value={rate.hourly}
                            placeholder="0.00"
                            name="hourly_rate"
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rate;
