import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

function ConfirmationModal({ onClose }) {
    return (
        <div className="modal ">
            <div className="modal-content modal-confirm">
                <FaCircleCheck className='icon'/>

                <h2>Thanks for your support!</h2>
                <p>
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo
                    Monitor Riser worldwide. You will get an email once our campaign is
                    completed.
                </p>
                <button className="btn btn__primary" type="button" onClick={onClose}>
                    Got it!
                </button>
            </div>
        </div>
    )
}

export default ConfirmationModal