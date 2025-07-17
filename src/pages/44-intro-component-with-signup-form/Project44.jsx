import { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import MultiLineTypewriter from '../../components/utility/MultiLineTypewriter';
import './style/project44.scss';
import Error from "../../components/Error";
import SimpleToast from "../../components/SimpleToast";

import { MdError } from "react-icons/md";

const Project44 = () => {
  useFavicon("icons/project21.png");
  useDocumentTitle("Intro component with sign up form | Frontend Mentor");

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });


  const validateField = (name, value) => {
    let error = '';

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Looks like this is not an email';
      }
    }

    if ((name === 'firstName' || name === 'lastName' || name === 'password') && value.trim() === '') {
      error = name + 'cannot be empty';
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateAll = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name cannot be empty';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name cannot be empty';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Looks like this is not an email';
    if (!formData.password) newErrors.password = 'Password cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };






  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value); // Real-time validation
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
        password: '',
      });

      // Auto-hide after 4s
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  return (
    <div className='project-44'>

      <SimpleToast message="Claimed" show={showToast} />
      <div className="container">
        <div className="left">
          <MultiLineTypewriter
            text='Learn to code by watching others'
          />

          <p> See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable.</p>
        </div>


        <div className="right">
          <div className="subscription">
            <span>Try it free 7 days </span>
            then $20/mo. thereafter
          </div>
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <div className="input-group">
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'error' : ''}
                  placeholder="First Name"
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  aria-invalid={!!errors.firstName}
                />

                {errors.firstName && <MdError className="error-icon" />}

              </div>

              {errors.firstName &&
                <Error message={errors.firstName} id="firstName-error" className="error-text" />

              }
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                  className={errors.lastName ? 'error' : ''}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  aria-invalid={!!errors.lastName}
                />

                {errors.lastName && <MdError className="error-icon" />}

              </div>

              {errors.lastName &&
                <Error message={errors.lastName} id="lastName-error" className="error-text" />
              }
            </div>

            <div className="form-group">
              <div className="input-group">
                <input
                  id="email"
                  name="email"
                  type="email" placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />

                {errors.email && <MdError className="error-icon" />}

              </div>

              {errors.email &&
                <Error message={errors.email} id="email-error" className="error-text" />
              }
            </div>

            <div className="form-group">
              <div className="input-group">
                <input
                  id="password"
                  name="password"
                  type="password" placeholder="Password"
                  value={formData.password}
                  className={errors.password ? 'error' : ''}

                  onChange={handleChange}
                  aria-describedby={errors.password ? "password-error" : undefined}
                  aria-invalid={!!errors.password}
                />

                {errors.password && <MdError className="error-icon" />}

              </div>

              {errors.password &&
                <Error message={errors.password} id="password-error" className="error-text" />
              }
            </div>

            <button type="submit" className="btn"> Claim your free trial</button>
            <p className="disclaimer"> By clicking the button, you are agreeing to our <span>Terms and Services</span> </p>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Project44