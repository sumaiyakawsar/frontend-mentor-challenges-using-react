import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project29.scss';

import Results from "./components/Results";
import InputForm from "./components/InputForm";

const Project29 = () => {
    useFavicon("icons/project18.png");
    useDocumentTitle("Mortgage repayment calculator | Frontend Mentor");

    const [results, setResults] = useState(null);

    const [errors, setErrors] = useState({
        amount: false,
        term: false,
        rate: false,
        type: false,
    });

    const [formData, setFormData] = useState({
        amount: '',           // raw amount (e.g., 1000000)
        formattedAmount: '',  // display value with commas (e.g., 1,000,000)
        term: '',
        rate: '',
        type: '',
    });


    const handleCalculate = () => {

        const newErrors = {
            amount: !formData.amount,
            term: !formData.term,
            rate: !formData.rate,
            type: !formData.type,
        };

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);
        if (hasError) return;

        const principal = parseFloat(formData.amount);
        const years = parseFloat(formData.term);
        const rate = parseFloat(formData.rate) / 100 / 12;
        const totalMonths = years * 12;

        let monthlyPayment;

        if (formData.type === 'repayment') {
            monthlyPayment =
                (principal * rate) /
                (1 - Math.pow(1 + rate, -totalMonths));
        } else {
            monthlyPayment = principal * rate;
        }

        const totalRepayment = formData.type === 'repayment'
            ? monthlyPayment * totalMonths
            : monthlyPayment * totalMonths;

        setResults({
            monthly: monthlyPayment.toFixed(2),
            total: totalRepayment.toFixed(2)
        });
    };


    const handleClear = () => {
        setFormData({
            amount: '',
            formattedAmount: '',
            term: '',
            rate: '',
            type: '',
        });
        setResults(null);
        setErrors({
            amount: false,
            term: false,
            rate: false,
            type: false,
        });
    };



    return (
        <div className='project-29'>
            <div className="mortgage-calculator">
                <InputForm
                    formData={formData}
                    setFormData={setFormData}
                    onCalculate={handleCalculate}
                    onClear={handleClear}
                    errors={errors}
                    setErrors={setErrors}
                />
                <Results results={results} />
            </div>

        </div>
    )
}

export default Project29