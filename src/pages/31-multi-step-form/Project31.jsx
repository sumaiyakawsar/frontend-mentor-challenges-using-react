import { useState } from 'react'
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project31.scss';
import Sidebar from './components/Sidebar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Buttons from './components/Buttons';

function Project31() {
    useFavicon("icons/project21.png");
    useDocumentTitle("Multi-Step Form | Frontend Mentor");

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        selectedPlan: {
            name: 'Arcade',
            price: 9
        },
        billing: 'monthly',
        addons: [],
    });
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({});

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "This field is required";
        if (!formData.email.trim()) {
            newErrors.email = "This field is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }
        if (!formData.phone.trim()) newErrors.phone = "This field is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleNext = () => {
        if (currentStep === 1 && validateStep1()) {
            nextStep();
        }
    };

    const handleBillingToggle = () => {
        setFormData((prev) => ({
            ...prev,
            billing: prev.billing === 'monthly' ? 'yearly' : 'monthly',
        }));
    };



    const steps = [
        <Step1 formData={formData} handleChange={handleChange} errors={errors} setErrors={setErrors} />,
        <Step2 formData={formData} handleChange={handleChange} handleBillingToggle={handleBillingToggle} />,
        <Step3 formData={formData} handleChange={handleChange} />,
        <Step4 formData={formData} handleBillingToggle={handleBillingToggle} />,
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit formData', formData);
        setSubmitted(true);
    };

    return (
        <div className='project31'>

            <div className="multi-step-form">
                <Sidebar currentStep={currentStep} />

                {!submitted ? (
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-content">{steps[currentStep - 1]}</div>

                        <Buttons nextStep={nextStep} prevStep={prevStep} currentStep={currentStep} handleNext={handleNext} />
                    </form>
                ) : (
                    <Step5 />
                )}


            </div>
        </div>
    )
}

export default Project31




