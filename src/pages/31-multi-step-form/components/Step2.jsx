import iconArcade from '../images/icon-arcade.svg'
import iconAdvanced from '../images/icon-advanced.svg'
import iconPro from '../images/icon-pro.svg'

const plans = [
    { id: "arcade", title: 'Arcade', price: 9, icon: iconArcade },
    { id: "advanced", title: 'Advanced', price: 12, icon: iconAdvanced },
    { id: "pro", title: 'Pro', price: 15, icon: iconPro },
];

const Step2 = ({ formData, handleChange, handleBillingToggle }) => {
    const billingType = formData.billing;

    const handlePlanSelect = (title) => {
        const selected = plans.find((plan) => plan.title === title);
        if (selected) {
            handleChange({
                target: {
                    name: 'selectedPlan',
                    value: {
                        name: selected.title,
                        price: selected.price,
                    },
                },
            });
        }
    };

    return (
        <div className="step step2">
            <div className="intro">
                <h1>Select Your Plan</h1>
                <p className='description'>You have the option of monthly or yearly billing.</p>
            </div>

            <div className="plans">
                {plans.map((plan) => {
                    const isSelected = formData.selectedPlan.name === plan.title;

                    return (
                        <div
                            key={plan.id}
                            className={`plan-option ${isSelected ? 'selected' : ''}`}
                            onClick={() => handlePlanSelect(plan.title)}
                        >
                            <img src={plan.icon} alt={plan.title} />

                            <div className='plan-details'>
                                <h2 className='plan__name'>{plan.title}</h2>
                                <p className="plan__price">
                                    ${billingType === "monthly"
                                        ? plan.price
                                        : plan.price * 10}/{billingType === 'monthly' ? 'mo' : 'yr'}
                                </p>
                                {billingType === 'yearly' && <p className="free-months">2 months free</p>}
                            </div>
                        </div>
                    );
                })}
            </div>


            {/* Billing Toggle */}
            <div className="billing-toggle">
                <span className={billingType === 'monthly' ? 'active' : ''}>Monthly</span>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={billingType === 'yearly'}
                        onChange={handleBillingToggle}

                    />
                    <span className="slider round"></span>
                </label>
                <span className={billingType === 'yearly' ? 'active' : ''}>Yearly</span>
            </div>
        </div>
    );
};

export default Step2;
