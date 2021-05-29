import { useState } from "react";

import "./App.css";
import Rate from "./Rate";

const App = () => {
    const [rate, setRate] = useState({
        monthly: 0.00,
        daily: 0.00,
        hourly: 0.00,
    });

    const handleMonthly = (e) => {
        const { value } = e.target;
        setRate((prevValue) => {
            return {
                ...prevValue,
                monthly: value,
            };
        });
    };

    const handleHourly = (e) => {
        const daily = e.target.value;
        const hourly = (daily / 8).toFixed(2)
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
                    <h2>Earnings</h2>
                    <div className="block-earnings">
                        <div className="row mb-4">
                            <label
                                htmlFor="daily_rate"
                                className="col-sm-4 col-form-label"
                            >
                                Basic Pay (semi monthly)
                            </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="block-earnings__absences mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Absences
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <input
                                        className="form-control"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Undertime/Tardiness
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                        <div className="block-earnings__regular mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Regular Overtime
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Rest Day Work
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Regular Overtime
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Working on Special Holiday
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Working on Regular Holiday
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                        <div className="block-earnings__overtime mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Overtime on Rest Day
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Overtime on Special Holiday
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Overtime on Special Holiday at the same time
                                    Rest Day
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Overtime on Regular Holiday
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Overtime on Regular Holiday at the same time
                                    Rest Day
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                        <div className="block-earnings__working mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Working on Rest Day at the same time Special
                                    Holiday
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Working on Rest Day at the same time Regular
                                    Holiday
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                        <div className="block-earnings__night mb-3">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Night Differential on Rest Day
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Night Differential on Special Holiday
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Night Differential on Special Holiday at the
                                    same time Rest Day
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Night Differential on Regular Holiday
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Night Differential on Regular Holiday at the
                                    same time Rest Day
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                        <div className="block-earnings__other mb-4">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Other Earnings Taxable
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                                    Other Earnings NonTaxable
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hours"
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
                        <div className="block-earnings__total mb-5">
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    TOTAL GROSS INCOME
                                </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label
                                    htmlFor="daily_rate"
                                    className="col-sm-4 col-form-label"
                                >
                                    Taxable Amount
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
