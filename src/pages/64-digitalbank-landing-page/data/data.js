import onlineImg from "../images/icon-online.svg";
import budgetingImg from "../images/icon-budgeting.svg";
import onboardingImg from "../images/icon-onboarding.svg";
import apiImg from "../images/icon-api.svg";

import currencyImg from "../images/image-currency.jpg";
import restaurantImg from "../images/image-restaurant.jpg";
import planeImg from "../images/image-plane.jpg";
import confettiImg from "../images/image-confetti.jpg";

import { FaPinterest, FaInstagram, FaTwitter, FaYoutube, FaFacebookSquare } from "react-icons/fa";

export const features = [
    {
        id: 1,
        title: "Online Banking",
        summary: " Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        img: onlineImg,
    },
    {
        id: 2,
        title: "Simple Budgeting",
        summary: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        img: budgetingImg,
    },
    {
        id: 3,
        title: "Fast Onboarding",
        summary: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        img: onboardingImg,
    },
    {
        id: 4,
        title: "Open API",
        summary: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        img: apiImg,
    }
];
export const MenuTitles = [
    { title: "Home", src: "#/project64" },
    { title: "About", src: "#/project64" },
    { title: "Contact", src: "#/project64" },
    { title: "Blog", src: "#/project64" },
    { title: "Careers", src: "#/project64" },
];
export const FooterTitles = [
    { title: "About Us", src: "#/project64" },
    { title: "Careers", src: "#/project64" },
    { title: "Contact", src: "#/project64" },
    { title: "Support", src: "#/project64" },
    { title: "Blog", src: "#/project64" },
    { title: "Privacy Policy", src: "#/project64" },
];
export const articles = [
    {
        id: 1,
        img: currencyImg,
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
        id: 2,
        img: restaurantImg,
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you …",
    },
    {
        id: 3,
        img: planeImg,
        author: "Wilson Hutton",
        title: "Take your Digitalbank card wherever you go",
        description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad.We’ll even show you …",
    },
    {
        id: 4,
        img: confettiImg,
        author: "Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
]

export const socials = [
    {
        icon: FaFacebookSquare,
        href: "https://www.facebook.com/Sumaiya.Kawsar/",
        label: "facebook"
    },
    {
        icon: FaYoutube,
        href: "https://www.pinterest.com/sumaiyakawsar693/",
        label: "youtube"
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


