
const Step4 = ({ formData, handleBillingToggle }) => {
    const billingType = formData.billing;

    const planCost = billingType === "yearly"
        ? formData.selectedPlan.price * 10
        : formData.selectedPlan.price;

    const addonCost = formData.addons.reduce((total, addon) => {
        return total + (billingType === "yearly"
            ? addon.price * 10
            : addon.price);
    }, 0);

    const totalPrice = planCost + addonCost;

    return (
        <div className="step step4">
            <div className="intro">
                <h1>Finishing up</h1>
                <p className='description'> Double-check everything looks OK before confirming.</p>
            </div>

            <div className="summary__content">

                <div className="summary">

                    <div className="plan">
                        <div className="plan__change">
                            <p>{formData.selectedPlan.name} ({billingType})</p>
                            <button type="button" className="btn__toggle" onClick={handleBillingToggle}
                            > Change </button>
                        </div>
                        <p>${planCost}/{billingType === 'monthly' ? 'mo' : 'yr'}</p>
                    </div>


                    <div className="addons">
                        {formData.addons.map((addon) => (
                            <div key={addon.name} className="addon">

                                <p>{addon.name}</p>
                                <p className="addon__price">+${
                                    (billingType === "yearly"
                                        ? addon.price * 10
                                        : addon.price)
                                }/{billingType === 'monthly' ? 'mo' : 'yr'}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="total">
                    <p className="total__value">Total ({billingType === 'monthly' ? 'per month' : 'per year'})</p>
                    <p className="total__price">${totalPrice}/{billingType === 'monthly' ? 'mo' : 'yr'}</p>
                </div>

            </div>
        </div>
    );
};

export default Step4;
