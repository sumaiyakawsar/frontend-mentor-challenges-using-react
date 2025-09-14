import { useState, useEffect, useRef } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project61.scss';

import arrowDown from "./images/icon-arrow.svg"
import Error from "../../components/Error";

function Project61() {
    useFavicon("icons/project18.png");
    useDocumentTitle("Age calculator | Frontend Mentor");

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [errors, setErrors] = useState({ day: "", month: "", year: "" });
    const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

    const validate = () => {
        let newErrors = { day: "", month: "", year: "" };
        const today = new Date();

        // Convert to numbers
        const d = parseInt(day, 10);
        const m = parseInt(month, 10);
        const y = parseInt(year, 10);


        // Required field checks
        if (!day) newErrors.day = "This field is required";
        if (!month) newErrors.month = "This field is required";
        if (!year) newErrors.year = "This field is required";

        // Ranges
        if (!newErrors.day && (d < 1 || d > 31)) newErrors.day = "Must be a valid day";
        if (!newErrors.month && (m < 1 || m > 12)) newErrors.month = "Must be a valid month";
        if (!newErrors.year && y > today.getFullYear()) newErrors.year = "Must be in the past";

        // Extra: check if the date actually exists
        if (!newErrors.day && !newErrors.month && !newErrors.year) {
            const testDate = new Date(y, m - 1, d);
            if (
                testDate.getFullYear() !== y ||
                testDate.getMonth() !== m - 1 ||
                testDate.getDate() !== d
            ) {
                newErrors.day = "Must be a valid date";
                newErrors.month = " ";
                newErrors.year = " ";
            }
        }
        setErrors(newErrors);
        return !newErrors.day && !newErrors.month && !newErrors.year;
    };
    const animateNumber = (start, end, setter) => {
        const duration = 1000; // animation duration in ms
        const startTime = performance.now();

        const step = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            setter(value);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };
    const handleSubmit = () => {
        if (validate()) {
            const today = new Date();
            let birthDate = new Date(year, month - 1, day);

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            // Adjust if negative
            if (days < 0) {
                months -= 1;
                const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                days += prevMonth.getDate();
            }
            if (months < 0) {
                years -= 1;
                months += 12;
            }
            // Animate numbers
            animateNumber(0, years, (val) => setAge(prev => ({ ...prev, years: val })));
            animateNumber(0, months, (val) => setAge(prev => ({ ...prev, months: val })));
            animateNumber(0, days, (val) => setAge(prev => ({ ...prev, days: val })));
        } else {
            setAge({ years: "--", months: "--", days: "--" });
        }
    };

    return (
        <div className='project-61'>

            <div className="age-calculator">
                <form onSubmit={handleSubmit} className="calculator">
                    <div className="input-container">

                        <div className={`input-group ${errors.day ? "error" : ""}`}>
                            <label>DAY</label>
                            <input
                                type="number"
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                placeholder="DD"
                                min={1}
                                minLength={2}
                            />
                            {errors.day &&
                                <Error message={errors.day} id="day-error" className="error-text" />
                            }
                        </div>

                        <div className={`input-group ${errors.month ? "error" : ""}`}>
                            <label>MONTH</label>
                            <input
                                type="number"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                placeholder="MM"
                                min={1}
                                minLength={2}
                            />

                            {errors.month &&
                                <Error message={errors.month} id="month-error" className="error-text" />
                            }
                        </div>

                        <div className={`input-group ${errors.year ? "error" : ""}`}>
                            <label>YEAR</label>
                            <input
                                type="number"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                placeholder="YYYY"
                                min={1}
                            />
                            {errors.year &&
                                <Error message={errors.year} id="year-error" className="error-text" />
                            }
                        </div>


                    </div>
                    <div className="submit-container">
                        <hr />
                        <button className="submit-btn" type="submit">
                            <img src={arrowDown} alt="" />
                        </button>
                    </div>

                </form>


                <div className="results">
                    <p>
                        <span>{age.years}</span> years
                    </p>
                    <p>
                        <span>{age.months}</span> months
                    </p>
                    <p>
                        <span>{age.days}</span> days
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project61;