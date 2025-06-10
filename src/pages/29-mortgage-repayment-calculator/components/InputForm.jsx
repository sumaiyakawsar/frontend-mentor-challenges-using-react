
import { FaCalculator } from "react-icons/fa";
import Error from "../../../components/Error";

const InputForm = ({ formData, setErrors, setFormData, onCalculate, onClear, errors }) => {


    const handleChange = (e) => {
        const { name, value } = e.target;

        // Clear error for this field on change
        setErrors(prev => ({
            ...prev,
            [name]: false,
        }));

        if (name === 'amount') {

            const numericValue = value.replace(/,/g, '');
            if (!/^\d*$/.test(numericValue)) return; // only allow digits

            const formatted = new Intl.NumberFormat().format(numericValue);

            setFormData((prev) => ({
                ...prev,
                amount: numericValue,
                formattedAmount: formatted,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };



    return (
        <div className="input-section">
            <div className="header">
                <h1>Mortgage Calculator</h1>
                <button onClick={onClear} className="clear-btn">Clear All</button>
            </div>

            <label className="label"> Mortgage Amount

                <div className={`currency-input ${errors.amount ? 'error' : ''}`}>
                    <span
                        className={errors.amount ? 'icon-error' : ''} >
                        £
                    </span>

                    <input
                        type="text"
                        name="amount"
                        value={formData.formattedAmount}
                        onChange={handleChange}

                    />
                </div>
                <div className="error-msg">
                    {errors.amount && <Error message="This field is required" />}

                </div>

            </label>

            <div className="flex-row">
                <label className="label">
                    Mortgage Term
                    <div className={`term-input ${errors.term ? 'error' : ''}`}>
                        <input
                            type="number"
                            name="term"
                            value={formData.term}
                            onChange={handleChange}

                        />
                        <span className={errors.term ? 'icon-error' : ''}>years</span>

                    </div>
                    <div className="error-msg">

                        {errors.term &&
                            <Error message="This field is required" />
                        }

                    </div>
                </label>

                <label className="label">
                    Interest Rate
                    <div className={`rate-input ${errors.rate ? 'error' : ''}`}>

                        <input
                            type="number"
                            name="rate"
                            value={formData.rate}
                            onChange={handleChange}
                        />
                        <span className={errors.rate ? 'icon-error' : ''}>%</span>
                    </div>
                    <div className="error-msg">

                        {errors.rate && <Error message="This field is required" />}

                    </div>
                </label>
            </div>
            <div className={`mortgage-type ${errors.type ? 'error' : ''}`}>
                Mortgage Type
                <label className={`radio ${formData.type === 'repayment' ? 'active' : ''}`}>
                    <input
                        type="radio"
                        name="type"
                        value="repayment"
                        checked={formData.type === 'repayment'}
                        onChange={handleChange}
                    />

                    <span>Repayment</span>

                </label>
                <label className={`radio ${formData.type === 'interest' ? 'active' : ''}`}>
                    <input
                        type="radio"
                        name="type"
                        value="interest"
                        checked={formData.type === 'interest'}
                        onChange={handleChange}
                    />

                    <span>Interest Only</span>
                </label>
                <div className="error-msg">

                    {errors.type && <Error message="This field is required" />}

                </div>
            </div>

            <button type="button" className="calculate-btn" onClick={onCalculate}>
                <span role="img" aria-label="calculator"><FaCalculator /></span> Calculate Repayments
            </button>
        </div>
    );
};

export default InputForm;
