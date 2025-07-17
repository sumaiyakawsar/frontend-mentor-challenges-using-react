import { useState } from "react";

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import Error from "../../components/Error";
import './style/project42.scss'

import heroMobile from "./images/hero-mobile.jpg";
import heroDesktop from "./images/hero-desktop.jpg";
import logo from "./images/logo.svg";

import { MdOutlineNavigateNext, MdError } from "react-icons/md";

const Project42 = () => {
  useFavicon("icons/project42.png");
  useDocumentTitle("Base Apparel - coming soon | Frontend Mentor");

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValid = /^\S+@\S+\.\S+$/.test(email);
    setError(!isValid);
    if (isValid) {
      alert("Subscribed!");
      setEmail("");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  return (
    <div className='project-42'>
      <div className="container">
        <div className="left">
          <div className="header">
            <img src={logo} alt="logo" />
          </div>

          <img src={heroMobile} alt="Image" className="top-img" />
          <div className="content">
            <h1> <span>We're</span> coming soon</h1>
            <p>
              Hello fellow shoppers! We're currently building our new fashion store.
              Add your email below to stay up-to-date with announcements and our launch deals.
            </p>

            <form onSubmit={handleSubmit} className="newsletter__form" noValidate>
              <div className={`form-group ${error ? "error" : ""}`}>

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleChange}
                    aria-label="Email address"
                    required
                  />
                  {error && <MdError className="error-icon" />}
                </div>
                <button type="submit" className="btn">
                  <MdOutlineNavigateNext />
                </button>
              </div>


              {error &&
                <Error message="Please provide a valid email" className="error-message" id="error-message" />
              }


            </form>
          </div>

        </div>

        <div className="right">
          <img src={heroDesktop} alt="Fashion model" />
        </div>
      </div>
    </div>
  )
}

export default Project42