import iconThanks from "../images/icon-thank-you.svg"
function Step5() {
    return (
        <div className="confirmation">
            <div className="some">
                <img src={iconThanks} alt="" />

                <h1>Thank you! </h1>

                <p className="description">
                    Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}

export default Step5