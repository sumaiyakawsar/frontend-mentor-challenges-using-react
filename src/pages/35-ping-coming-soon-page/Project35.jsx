import { useState } from "react";
import {   toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import Error from "../../components/Error";
import './style/project35.scss';

import illustration from "./images/illustration-dashboard.png"
import logo from "./images/logo.svg"


const Project35 = () => {
  useFavicon("icons/project19.png");
  useDocumentTitle("Ping coming soon page | Frontend Mentor");

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    if (!email) return "Whoops! It looks like you forgot to add your email";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return "Please provide a valid email address";
    return "";
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      setSubmitted(true);

      toast.success("You are on the list!");

      setEmail("");

 
      setTimeout(() => setSubmitted(false), 500); // for animation

    } 
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(""); // Clear error on change
  };

  return (
    <div className='project-35'>
      <div className="container">
        <img src={logo} alt="logo" />
        <div className="header">
          <h1>We are launching <span>soon!</span></h1>
          <p> Subscribe and get notified </p>

        </div>

        <form onSubmit={handleSubmit} noValidate className={`form ${submitted ? "submitted" : ""}`}>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Your email address"
              className={error ? "error" : ""}
            />
            {error &&
              <Error message={error} className="error-text" id="error-text" />
            }
          </div>


          <button type="submit" className="btn"> Notify Me </button>
        </form>
        <div className="image">
          <img src={illustration} alt="illustration" className="illustration" />
        </div>
      </div>



    </div >
  )
}

export default Project35