 import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Toast = ({ message, subtext, show }) => {
    return (
        <div 
        role="status" 
        aria-live="polite" 
        className={`toast ${show ? 'show' : ''}`}
        >
            <span className="row"> 
                <IoIosCheckmarkCircleOutline className='icon'/>

                <strong>{message}</strong>
            </span>
            <div>

                <p>{subtext}</p>
            </div>
        </div>
    );
};

export default Toast;
