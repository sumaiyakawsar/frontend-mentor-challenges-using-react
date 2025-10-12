import logo from '../images/logoFooter.svg'
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { socials } from '../data/data';

function Footer({ menuTitles }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault();

        // Empty check
        if (!email.trim()) {
            setError("Please enter your email address.");
            toast.error("Please enter your email address.");
            return;
        }

        // Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            toast.error("Please enter a valid email address.");
            return;
        }

        // Success
        setError("");
        toast.success("Success! You’re subscribed to updates 🎉");
        setEmail("");
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) setError(""); // Clear error on change
    };

    return (
        <footer className='footer-63'>
            <div className="container">

                <form className="newsletter" onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        className={error ? "error" : ""}
                        onChange={handleChange}
                        placeholder="Updates in your inbox…"
                        value={email}
                    />


                    <button type="submit" className="btn btn__primary">Go</button>

                </form>

                <nav className="nav-links">
                    {menuTitles.map((menu, index) => (
                        <div className="nav-item" key={index}>
                            <a className="menu-link" href={menu.src}>
                                {menu.title}
                            </a>

                        </div>
                    ))}
                </nav>

                <div className="social__links">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`socials-icon ${social.label}`}
                                aria-label={social.label}
                            >
                                <Icon className="icon" />
                            </a>
                        );
                    })}

                </div>

                <img src={logo} alt="logo" className="logo" />


                <p className="copyright">Copyright 2020. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer