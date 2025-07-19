import avtrMark from "../images/avatar-mark-webber.webp";
import avtrAngela from "../images/avatar-angela-gray.webp";
import avtrJacob from "../images/avatar-jacob-thompson.webp";
import avtrRizky from "../images/avatar-rizky-hasanuddin.webp";
import avtrKimberly from "../images/avatar-kimberly-smith.webp";
import avtrNathan from "../images/avatar-nathan-peterson.webp";
import avtrAnna from "../images/avatar-anna-kim.webp";

import imgChess from "../images/image-chess.webp";


export const initialNotifications = [
    {
        id: 1,
        name: "Mark Webber",
        action: "reacted to your recent post",
        target: "My first tournament today!",
        time: "1m ago",
        isRead: false,
        avatar: avtrMark,
    },
    {
        id: 2,
        name: "Angela Gray",
        action: "followed you",
        time: "5m ago",
        isRead: false,
        avatar: avtrAngela,
    },
    {
        id: 3,
        name: "Jacob Thompson",
        action: "has joined your group",
        target: "Chess Club",
        time: "1 day ago",
        isRead: false,
        avatar: avtrJacob,
    },
    {
        id: 4,
        name: "Rizky Hasanuddin",
        action: "sent you a private message",
        time: "5 days ago",
        message: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
        isRead: true,
        avatar: avtrRizky,
    },
    {
        id: 5,
        name: "Kimberly Smith",
        action: "commented on your picture",
        time: "1 week ago",
        image: imgChess,
        isRead: true,
        avatar: avtrKimberly,
    },
    {
        id: 6,
        name: "Nathan Peterson",
        action: "reacted to your recent post",
        target: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        isRead: true,
        avatar: avtrNathan,
    },
    {
        id: 7,
        name: "Anna Kim",
        action: "left the group",
        target: "Chess Club",
        time: "2 weeks ago",
        isRead: true,
        avatar: avtrAnna,
    }
];
