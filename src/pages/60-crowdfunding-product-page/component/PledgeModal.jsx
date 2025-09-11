import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

function PledgeModal({ onClose, selectedReward, rewards, onConfirm }) {

    const [selected, setSelected] = useState(null);
    const [pledgeAmounts, setPledgeAmounts] = useState({});
    const modalRef = useRef(null);

    useEffect(() => {
        if (selectedReward !== null) setSelected(selectedReward);
    }, [selectedReward]);

    // Automatically confirm if "Pledge with no reward" is selected
    useEffect(() => {
        if (selected !== null) {
            const reward = rewards.find(r => r.id === selected);
            if (reward.pledge === null) {
                onConfirm(0);
                onClose();
            }
        }
    }, [selected, rewards, onConfirm, onClose]);


    // Focus first interactive element on modal open
    useEffect(() => {
        const firstEl = modalRef.current.querySelector('button, input');
        firstEl?.focus();
    }, []);

    // Handle tab key cycling inside modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key !== "Tab") return;
            const focusableEls = modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const focusArray = Array.from(focusableEls);
            if (!focusArray.length) return;

            const firstEl = focusArray[0];
            const lastEl = focusArray[focusArray.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl.focus();
                }
            } else {
                if (document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handlePledgeChange = (id, value) => {
        setPledgeAmounts((prev) => ({ ...prev, [id]: Number(value) }));
    };

    const handleContinue = () => {
        if (selected === null) return;

        const pledgeAmount = pledgeAmounts[selected] || rewards.find(r => r.id === selected).pledge;
        onConfirm(pledgeAmount);
        onClose();
    };



    return (
        <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-content modal-pledge" ref={modalRef}>
                {/* Close button */}
                <button className="close-btn" onClick={onClose} aria-label="Close modal">
                    <IoClose />
                </button>

                <h2>Back this project</h2>
                <p>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
                    the world?
                </p>

                {rewards.map((reward) => {
                    const isSelected = selected === reward.id;
                    const isDisabled = reward.quantityLeft === 0;

                    return (
                        <div
                            key={reward.id}
                            className={`reward-card ${isSelected ? "selected" : ""} ${isDisabled ? "disabled" : ""
                                }`}
                            tabIndex={isDisabled ? -1 : 0} // keyboard focusable
                            onClick={() => !isDisabled && setSelected(reward.id)}
                            onKeyDown={(e) => {
                                if (isDisabled) return;
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setSelected(reward.id);
                                }
                            }}
                        >
                            <div className="pledge-header">
                                <div className="reward-header">
                                    <input
                                        type="radio"
                                        checked={isSelected}
                                        onChange={() => setSelected(reward.id)}
                                        disabled={isDisabled}
                                    />
                                    <div className="reward-title">
                                        <h3>
                                            {reward.title}
                                            {reward.pledge && (
                                                <span>Pledge ${reward.pledge} or more</span>
                                            )}
                                        </h3>
                                    </div>

                                    {/* desktop quantity */}
                                    {reward.quantityLeft !== null && (
                                        <div className="quantity">
                                            {reward.quantityLeft} <span>left</span>
                                        </div>
                                    )}
                                </div>

                                <p className="reward-description">{reward.description}</p>

                                {/* mobile quantity */}
                                {reward.quantityLeft !== null && (
                                    <div className="quantity-mobile">
                                        {reward.quantityLeft} <span>left</span>
                                    </div>
                                )}

                            </div>

                            {isSelected && reward.pledge !== null && (
                                <div className="pledge-footer">
                                    <span>Enter your pledge</span>

                                    <div className="pledge-right">
                                        <div className="pledge-input">
                                            <span>$</span>
                                            <input
                                                type="number"
                                                min={reward.pledge || 1}
                                                value={pledgeAmounts[reward.id] || reward.pledge || ""}
                                                onChange={(e) =>
                                                    handlePledgeChange(reward.id, e.target.value)
                                                }
                                            />
                                        </div>
                                        <button type="button"
                                            className="btn btn__primary"
                                            onClick={handleContinue}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" || e.key === " ") {
                                                    e.preventDefault();
                                                    handleContinue();
                                                }
                                            }}>
                                            Continue
                                        </button>
                                    </div>

                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default PledgeModal