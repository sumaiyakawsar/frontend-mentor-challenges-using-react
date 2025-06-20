const Sidebar = ({ currentStep }) => {

    const steps = [
        { number: 1, label: "YOUR INFO" },
        { number: 2, label: "SELECT PLAN" },
        { number: 3, label: "ADD-ONS" },
        { number: 4, label: "SUMMARY" },
    ];

    return (
        <div className="sidebar">
            {steps.map((item) => {
                return (
                    <div className="step-item" key={item.number}>
                        <div className={`circle ${currentStep === item.number ? "active" : ""}`}>
                            {item.number}
                        </div>
                        <div className="step-text">
                            <span>STEP {item.number}</span>
                            <p>
                                <strong>{item.label}</strong>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;
