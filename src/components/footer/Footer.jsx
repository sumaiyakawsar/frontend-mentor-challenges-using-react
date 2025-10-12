
import { Link, useLocation } from 'react-router-dom';
import '../../styles/component.scss'
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const { pathname } = useLocation();


  const lastSegment = pathname.split('/').filter(Boolean).pop();
  console.log(lastSegment);
  const socials = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/Sumaiya.Kawsar/", label: "facebook" },
    { icon: <FaPinterestP />, href: "https://www.pinterest.com/sumaiyakawsar693/", label: "pinterest" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/devsume/", label: "instagram" },
  ];

  const footerClassMap = {
    "": "footer-main", // Home route "/"
    "project1": "footer-1",
    "project2": "footer-2",
    "project3": "footer-3",
    "project9": "footer-9",
    "project10": "footer-10",
    "project11": "footer-11",
    "project12": "footer-12",
    "project13": "footer-13",
    "project14": "footer-14",
    "project15": "footer-15",
    "project16": "footer-16",
    "project17": "footer-17",
    "project18": "footer-18",
    "project19": "footer-19",
    "project20": "footer-20",
    "project21": "footer-21",
    "project22": "footer-22",
    "project23": "footer-23",
    "project24": "footer-24",
    "project25": "footer-25",
    "project26": "footer-26",
    "project27": "footer-27",
    "project28": "footer-28",
    "project29": "footer-29",
    "project30": "footer-30",
    "project31": "footer-31",
    "project32": "footer-32",
    "project33": "footer-33",
    "project34": "footer-34",
    "project35": "footer-35",
    "project37": "footer-37",
    "project38": "footer-38",
    "project39": "footer-39",
    "project40": "footer-40",
    "project41": "footer-41",
    "project42": "footer-42",
    "project43": "footer-43",
    "project44": "footer-44",
    "project45": "footer-45",
    "project46": "footer-46",
    "project47": "footer-47",
    "project48": "footer-48",
    "project49": "footer-49",
    "project50": "footer-50",
    "project51": "footer-51",
    "project52": "footer-52",
    "project53": "footer-53",
    "project54": "footer-54",
    "project55": "footer-55",
    "project56": "footer-56",
    "project58": "footer-58",
    "project59": "footer-59",
    "project60": "footer-60",
    "project61": "footer-61",
    "project63": "footer-63",

  };

  const fgClass = footerClassMap[lastSegment ?? ""] || "footer-default";



  return (
    <footer id='footer' className={`footer ${fgClass}`}>
      <div className="socials">
        {socials.map(({ icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social__icon" aria-label={label}>
            {icon}
          </a>
        ))}
      </div>

      {
        fgClass === "footer-35" ?
          <p>&copy; Copyright Ping. All rights reserved.</p>
          : ""
      }

      <div className="attribution">Challenge by
        <Link to="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</Link>.
        Coded by
        <Link to="https://github.com/sumaiyakawsar"> Sumaiya Kawsar</Link>.
      </div>


    </footer>
  );
}

export default Footer