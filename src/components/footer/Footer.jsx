import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../../styles/component.scss'
import { FaSquareFacebook, FaPinterest, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const { pathname } = useLocation();


  let fgClass = "footer-default";
  if (pathname === "/frontend-mentor-challenges-using-react") fgClass = "footer-main";
  else if (pathname === "/frontend-mentor-challenges-using-react/project1") fgClass = "footer-1";
  else if (pathname === "/frontend-mentor-challenges-using-react/project2") fgClass = "footer-2";
  else if (pathname === "/frontend-mentor-challenges-using-react/project3") fgClass = "footer-3";
  else if (pathname === "/frontend-mentor-challenges-using-react/project9") fgClass = "footer-9";
  else if (pathname === "/frontend-mentor-challenges-using-react/project10") fgClass = "footer-10";
  else if (pathname === "/frontend-mentor-challenges-using-react/project11") fgClass = "footer-11";
  else if (pathname === "/frontend-mentor-challenges-using-react/project12") fgClass = "footer-12";
  else if (pathname === "/frontend-mentor-challenges-using-react/project13") fgClass = "footer-13";
  else if (pathname === "/frontend-mentor-challenges-using-react/project14") fgClass = "footer-14";
  else if (pathname === "/frontend-mentor-challenges-using-react/project15") fgClass = "footer-15";
  else if (pathname === "/frontend-mentor-challenges-using-react/project16") fgClass = "footer-16";


  return (
    <footer id='footer' className={`footer ${fgClass}`}>
      <div class="socials">
        <a
          href="https://www.facebook.com/Sumaiya.Kawsar/"
          target="_blank"
          rel="noopener noreferrer"
          class="social__icon "
          aria-label="facebook"
        ><FaSquareFacebook />

        </a>
        <a
          href="https://www.pinterest.com/sumaiyakawsar693/"
          target="_blank"
          class="social__icon  "
          aria-label="pinterest"
          rel="noopener noreferrer"
        ><FaPinterest />

        </a>
        <a
          href="https://www.instagram.com/sumaiyakawsar_/"
          target="_blank"
          class="social__icon "
          aria-label="instagram"
          rel="noopener noreferrer"
        ><FaInstagram />

        </a>
      </div>
      <div class="attribution">Challenge by
        <Link to="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor</Link>. Coded by <Link
          to="https://github.com/sumaiyakawsar"> Sumaiya Kawsar</Link>.

      </div>

    </footer>
  );
}

export default Footer