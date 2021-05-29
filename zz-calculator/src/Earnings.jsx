import { useState } from "react";

import React from "react";

const Earnings = (props) => {
    const { rate } = props;
    const [hours, setHours] = useState({
        absences: 0.0,
        undertime: 0.0,
    });

    const handleAbsences = (e, earningtype) => {
        console.log(earningtype);
        const value = e.target.value;
        if (earningtype == "absence") {
            const absence_value = (-(value * rate.daily)).toFixed(2);
            // console.log(absence_value)
            setHours((prevValue) => {
                return {
                    ...prevValue,
                    absences: absence_value,
                };
            });
        } else if (earningtype == "undertime") {
            const undertime_value = (-(value * rate.hourly)).toFixed(2);
            console.log(undertime_value);
            setHours((prevValue) => {
                return {
                    ...prevValue,
                    undertime: undertime_value,
                };
            });
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
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
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
                            <input className="form-control" type="number" />
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
