import Error from "../../../components/Error";

const Step1 = ({ formData, handleChange, errors, setErrors }) => {

    const handleFieldChange = (e) => {
        const { name, value } = e.target;

        handleChange(e);

        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };

            if (name === "name" && value.trim()) {
                delete newErrors.name;
            }

            if (name === "email") {
                if (!value.trim()) {
                    newErrors.email = "This field is required";
                }
                else if (!/\S+@\S+\.\S+/.test(value)) {
                    newErrors.email = "Enter a valid email";
                }
                else {
                    delete newErrors.email;
                }
            }

            if (name === "phone" && value.trim()) {
                delete newErrors.phone;
            }

            return newErrors;
        });
    };

    return (
        <div className="step step1">
            <div className="intro">
                <h1>Personal Info</h1>
                <p className="description">Please provide your name, email address, and phone number.</p>

            </div>

            <div className="form-items">
                <div className={`field ${errors.name ? "error" : ""}`}>
                    <div className="label">
                        <label htmlFor="name">Name</label>
                        {errors.name &&
                            <Error message={errors.name} className="error-msg" id="error-msg" />
                        }
                    </div>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Stephen King"
                        value={formData.name}
                        onChange={handleFieldChange}
                    />
                </div>

                <div className={`field ${errors.email ? "error" : ""}`}>
                    <div className="label">
                        <label htmlFor="email">Email Address</label>
                        {errors.email &&
                            <Error message={errors.email} className="error-msg" id="error-msg" />
                        }
                    </div>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={formData.email}
                        onChange={handleFieldChange}
                    />
                </div>


                <div className={`field ${errors.phone ? "error" : ""}`}>
                    <div className="label">
                        <label htmlFor="phone">Phone Number</label>
                        {errors.phone &&
                            <Error message={errors.phone} className="error-msg" id="error-msg" />
                        }
                    </div>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="e.g. +1 234 567 890"
                        value={formData.phone}
                        onChange={handleFieldChange}
                    />
                </div>
            </div>

        </div>
    );
};
export default Step1;
