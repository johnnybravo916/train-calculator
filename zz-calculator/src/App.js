import { useState, useEffect } from "react";

import "./App.css";
import Rate from "./Rate";
import Earnings from "./Earnings";
import Contribution from "./Contribution";
import Additional from "./Additional";
import Loan from "./Loan";
import Other from "./Other";
import Tax from "./Tax";
import Total from "./Total";

const App = () => {
    const [pay, setPay] = useState({
        gross: 0.0,
        taxable: 0.0,
        deductions: 0.0,
    });
    const [rate, setRate] = useState({
        monthly: 0.0,
        semi_monthly: 0.0,
        daily: 0.0,
        hourly: 0.0,
    });

    const [sss, setSSS] = useState({
        monthly: 0,
        semi_monthly: 0,
    });

    const [ph, setPh] = useState({
        monthly: 0,
        semi_monthly: 0,
    });
    const [hdmf, setHdmf] = useState({
        monthly: 0,
        semi_monthly: 0,
    });
    const [withholding, setWithholding] = useState(0);
    const [net, setNet] = useState(0);
    const [contribution, setContribution] = useState({
        sss: 0.0,
        hdmf: 0.0,
        hdmf_add: 0.0,
        hmo_add: 0.0,
        other: 0.0,
    });
    const [hours, setHours] = useState({
        absences: 0.0,
        undertime: 0.0,
        overtime: 0.0,
        rest: 0.0,
        night: 0.0,
        work_special: 0.0,
        work_regular: 0.0,
        ot_rest: 0.0,
        ot_special: 0.0,
        ot_special_same: 0.0,
        ot_regular: 0.0,
        ot_regular_same: 0.0,
        working_special: 0.0,
        working_regular: 0.0,
        night_rest: 0.0,
        night_special: 0.0,
        night_special_same: 0.0,
        night_regular: 0.0,
        night_regular_same: 0.0,
        other_tax: 0.0,
        other_nontax: 0.0,
    });

    const formatPHP = (value) => {
        let format_net = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "PHP",
        }).format(value);
        return format_net;
    };

    const handleMonthly = (e) => {
        const { value } = e.target;
        const daily = (value / 21.75).toFixed(2);
        const hourly = (daily / 8).toFixed(2);
        const semi_monthly = value / 2;
        setRate((prevValue) => {
            return {
                ...prevValue,
                monthly: value,
                semi_monthly: semi_monthly,
                daily: daily,
                hourly: hourly,
            };
        });
        calcSSS(value);
        calcPH(value);
        calcHDMF(value);
    };

    useEffect(() => {
        let value = Object.values(hours).reduce((a, b) => {
            return a + b;
        }, rate.semi_monthly);
        let taxable =
            value -
            1733.33 -
            sss.semi_monthly -
            ph.semi_monthly -
            hdmf.semi_monthly -
            hours.other_nontax;
        setPay((prevValue) => {
            return {
                ...prevValue,
                gross: value,
                taxable: taxable,
            };
        });
        calcWithholding(taxable);
    }, [hours, rate]);

    const calcWithholding = (taxable) => {
        let withholding_value = 0;
        const calculateWithHolding = (
            taxable,
            min,
            predetermined,
            percent_value
        ) => {
            let excess = taxable - min;
            let percent = excess * percent_value;
            withholding_value = percent + predetermined;
            return withholding_value;
        };
        switch (true) {
            case taxable < 10417:
                calculateWithHolding(taxable, 0, 0, 0);
                break;
            case taxable >= 10417 && taxable <= 16666:
                calculateWithHolding(taxable, 10417, 0, 0.2);
                break;
            case taxable >= 16667 && taxable <= 33332:
                calculateWithHolding(taxable, 16667, 1250, 0.25);
                break;
            case taxable >= 33333 && taxable <= 83332:
                calculateWithHolding(taxable, 33333, 5416.67, 0.3);
                break;
            case taxable >= 83333 && taxable <= 333332:
                calculateWithHolding(taxable, 83333, 20416.67, 0.32);
                break;
            case taxable >= 333333 && taxable <= 99999999:
                calculateWithHolding(taxable, 333333, 100416.67, 0.35);
                break;
            default:
                console.log("error withholding tax");
        }
        setWithholding(withholding_value);
    };

    useEffect(() => {
        let deductions =
            sss.semi_monthly +
            ph.semi_monthly +
            hdmf.semi_monthly +
            contribution.sss +
            contribution.hdmf +
            contribution.hdmf_add +
            contribution.hmo_add +
            contribution.other +
            withholding;
        setPay((prevValue) => {
            return {
                ...prevValue,
                deductions: deductions,
            };
        });
    }, [sss, ph, hdmf, contribution, withholding]);

    useEffect(() => {
        let netvalue = pay.gross - pay.deductions;

        setNet(formatPHP(netvalue));
    }, [pay]);

    const calcSSS = (monthly) => {
        let value = 0;
        switch (true) {
            case monthly < 3250:
                break;
            case monthly >= 3250 && monthly <= 3749.99:
                value = 157.5;
                break;
            case monthly >= 3750 && monthly <= 4249.99:
                value = 180.0;
                break;
            case monthly >= 4250 && monthly <= 4749.99:
                value = 202.5;
                break;
            case monthly >= 4750 && monthly <= 5249.99:
                value = 225.0;
                break;
            case monthly >= 5250 && monthly <= 5749.99:
                value = 247.5;
                break;
            case monthly >= 5750 && monthly <= 6249.99:
                value = 270.0;
                break;
            case monthly >= 6250 && monthly <= 6749.99:
                value = 292.5;
                break;
            case monthly >= 6750 && monthly <= 7249.99:
                value = 315.0;
                break;
            case monthly >= 7250 && monthly <= 7749.99:
                value = 337.5;
                break;
            case monthly >= 7750 && monthly <= 8249.99:
                value = 360.0;
                break;
            case monthly >= 8250 && monthly <= 8749.99:
                value = 382.5;
                break;
            case monthly >= 8750 && monthly <= 9249.99:
                value = 405.0;
                break;
            case monthly >= 9250 && monthly <= 9749.99:
                value = 427.5;
                break;
            case monthly >= 9750 && monthly <= 10249.99:
                value = 450.0;
                break;
            case monthly >= 10250 && monthly <= 10749.99:
                value = 472.5;
                break;
            case monthly >= 10750 && monthly <= 11249.99:
                value = 495.0;
                break;
            case monthly >= 11250 && monthly <= 11749.99:
                value = 517.5;
                break;
            case monthly >= 11750 && monthly <= 12249.99:
                value = 540.0;
                break;
            case monthly >= 12250 && monthly <= 12749.99:
                value = 562.5;
                break;
            case monthly >= 12750 && monthly <= 13249.99:
                value = 585.0;
                break;
            case monthly >= 13250 && monthly <= 13749.99:
                value = 607.5;
                break;
            case monthly >= 13750 && monthly <= 14249.99:
                value = 630.0;
                break;
            case monthly >= 14250 && monthly <= 14749.99:
                value = 652.5;
                break;
            case monthly >= 14750 && monthly <= 15249.99:
                value = 675.0;
                break;
            case monthly >= 15250 && monthly <= 15749.99:
                value = 697.5;
                break;
            case monthly >= 15750 && monthly <= 16249.99:
                value = 720.0;
                break;
            case monthly >= 16250 && monthly <= 16749.99:
                value = 742.5;
                break;
            case monthly >= 16750 && monthly <= 17249.99:
                value = 765.0;
                break;
            case monthly >= 17250 && monthly <= 17749.99:
                value = 787.5;
                break;
            case monthly >= 17750 && monthly <= 18249.99:
                value = 810.0;
                break;
            case monthly >= 18250 && monthly <= 18749.99:
                value = 832.5;
                break;
            case monthly >= 18750 && monthly <= 19249.99:
                value = 855.0;
                break;
            case monthly >= 19250 && monthly <= 19749.99:
                value = 877.5;
                break;
            case monthly >= 19750 && monthly <= 20249.99:
                value = 900.0;
                break;
            case monthly >= 20250 && monthly <= 20749.99:
                value = 922.5;
                break;
            case monthly >= 20750 && monthly <= 21249.99:
                value = 945.0;
                break;
            case monthly >= 21250 && monthly <= 21749.99:
                value = 967.5;
                break;
            case monthly >= 21750 && monthly <= 22249.99:
                value = 990.0;
                break;
            case monthly >= 22250 && monthly <= 22749.99:
                value = 1012.5;
                break;
            case monthly >= 22750 && monthly <= 23249.99:
                value = 1035.0;
                break;
            case monthly >= 23250 && monthly <= 23749.99:
                value = 1057.5;
                break;
            case monthly >= 23750 && monthly <= 24249.99:
                value = 1080.0;
                break;
            case monthly >= 24250 && monthly <= 24749.99:
                value = 1102.5;
                break;
            case monthly >= 24750 && monthly <= 800000:
                value = 1125.0;
                break;
            default:
                console.log(`contribution error for SSS, ${monthly}`);
        }
        setSSS({ monthly: value, semi_monthly: value / 2 });
    };

    const calcPH = (monthly) => {
        let value = 0;
        switch (true) {
            case monthly <= 10000:
                value = 300;
                break;
            case monthly >= 10000.01 && monthly <= 59999.99:
                value = monthly * 0.03;
                break;
            case monthly >= 60000 && monthly <= 800000:
                value = 1800;
                break;
            default:
                console.log(`contribution error for Philhealth, ${monthly}`);
        }
        setPh({ monthly: value, semi_monthly: value / 2 / 2 });
    };

    const calcHDMF = (monthly) => {
        let value = 0;
        if (monthly < 5000) {
            value = 200;
        } else {
            value = 200;
        }
        setHdmf({ monthly: value, semi_monthly: value / 2 / 2 });
    };

    const handleContribution = (e, valuetype) => {
        const { value } = e.target;
        switch (valuetype) {
            case "sss":
                setContribution((prevValue) => {
                    return {
                        ...prevValue,
                        sss: value,
                    };
                });
                break;
            case "hdmf":
                setContribution((prevValue) => {
                    return {
                        ...prevValue,
                        hdmf: value,
                    };
                });
                break;
            case "hdmf_add":
                setContribution((prevValue) => {
                    return {
                        ...prevValue,
                        hdmf_add: value,
                    };
                });
                break;
            case "hmo_add":
                setContribution((prevValue) => {
                    return {
                        ...prevValue,
                        hmo_add: value,
                    };
                });
                break;
            case "other":
                setContribution((prevValue) => {
                    return {
                        ...prevValue,
                        other: value,
                    };
                });
                break;
            default:
                console.log(
                    `contribution error for sss,hdmf,hmo or other ${value}`
                );
        }
    };

    // const handleHourly = (e) => {
    //     const daily = e.target.value;
    //     const hourly = (daily / 8).toFixed(2);
    //     setRate((prevValue) => {
    //         return {
    //             ...prevValue,
    //             hourly: hourly,
    //             daily: daily,
    //         };
    //     });
    // };

    return (
        <div className="container-fluid">
            <div className="row">
                <h1>Salary Calculator</h1>
                <div className="col-md-6">
                    <Rate
                        handleMonthly={handleMonthly}
                        // handleHourly={handleHourly}
                        rate={rate}
                    />
                    <Earnings
                        rate={rate}
                        pay={pay}
                        setHours={setHours}
                        hours={hours}
                    />
                </div>
                <div className="col-md-6">
                    <div className="block-deductions mb-5">
                        <Contribution sss={sss} ph={ph} hdmf={hdmf} />
                        <Loan handleContribution={handleContribution} />
                        <Additional handleContribution={handleContribution} />
                        <Other handleContribution={handleContribution} />
                        <Tax withholding={withholding} />
                    </div>
                    <Total pay={pay} net={net} />
                </div>
            </div>
        </div>
    );
};

export default App;
