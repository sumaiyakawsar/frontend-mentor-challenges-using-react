import { useState } from 'react'
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project33.scss';
import CardForm from './components/CardForm';
import CardDisplay from './components/CardDisplay';
import Confirmation from './components/Confirmation';

function Project33() {
    useFavicon("icons/project21.png");
    useDocumentTitle("Interactive card details form | Frontend Mentor");

    const [submitted, setSubmitted] = useState(false)
    const [fade, setFade] = useState("fade-in");


    const [cardData, setCardData] = useState({
        name: "",
        number: "",
        expMonth: "",
        expYear: "",
        cvc: "",
    });




    const handleSubmit = () => {
        setFade("fade-out");
        setTimeout(() => {
            setSubmitted(true);
            setFade("fade-in");
        }, 400);
    };

    const handleContinue = () => {
        setCardData({
            name: "",
            number: "",
            expMonth: "",
            expYear: "",
            cvc: "",
        });
        setSubmitted(false);
    };
    return (
        <div className='project-33'>
            <div className="container">
                <CardDisplay cardData={cardData} />
                <div className="form-fillin">
                    {submitted ? (
                        <Confirmation onContinue={handleContinue} className={fade} />
                    ) : (
                        <CardForm
                            cardData={cardData}
                            setCardData={setCardData}
                            onSubmit={handleSubmit} className={fade}
                        />
                    )}
                </div>

            </div>
        </div>
    )
}

export default Project33




