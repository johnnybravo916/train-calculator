import { useState } from "react";

import "./App.css";
import Rate from "./Rate";
import Earnings from "./Earnings";

const App = () => {
    const [rate, setRate] = useState({
        monthly: 0.00,
        semi_monthly: 0.00,
        daily: 0.00,
        hourly: 0.00,
    });

    const handleMonthly = (e) => {
        const { value } = e.target;
        const semi_monthly = (value/2).toFixed(2)
        setRate((prevValue) => {
            return {
                ...prevValue,
                monthly: value,
                semi_monthly: semi_monthly
            };
        });
    };

    const handleHourly = (e) => {
        const daily = e.target.value;
        const hourly = (daily / 8).toFixed(2);
        setRate((prevValue) => {
            return {
                ...prevValue,
                hourly: hourly,
                daily: daily,
            };
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Rate
                        handleMonthly={handleMonthly}
                        handleHourly={handleHourly}
                        rate={rate}
                    />
                    <Earnings rate={rate} />
                </div>
                <div className="col-md-12">
                    <div className="block-deductions mb-5">
                        <div className="block-deductions__mandatory mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    SSS Mandatory Contribution
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <input
                                        className="form-control"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    PHILHEALTH Mandatory Contribution
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <input
                                        className="form-control"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    HDMF Mandatory Contribution
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <input
                                        className="form-control"
                                        type="number"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block-deductions__loan mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
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
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
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
                        <div className="block-deductions__contribution mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
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
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
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
                        <div className="block-deductions__other mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Other Deductions
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Deduction"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block-deductions__tax mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Withholding Tax
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-total">
                        <div className="block-total__deductions mb-4">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    TOTAL DEDUCTIONS
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block-total__net mb-5">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    TOTAL NET PAY
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
