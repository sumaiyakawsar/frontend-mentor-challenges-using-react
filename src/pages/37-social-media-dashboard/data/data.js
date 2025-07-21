import iconFacebook from "../images/icon-facebook.svg"
import iconInstagram from "../images/icon-instagram.svg"
import iconTwitter from "../images/icon-twitter.svg"
import iconYoutube from "../images/icon-youtube.svg"

export const totalFollowers = 23004;

export const socialAccounts = [
    {
        platform: "Facebook",
        username: "@nathanf",
        icon: iconFacebook,
        followers: 1987,
        metricLabel: "FOLLOWERS",
        changeToday: 12,
        isPositive: true
    },
    {
        platform: "Twitter",
        username: "@nathanf",
        icon: iconTwitter,
        followers: 1044,
        metricLabel: "FOLLOWERS",
        changeToday: 99,
        isPositive: true
    },
    {
        platform: "Instagram",
        username: "@realnathanf",
        icon: iconInstagram ,
        followers: 11000,
        metricLabel: "FOLLOWERS",
        changeToday: 1099,
        isPositive: true
    },
    {
        platform: "YouTube",
        username: "Nathan F.",
        icon: iconYoutube,
        followers: 8239,
        metricLabel: "SUBSCRIBERS",
        changeToday: 144,
        isPositive: false
    }
];

export const overviewToday = [
    {
        label: "Page Views",
        value: 87,
        platform: "Facebook",
        icon: iconFacebook,
        changePercent: 3,
        isPositive: true
    },
    {
        label: "Likes",
        value: 52,
        platform: "Facebook",
        icon: iconFacebook,
        changePercent: 2,
        isPositive: false
    },
    {
        label: "Likes",
        value: 5462,
        platform: "Instagram",
        icon: iconInstagram,
        changePercent: 2257,
        isPositive: true
    },
    {
        label: "Profile Views",
        value: 52000,
        platform: "Instagram",
        icon: iconInstagram,
        changePercent: 1375,
        isPositive: true
    },
    {
        label: "Retweets",
        value: 117,
        platform: "Twitter",
        icon: iconTwitter,
        changePercent: 303,
        isPositive: true
    },
    {
        label: "Likes",
        value: 507,
        platform: "Twitter",
        icon: iconTwitter,
        changePercent: 553,
        isPositive: true
    },
    {
        label: "Likes",
        value: 107,
        platform: "YouTube",
        icon: iconYoutube,
        changePercent: 19,
        isPositive: false
    },
    {
        label: "Total Views",
        value: 1407,
        platform: "YouTube",
        icon: iconYoutube,
        changePercent: 12,
        isPositive: false
    }
]; 