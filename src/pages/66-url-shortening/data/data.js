import iconBrand from "../images/icon-brand-recognition.svg";
import iconRecords from "../images/icon-detailed-records.svg";
import iconCustomizable from "../images/icon-fully-customizable.svg";

import { FaPinterest, FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";

export const MenuTitles = [
    { title: "Features", src: "#/project66" },
    { title: "Pricing", src: "#/project66" },
    { title: "Resources", src: "#/project66" },
]; 

export const footerLinks = [
    {
        title: "Features",
        links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
        title: "Resources",
        links: ["Blog", "Developers", "Support"],
    },
    {
        title: "Company",
        links: ["About", "Our Team", "Careers", "Contact"],
    },
];

export const advantages = [
    {
        id: 1,
        img: iconBrand,
        title: "Brand Recognition",
        description: "Boost your brand recognition with each click. Generic links don’t mean a thing.Branded links help instil confidence in your content.",
    },
    {
        id: 2,
        img: iconRecords,
        title: "Detailed Records",
        description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
        id: 3,
        img: iconCustomizable,
        title: "Fully Customizable",
        description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
]

export const socials = [
    {
        icon: FaFacebookSquare,
        href: "https://www.facebook.com/Sumaiya.Kawsar/",
        label: "facebook"
    },

    {
        icon: FaTwitter,
        href: "https://www.pinterest.com/sumaiyakawsar693/",
        label: "twitter"
    },
    {
        icon: FaPinterest,
        href: "https://www.pinterest.com/sumaiyakawsar693/",
        label: "pinterest"
    },
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/devsume/",
        label: "instagram"
    },
];


