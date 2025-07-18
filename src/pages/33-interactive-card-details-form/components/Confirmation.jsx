import iconThanks from "../images/icon-complete.svg"

function Confirmation({ onContinue }) {
    return (
        <section className="thank-you">
            <img src={iconThanks} alt="" />

            <h2>THANK YOU!</h2>
            <p>We’ve added your card details</p>
            <button onClick={onContinue}>Continue</button>
        </section>
    )
}

export default Confirmation