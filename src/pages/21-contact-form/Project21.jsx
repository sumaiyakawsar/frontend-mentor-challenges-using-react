import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project21.scss';
import Toast from "./component/Toast";
import Error from "../../components/Error";

const Project21 = () => {
    useFavicon("icons/project21.png");
    useDocumentTitle("Contact form | Frontend Mentor");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false,
    });


    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [showToast, setShowToast] = useState(false);


    const validateField = (name, value) => {
        let error = '';

        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = 'Please enter a valid email address';
            }
        }

        if ((name === 'firstName' || name === 'lastName' || name === 'message') && value.trim() === '') {
            error = 'This field is required';
        }

        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const validateAll = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'This field is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'This field is required';
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
        if (!formData.queryType) newErrors.queryType = 'Please select a query type';
        if (!formData.message.trim()) newErrors.message = 'This field is required';
        if (!formData.consent) newErrors.consent = 'To submit this form, please consent to being contacted';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: fieldValue,
        }));

        validateField(name, fieldValue); // Real-time validation
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateAll()) {
            setSubmitted(true);
            // Show toast
            setShowToast(true);

            // Reset form fields
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                queryType: '',
                message: '',
                consent: false,
            });

            // Auto-hide after 4s
            setTimeout(() => setShowToast(false), 4000);
        }
    };



    return (
        <div className='project-21'>
            <Toast
                message="Message Sent!"
                subtext="Thanks for completing the form. We'll be in touch soon!"
                show={showToast}
            />
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h1> Contact Us</h1>
                <div className="form-group row">
                    <div className="column">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={errors.firstName ? 'error' : ''}
                            aria-describedby={errors.firstName ? "firstName-error" : undefined}
                            aria-invalid={!!errors.firstName}
                        />
                        {errors.firstName &&
                            <Error message={errors.firstName} id="firstName-error" className="error-text" />

                        }
                    </div>
                    <div className="column">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={errors.lastName ? 'error' : ''}
                            aria-describedby={errors.lastName ? "lastName-error" : undefined}
                            aria-invalid={!!errors.lastName}
                        />
                        {errors.lastName &&
                            <Error message={errors.lastName} id="lastName-error" className="error-text" />
                        }
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={!!errors.email}
                    />
                    {errors.email &&
                        <Error message={errors.email} id="email-error" className="error-text" />
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="queryType" id="queryType-label">Query Type *</label>
                    <div className="query-options" role="radiogroup"
                        aria-labelledby="queryType-label"
                    >
                        <div className={`option ${formData.queryType === 'general' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="queryType"
                                id="general"
                                value="general"
                                checked={formData.queryType === 'general'}
                                onChange={handleChange}
                            />
                            <label htmlFor="general">
                                General Enquiry </label>
                        </div>
                        <div className={`option ${formData.queryType === 'support' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="queryType"
                                id="support"
                                value="support"
                                checked={formData.queryType === 'support'}
                                onChange={handleChange}
                            />
                            <label htmlFor="support">Support Request</label>
                        </div>

                    </div>
                    {errors.queryType &&
                        <Error message={errors.queryType} id="email-error" className="error-text" />
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        aria-invalid={!!errors.message}
                    />
                    {errors.message &&
                        <Error message={errors.message} id="message-error" className="error-text" />
                    }
                </div>

                <div className="form-group">
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            name="consent"
                            id="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                        />

                        <label htmlFor="consent"> I consent to being contacted by the team *</label>
                    </div>

                    {errors.consent &&
                        <Error message={errors.consent} id="message-error" className="error-text" />
                    }
                </div>


                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Project21