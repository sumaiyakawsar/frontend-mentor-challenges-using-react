import { useState } from 'react'
import Error from "../../../components/Error";

const CardForm = ({ cardData, setCardData, onSubmit }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        // NAME
        if (!cardData.name.trim()) errors.name = "Can't be blank";

        // CARD NUMBER
        const rawDigits = cardData.number.replace(/\s/g, "");

        if (!cardData.number.trim()) {
            errors.number = "Can't be blank";
        } else if (!/^\d{16}$/.test(rawDigits)) {
            errors.number = "Card number must be 16 digits";
        }

        // EXPIRY MONTH
        if (!cardData.expMonth.trim()) {
            errors.expMonth = "Can't be blank";
        } else if (!/^\d+$/.test(cardData.expMonth)) {
            errors.expMonth = "Wrong format, numbers only";
        } else if (+cardData.expMonth < 1 || +cardData.expMonth > 12) {
            errors.expMonth = "Invalid month";
        }

        // EXPIRY YEAR
        if (!cardData.expYear.trim()) {
            errors.expYear = "Can't be blank";
        } else if (!/^\d+$/.test(cardData.expYear)) {
            errors.expYear = "Wrong format, numbers only";
        } else if (cardData.expYear.length !== 2) {
            errors.expYear = "Invalid year";
        }

        // CVC
        if (!cardData.cvc.trim()) {
            errors.cvc = "Can't be blank";
        } else if (!/^\d+$/.test(cardData.cvc)) {
            errors.cvc = "Wrong format, numbers only";
        } else if (cardData.cvc.length !== 3) {
            errors.cvc = "Must be 3 digits";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const formatCardNumber = (value) =>
        value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();


    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue =
            name === "number" ? formatCardNumber(value) : value;
        setCardData({ ...cardData, [name]: newValue });


        // Removes the error as soon as the user begins typing
        if (errors[name]) {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors[name];
                return newErrors;
            });
        }

        if (name === "expMonth" || name === "expYear") {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors.expMonth;
                delete newErrors.expYear;
                return newErrors;
            });
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) onSubmit();
    };


    return (
        <form className="card-form" onSubmit={handleSubmit}>

            <label>
                CARDHOLDER NAME
                <input
                    name="name"
                    value={cardData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Appleseed"
                    className={errors.name ? "input-error" : ""}

                />
                {errors.name &&
                    <Error message={errors.name} className="error-msg" id="error-msg" />
                }
            </label>

            <label>
                CARD NUMBER
                <input
                    name="number"
                    value={cardData.number}
                    onChange={handleChange}
                    placeholder="e.g. 1234 5678 9123 0000"
                    className={errors.number ? "input-error" : ""}

                />

                {errors.number &&
                    <Error message={errors.number} className="error-msg" id="error-msg" />
                }
            </label>

            <div className="form-row">
                <label>
                    EXP. DATE (MM/YY)
                    <div className="row-fields">
                        <input
                            name="expMonth"
                            value={cardData.expMonth}
                            onChange={handleChange}
                            placeholder="MM"
                            className={errors.expMonth ? "input-error" : ""}

                        />
                        <input
                            name="expYear"
                            value={cardData.expYear}
                            onChange={handleChange}
                            placeholder="YY"
                            className={errors.expYear ? "input-error" : ""}

                        />
                    </div>
                    {(errors.expMonth || errors.expYear) && (
                        <Error message={errors.expMonth || errors.expYear} className="error-msg" id="error-msg" />
                    )}

                </label>

                <label htmlFor='cvc'>
                    CVC
                    <input
                        name="cvc"
                        value={cardData.cvc}
                        onChange={handleChange}
                        placeholder="e.g. 123"
                        className={errors.cvc ? "input-error" : ""}

                    />

                    {errors.cvc &&
                        <Error message={errors.cvc} className="error-msg" id="error-msg" />
                    }
                </label>
            </div>

            <button type="submit">Confirm</button>
        </form>
    );
};
export default CardForm;
