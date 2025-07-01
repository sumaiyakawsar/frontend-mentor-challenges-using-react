import cardFront from "../images/bg-card-front.png"
import cardBack from "../images/bg-card-back.png"
import cardLogo from "../images/card-logo.svg"


const CardDisplay = ({ cardData }) => {
    const { name, number, expMonth, expYear, cvc } = cardData;


    return (

        <section className="card-display">
            <div className="card-wrapper">
                <div className="card-front">
                    <img src={cardFront} alt="Card Front" />

                    <img src={cardLogo} alt="" className="card-logo" />

                    <p className="card-number">{number || "0000 0000 0000 0000"}</p>

                    <div className="card-details">
                        <p className="card-name">{name || "JANE APPLESEED"}</p>
                        <p className="card-expiry">{(expMonth || "00")}/{(expYear || "00")}</p>
                    </div>

                </div>

                <div className="card-back">
                    <img src={cardBack} alt="Card Back" />
                    <p className="card-cvc">{cvc || "000"}</p>
                </div>
            </div>

        </section>
    );
};

export default CardDisplay;
