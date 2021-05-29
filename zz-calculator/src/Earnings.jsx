import { useState } from "react";

import React from "react";

const Earnings = (props) => {
    const { rate } = props;
    const [hours, setHours] = useState({
        absences: 0.0,
        undertime: 0.0,
        overtime: 0.0,
        rest: 0.0,
        night: 0.0,
        work_special: 0.0,
        work_regular: 0.0,
    });

    const handleAbsences = (e, earningtype) => {
        const value = e.target.value;
        if (earningtype === "absence") {
            const absence_value = (-(value * rate.daily)).toFixed(2);
            setHours((prevValue) => {
                return {
                    ...prevValue,
                    absences: absence_value,
                };
            });
        } else if (earningtype === "undertime") {
            const undertime_value = (-(value * rate.hourly)).toFixed(2);
            setHours((prevValue) => {
                return {
                    ...prevValue,
                    undertime: undertime_value,
                };
            });
        }
    };

    const handleRegular = (e, regulartype) => {
        const value = e.target.value;
        switch (regulartype) {
            case "overtime":
                const overtime_value = (
                    rate.hourly *
                    0.0125 *
                    100 *
                    value
                ).toFixed(2);
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        overtime: overtime_value,
                    };
                });
                break;
            case "rest":
                const rest_value = (rate.hourly * 0.013 * 100 * value).toFixed(
                    2
                );
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        rest: rest_value,
                    };
                });
                break;
            case "night":
                const night_value = (rate.hourly * 0.001 * 100 * value).toFixed(
                    2
                );
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        night: night_value,
                    };
                });
                break;
            case "work_special":
                const special_value = (
                    rate.hourly *
                    0.003 *
                    100 *
                    value
                ).toFixed(2);
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        work_special: special_value,
                    };
                });
                break;
            case "work_regular":
                const regular_value = (
                    rate.hourly *
                    0.01 *
                    100 *
                    value
                ).toFixed(2);
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        work_regular: regular_value,
                    };
                });
                break;
            default:
                console.log("error");
        }
    };

    return (
        <>
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
                        <input
                            type="text"
                            className="form-control"
                            placeholder="0.00"
                            value={rate.semi_monthly}
                            readOnly
                        />
                    </div>
                </div>
                <div className="block-earnings__absences mb-3">
                    <div className="row mb-1">
                        <label
                            htmlFor="earnings_absences"
                            className="col-sm-4 col-form-label"
                        >
                            Absences
                        </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Days"
                                onChange={(e) => {
                                    handleAbsences(e, "absence");
                                }}
                                id="earnings_absences"
                                name="earnings_absences"
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                type="number"
                                name="earnings_absences_value"
                                value={hours.absences}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row">
                        <label
                            htmlFor="earnings_undertime"
                            className="col-sm-4 col-form-label"
                        >
                            Undertime/Tardiness
                        </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                id="earnings_undertime"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleAbsences(e, "undertime");
                                }}
                                name="earnings_undertime"
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                type="number"
                                name="earnings_undertime_value"
                                value={hours.undertime}
                                readOnly
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
                                id="earnings_regular_overtime"
                                name="earnings_regular_overtime"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleRegular(e, "overtime");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_regular_overtime_value"
                                value={hours.overtime}
                                readOnly
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
                                id="earnings_rest_day"
                                name="earnings_rest_day"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleRegular(e, "rest");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_rest_day_value"
                                value={hours.rest}
                                readOnly
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="daily_rate"
                            className="col-sm-4 col-form-label"
                        >
                            Regular Night Differential
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_night"
                                name="earnings_night"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleRegular(e, "night");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_night_value"
                                value={hours.night}
                                readOnly
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
                                id="earnings_work_special"
                                name="earnings_work_special"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleRegular(e, "work_special");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_work_special_value"
                                value={hours.work_special}
                                readOnly
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
                                id="earnings_work_regular"
                                name="earnings_work_regular"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleRegular(e, "work_regular");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_work_regular_value"
                                value={hours.work_regular}
                                readOnly
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
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="daily_rate"
                            className="col-sm-4 col-form-label"
                        >
                            Overtime on Special Holiday at the same time Rest
                            Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                            />
                        </div>
                        <div className="col-sm-4">
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="daily_rate"
                            className="col-sm-4 col-form-label"
                        >
                            Overtime on Regular Holiday at the same time Rest
                            Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                            />
                        </div>
                        <div className="col-sm-4">
                            <input className="form-control" type="number" />
                        </div>
                    </div>
                </div>
                <div className="block-earnings__working mb-3">
                    <div className="row mb-1">
                        <label
                            htmlFor="daily_rate"
                            className="col-sm-4 col-form-label"
                        >
                            Working on Rest Day at the same time Special Holiday
                        </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                            />
                        </div>
                        <div className="col-sm-4">
                            <input className="form-control" type="number" />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="daily_rate"
                            className="col-sm-4 col-form-label"
                        >
                            Working on Rest Day at the same time Regular Holiday
                        </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                            />
                        </div>
                        <div className="col-sm-4">
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="daily_rate"
                            className="col-sm-4 col-form-label"
                        >
                            Night Differential on Special Holiday at the same
                            time Rest Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                            />
                        </div>
                        <div className="col-sm-4">
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="daily_rate"
                            className="col-sm-4 col-form-label"
                        >
                            Night Differential on Regular Holiday at the same
                            time Rest Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                            />
                        </div>
                        <div className="col-sm-4">
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
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
                            <input type="text" className="form-control" />
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
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Earnings;
