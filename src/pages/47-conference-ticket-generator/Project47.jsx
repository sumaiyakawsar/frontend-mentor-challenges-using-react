import { useState, useEffect, useRef } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project47.scss';
import Error from "../../components/Error";
import { CiCircleInfo } from "react-icons/ci";

import image from "./images/icon-upload.svg"

import logoFull from "./images/logo-full.svg"
import ticket from "./images/pattern-ticket.svg"
import logoMark from "./images/logo-mark.svg"
import github from "./images/icon-github.svg"
import MultiLineTypewriter from "../../components/utility/MultiLineTypewriter";

const Project47 = () => {
  useFavicon("icons/project21.png");
  useDocumentTitle("Conference ticket generator | Frontend Mentor");
  const fileInputRef = useRef(null);


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    github: '',
    avatar: null,
  });


  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validateField = (name, value) => {
    let error = '';

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address';
      }
    }

    if ((name === 'fullName' || name === 'github') && value.trim() === '') {
      error = 'This field is required';
    }

    if (name === 'avatar') {
      if (!value) {
        error = 'Please upload an image';
      } else {
        const allowedTypes = ['image/png', 'image/jpeg'];
        if (!allowedTypes.includes(value.type)) {
          error = 'Only PNG and JPG images are allowed';
        } else if (value.size > 5 * 1024 * 1024) {//512000 for 5kb
          error = 'File too large. Please upload a photo under 5MB';
        }
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateAll = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'This field is required';
    if (!formData.github.trim()) newErrors.github = 'This field is required';

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';

    if (!formData.avatar) {
      newErrors.avatar = 'Please upload an image';
    } else {
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!allowedTypes.includes(formData.avatar.type)) {
        newErrors.avatar = 'Only PNG and JPG images are allowed';
      } else if (formData.avatar.size > 5 * 1024 * 1024) {
        newErrors.avatar = 'File too large. Please upload a photo under 5MB';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    let fieldValue;

    if (type === 'file') {
      fieldValue = files[0];
    } else {
      fieldValue = value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    validateField(name, fieldValue);
  };

  const handleAvatarDrop = (file) => {
    if (!file) return;

    const allowedTypes = ['image/png', 'image/jpeg'];
    let error = '';

    if (!allowedTypes.includes(file.type)) {
      error = 'Only PNG and JPG images are allowed';
    } else if (file.size > 512000) {
      error = 'File size must be less than 500KB';
    }

    if (error) {
      setErrors((prev) => ({
        ...prev,
        avatar: error,
      }));
      setFormData((prev) => ({
        ...prev,
        avatar: null,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        avatar: '',
      }));
      setFormData((prev) => ({
        ...prev,
        avatar: file,
      }));
    }
  };

  const handleAvatarRemove = () => {
    setFormData((prev) => ({
      ...prev,
      avatar: null,
    }));

    setErrors((prev) => ({
      ...prev,
      avatar: '',
    }));


    // ✅ Reset input value
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setSubmittedData({
        ...formData,
        avatar: formData.avatar ? URL.createObjectURL(formData.avatar) : null,
      });
      setSubmitted(true);

      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        github: '',
        avatar: null,
      });

    }
  };



  return (
    <div className='project-47'>
      <div className="container">

        <img src={logoFull} alt="logo" className="logo" />

        {!submitted ? (
          <div className="welcome__form">

            <MultiLineTypewriter text="Your Journey to Coding Conf 2025 Starts Here!" />

            <p>
              Secure your spot at next year's biggest coding conference.
            </p>

            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="avatarUpload">Upload Avatar</label>

                <div
                  className="upload-box" tabIndex={0}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files[0];
                    handleAvatarDrop(file);
                  }}
                  onClick={() => document.getElementById('avatarUpload').click()}
                >

                  {!formData.avatar ? (
                    <div className="placeholder-wrapper">
                      <div className="placeholder-icon">
                        <img
                          src={image} // 📷 Replace with your placeholder icon path
                          alt="Upload Icon"
                          className="icon"
                        />

                      </div>
                      <p>
                        Drag and drop or click to upload

                      </p>
                    </div>

                  ) : (
                    <div className="preview-wrapper">
                      <img
                        src={URL.createObjectURL(formData.avatar)}
                        alt="Avatar Preview"
                        className="avatar-preview"
                      />
                      <div className="action-buttons">
                        <button type="button" onClick={(e) => {
                          e.stopPropagation(); // ✅ Prevents file dialog from opening
                          handleAvatarRemove();
                        }}>
                          Remove image
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation(); // ✅ Prevents file dialog from opening
                            document.getElementById('avatarUpload').click();
                          }}
                        >
                          Change image
                        </button>

                      </div>
                    </div>
                  )}
                </div>

                <input
                  type="file"
                  id="avatarUpload"
                  name="avatar"
                  accept=".png, .jpg, .jpeg"
                  className="input"
                  style={{ display: 'none' }}
                  onChange={handleChange}
                  aria-describedby={errors.avatar ? "avatar-error" : "avatar-hint"}
                  ref={fileInputRef}
                />

                <div className={`info-box ${errors.avatar ? "error" : ""}`}>
                  {errors.avatar ? (
                    <Error
                      message={errors.avatar}
                      id="avatar-error"
                      className="error-text"
                      icon={CiCircleInfo}
                    />
                  ) : (
                    <div className="info">
                      <CiCircleInfo className="icon" />
                      <span id="avatar-hint"> Upload your photo (JPG or PNG, max size: 5MB).</span>
                    </div>
                  )}
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder=""
                  className={`input ${errors.fullName ? 'error' : ''}`}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  aria-invalid={!!errors.fullName}
                />

                <div className={`info-box ${errors.fullName ? "error" : ""}`}>
                  {errors.fullName &&
                    <Error
                      message={errors.fullName}
                      id="fullName-error"
                      className="error-text"
                      icon={CiCircleInfo} />
                  }
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input ${errors.email ? 'error' : ''}`}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />

                <div className={`info-box ${errors.email ? "error" : ""}`}>
                  {errors.email &&
                    <Error
                      message={errors.email}
                      id="email-error"
                      className="error-text"
                      icon={CiCircleInfo}
                    />
                  }
                </div>


              </div>

              <div className="form-group">
                <label htmlFor="github"> GitHub Username</label>
                <input
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="@yourusername"
                  className={`input ${errors.github ? 'error' : ''}`}
                  aria-describedby={errors.github ? "github-error" : undefined}
                  aria-invalid={!!errors.github}
                />



                <div className={`info-box ${errors.github ? "error" : ""}`}>
                  {errors.github &&
                    <Error
                      message={errors.github}
                      id="github-error"
                      className="error-text"
                      icon={CiCircleInfo}
                    />
                  }
                </div>
              </div>
              <button type="submit"
                className="btnSubmit"
              >
                Generate My Ticket
              </button>
            </form>
          </div>
        ) : (
          <div className="confirmation">

            <h2>Congrats, <span>{submittedData.fullName}</span>
              ! <br /> Your ticket is ready.</h2>
            <p>We've emailed your ticket to <span>{submittedData.email}</span> and will send updates in the run up to the event.</p>

            <div className="ticket">
              <img src={ticket} alt="" className="bg" />

              <div className="contents">
                <div className="conference">
                  <img src={logoMark} alt="" className="conference__img" />
                  <div className="conference__details">
                    <h3> Coding Conf </h3>
                    <span className="datelocation"> Jan 31, 2025 / Austin, TX</span>
                  </div>
                </div>

                <div className="user">
                  {submittedData.avatar && (
                    <img src={submittedData.avatar} alt={submittedData.fullName} className="user__img" />
                  )}
                  <div className="user__details">
                    <h3>{submittedData.fullName}</h3>

                    <div className="github__handle">
                      <img src={github} alt="" />
                      <p>{submittedData.github.startsWith('@') ? submittedData.github : `@${submittedData.github}`}</p>
                    </div>
                  </div>


                </div>

              </div>
              <div className="ticket__number">
                #01609
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Project47