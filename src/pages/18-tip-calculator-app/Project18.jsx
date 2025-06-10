import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project18.scss';
import iconDollar from './images/icon-dollar.svg'
import iconPerson from './images/icon-person.svg'
import logo from './images/logo.svg'
import Error from "../../components/Error";

const Project18 = () => {
    useFavicon("icons/project18.png");
    useDocumentTitle("Tip calculator app | Frontend Mentor");

    const [bill, setBill] = useState('');
    const [tip, setTip] = useState(null);
    const [customTip, setCustomTip] = useState('');
    const [people, setPeople] = useState('');
    const [error, setError] = useState(false);
    const tipPercent = 0;

    const isResetDisabled =
        (bill === '' || Number(bill) === 0) &&
        (people === '' || Number(people) === 0) &&
        (tip === null || tip === 0) &&
        (customTip === '' || Number(customTip) === 0);



    const tipAmount = () => {
        if (people > 0) {
            const tipPercent = tip !== null ? tip : (customTip / 100);
            return (bill * tipPercent) / people;
        }
        return 0.00;
    };

    const totalPerPerson = () => {
        if (people > 0) {
            return (bill / people) + tipAmount();
        }
        return 0;
    };

    const handleReset = () => {
        setBill('');
        setTip(null);
        setCustomTip('');
        setPeople('');
        setError(false);
    };


    const handleCustomTip = (e) => {
        setCustomTip(e.target.value);
        setTip(null);
    };

    const handlePeopleChange = (value) => {
        setPeople(value);
        setError(value === '0');
    };


    return (
        <div className='container project18'>

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="calculator">
                <div className="calculator_container">
                    <div className="bill_container">
                        <p className="label">Bill</p>
                        <div className="input_field">
                            <img src={iconDollar} alt="" className="icon" />
                            <input type="number" name="bill" id="bill" placeholder="0" value={bill === 0 ? '' : bill}
                                onChange={(e) => setBill(Number(e.target.value))} />

                        </div>
                    </div>
                    <div className="tip__container">
                        <p className="label">Select Tip %</p>

                        <div className="tip__options">
                            {[5, 10, 15, 25, 50].map((percent) => (
                                <button type="button" 
                                key={percent}
                                    className={tip === percent / 100 ? 'selected' : ''}
                                    onClick={() => { setTip(percent / 100); setCustomTip(''); }}
                                >
                                    {percent}%
                                </button>
                            ))}

                            <input
                                type="number"
                                placeholder="Custom"
                                value={customTip}
                                onChange={handleCustomTip}
                            />

                        </div>
                    </div>

                    <div className="ppl_container">
                        <div className="flex">
                            <p className="label">Number of People</p>
                            {error && 
                            
                                <Error message="Can't be zero" className="error-text" id="error-text" />

                            
                            }

                        </div>

                        <div className="input_field">
                            <img src={iconPerson} alt="" className="icon" />

 
                            <input
                                type="number"
                                placeholder="0"
                                value={people}
                                onChange={(e) => handlePeopleChange(e.target.value)}
                                className={error ? 'error' : ''}
                            />

                        </div>
                    </div>
                </div>


                <div className="results">
                    <div className="results__container">
                        <div className="row">
                            <div className="label">
                                <p>Tip Amount</p>
                                <span>/ person</span>
                            </div>
                            <div className="amount">
                                <h2>${tipAmount().toFixed(2)}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="label">
                                <p>Total</p>
                                <span>/ person</span>
                            </div>
                            <div className="amount">
                                <h2>${totalPerPerson().toFixed(2)}</h2>
                            </div>
                        </div>
                    </div>


                    <button type="button" className="reset-btn" onClick={handleReset} disabled={isResetDisabled}>RESET</button>
                </div>
            </div>
        </div>
    )
}

export default Project18