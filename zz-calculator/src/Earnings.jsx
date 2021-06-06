import { useState } from "react";

import React from "react";

const Earnings = (props) => {
    const { rate, pay, setHours, hours } = props;


    // const formatter = new Intl.NumberFormat('en-US', {
    //   style:'currency',
    //   currency: 'PHP'
    // })

    // const addHours = () => {
    //     let value = Object.values(hours).reduce((a, b) => {
    //         return a + b;
    //     });
    //     return value
    // };
 

    const handleAbsences = (e, earningtype) => {
        const value = e.target.value;
        if (earningtype === "absence") {
            const absence_value = -(value * rate.daily);
            setHours((prevValue) => {
                return {
                    ...prevValue,
                    absences: absence_value,
                };
            });
        } else if (earningtype === "undertime") {
            const undertime_value = -(value * rate.hourly);
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
                const overtime_value = rate.hourly * 0.0125 * 100 * value;
                console.log(overtime_value);
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        overtime: overtime_value,
                    };
                });
                break;
            case "rest":
                const rest_value = rate.hourly * 0.013 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        rest: rest_value,
                    };
                });
                break;
            case "night":
                const night_value = rate.hourly * 0.001 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        night: night_value,
                    };
                });
                break;
            case "work_special":
                const special_value = rate.hourly * 0.003 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        work_special: special_value,
                    };
                });
                break;
            case "work_regular":
                const regular_value = rate.hourly * 0.01 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        work_regular: regular_value,
                    };
                });
                break;
            default:
                console.log("earnings error");
        }
    };

    const handleOT = (e, ottype) => {
        const value = e.target.value;
        switch (ottype) {
            case "ot_rest":
                const ot_rest_value = rate.hourly * 0.0169 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        ot_rest: ot_rest_value,
                    };
                });
                break;
            case "ot_special":
                const ot_special_value = rate.hourly * 0.0169 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        ot_special: ot_special_value,
                    };
                });
                break;
            case "ot_special_same":
                const ot_special_same_value =
                    rate.hourly * 0.0195 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        ot_special_same: ot_special_same_value,
                    };
                });
                break;
            case "ot_regular":
                const ot_regular_value = rate.hourly * 0.026 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        ot_regular: ot_regular_value,
                    };
                });
                break;
            case "ot_regular_same":
                const ot_regular_same_value =
                    rate.hourly * 0.0338 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        ot_regular_same: ot_regular_same_value,
                    };
                });
                break;
            default:
                console.log("earnings error");
        }
    };

    const handleWorking = (e, workingtype) => {
        const value = e.target.value;
        switch (workingtype) {
            case "working_special":
                const working_special_value = rate.hourly * 0.015 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        working_special: working_special_value,
                    };
                });
                break;
            case "working_regular":
                const working_regular_value = rate.hourly * 0.026 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        working_regular: working_regular_value,
                    };
                });
                break;
            default:
                console.log("earnings error");
        }
    };

    const handleNight = (e, nighttype) => {
        const value = e.target.value;
        switch (nighttype) {
            case "night_rest":
                const night_rest_value =
                    rate.hourly * 0.013 * 0.1 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        night_rest: night_rest_value,
                    };
                });
                break;
            case "night_special":
                const night_special_value =
                    rate.hourly * 0.013 * 0.1 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        night_special: night_special_value,
                    };
                });
                break;
            case "night_special_same":
                const night_special_same_value =
                    rate.hourly * 0.015 * 0.1 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        night_special_same: night_special_same_value,
                    };
                });
                break;
            case "night_regular":
                const night_regular_value =
                    rate.hourly * 0.02 * 0.1 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        night_regular: night_regular_value,
                    };
                });
                break;
            case "night_regular_same":
                const night_regular_same_value =
                    rate.hourly * 0.0206 * 0.1 * 100 * value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        night_regular_same: night_regular_same_value,
                    };
                });
                break;
            default:
                console.log("earnings error");
        }
    };

    const handleOther = (e, othertype) => {
        const value = e.target.value;
        switch (othertype) {
            case "other_tax":
                const other_tax_value = value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        other_tax: other_tax_value,
                    };
                });
                break;
            case "other_nontax":
                const other_nontax_value = value;
                setHours((prevValue) => {
                    return {
                        ...prevValue,
                        other_nontax: other_nontax_value,
                    };
                });
                break;
            default:
                console.log("earnings error");
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
                            htmlFor="earnings_regular_overtime"
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
                            htmlFor="earnings_rest_day"
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
                            htmlFor="earnings_night"
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
                            htmlFor="earnings_work_special"
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
                            htmlFor="earnings_ot_rest"
                            className="col-sm-4 col-form-label"
                        >
                            Overtime on Rest Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_ot_rest"
                                name="earnings_ot_rest"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleOT(e, "ot_rest");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_ot_rest_value"
                                value={hours.ot_rest}
                                readOnly
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="earnings_ot_special"
                            className="col-sm-4 col-form-label"
                        >
                            Overtime on Special Holiday
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_ot_special"
                                name="earnings_ot_special"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleOT(e, "ot_special");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_ot_special_value"
                                value={hours.ot_special}
                                readOnly
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="earnings_ot_special_same"
                            className="col-sm-4 col-form-label"
                        >
                            Overtime on Special Holiday at the same time Rest
                            Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_ot_special_same"
                                name="earnings_ot_special_same"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleOT(e, "ot_special_same");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_ot_special_same_value"
                                value={hours.ot_special_same}
                                readOnly
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="earnings_ot_regular"
                            className="col-sm-4 col-form-label"
                        >
                            Overtime on Regular Holiday
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_ot_regular"
                                name="earnings_ot_regular"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleOT(e, "ot_regular");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_ot_regular_value"
                                value={hours.ot_regular}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="earnings_ot_regular_same"
                            className="col-sm-4 col-form-label"
                        >
                            Overtime on Regular Holiday at the same time Rest
                            Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_ot_regular_same"
                                name="earnings_ot_regular_same"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleOT(e, "ot_regular_same");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_ot_regular_same_value"
                                value={hours.ot_regular_same}
                                readOnly
                                type="number"
                            />
                        </div>
                    </div>
                </div>
                <div className="block-earnings__working mb-3">
                    <div className="row mb-1">
                        <label
                            htmlFor="working_special"
                            className="col-sm-4 col-form-label"
                        >
                            Working on Rest Day at the same time Special Holiday
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_working_special"
                                name="earnings_working_special"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleWorking(e, "working_special");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_working_special_value"
                                value={hours.working_special}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="working_regular"
                            className="col-sm-4 col-form-label"
                        >
                            Working on Rest Day at the same time Regular Holiday
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_working_regular"
                                name="earnings_working_regular"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleWorking(e, "working_regular");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_working_regular_value"
                                value={hours.working_regular}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="block-earnings__night mb-3">
                    <div className="row mb-1">
                        <label
                            htmlFor="night_rest"
                            className="col-sm-4 col-form-label"
                        >
                            Night Differential on Rest Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_night_rest"
                                name="earnings_night_rest"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleNight(e, "night_rest");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_night_rest_value"
                                value={hours.night_rest}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="night_special"
                            className="col-sm-4 col-form-label"
                        >
                            Night Differential on Special Holiday
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_night_special"
                                name="earnings_night_special"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleNight(e, "night_special");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_night_special_value"
                                value={hours.night_special}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="night_special_same"
                            className="col-sm-4 col-form-label"
                        >
                            Night Differential on Special Holiday at the same
                            time Rest Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_night_special_same"
                                name="earnings_night_special_same"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleNight(e, "night_special_same");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_night_special_same_value"
                                value={hours.night_special_same}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="night_regular"
                            className="col-sm-4 col-form-label"
                        >
                            Night Differential on Regular Holiday
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_night_regular"
                                name="earnings_night_regular"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleNight(e, "night_regular");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_night_regular_value"
                                value={hours.night_regular}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="night_regular_same"
                            className="col-sm-4 col-form-label"
                        >
                            Night Differential on Regular Holiday at the same
                            time Rest Day
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_night_regular_same"
                                name="earnings_night_regular_same"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleNight(e, "night_regular_same");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_night_regular_same_value"
                                value={hours.night_regular_same}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="block-earnings__other mb-4">
                    <div className="row mb-1">
                        <label
                            htmlFor="other_tax"
                            className="col-sm-4 col-form-label"
                        >
                            Other Earnings Taxable
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_other_tax"
                                name="earnings_other_tax"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleOther(e, "other_tax");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_other_tax_value"
                                value={hours.other_tax}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label
                            htmlFor="other_nontax"
                            className="col-sm-4 col-form-label"
                        >
                            Other Earnings NonTaxable
                        </label>
                        <div className="col-sm-4">
                            <input
                                id="earnings_other_nontax"
                                name="earnings_other_nontax"
                                type="text"
                                className="form-control"
                                placeholder="Hours"
                                onChange={(e) => {
                                    handleOther(e, "other_nontax");
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_other_nontax_value"
                                value={hours.other_nontax}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="block-earnings__total mb-5">
                    <div className="row mb-1">
                        <label
                            htmlFor="earnings_gross"
                            className="col-sm-4 col-form-label"
                        >
                            TOTAL GROSS INCOME
                        </label>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                name="earnings_gross"
                                value={pay.gross}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                    <label
                            htmlFor="taxable_amount"
                            className="col-sm-4 col-form-label"
                        >
                            Taxable Amount
                        </label>
                        <div className="col-sm-4">
                        <input
                                className="form-control"
                                name="taxable_amount"
                                value={pay.taxable}
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Earnings;
