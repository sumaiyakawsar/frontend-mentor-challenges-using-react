
import profile1 from "../images/image-emily.jpg"
import profile2 from "../images/image-jennie.jpg"
import profile3 from "../images/image-thomas.jpg"


import imgDesktopGraphic from "../images/desktop/image-graphic-design.jpg"
import imgDesktopPhotography from "../images/desktop/image-photography.jpg"
import imgDesktopTransform from "../images/desktop/image-transform.jpg"
import imgDesktopStand from "../images/desktop/image-stand-out.jpg"

import imgMobileGraphic from "../images/mobile/image-graphic-design.jpg"
import imgMobilePhotography from "../images/mobile/image-photography.jpg"
import imgMobileTransform from "../images/mobile/image-transform.jpg"
import imgMobileStand from "../images/mobile/image-stand-out.jpg"

import imgDesktopMilkbottles from "../images/desktop/image-gallery-milkbottles.jpg"
import imgDesktopOrange from "../images/desktop/image-gallery-orange.jpg"
import imgDesktopCone from "../images/desktop/image-gallery-cone.jpg"
import imgDesktopSugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg"

import imgMobileMilkbottles from "../images/mobile/image-gallery-milkbottles.jpg"
import imgMobileOrange from "../images/mobile/image-gallery-orange.jpg"
import imgMobileCone from "../images/mobile/image-gallery-cone.jpg"
import imgMobileSugarcubes from "../images/mobile/image-gallery-sugarcubes.jpg"



export const MenuTitles = [
    { title: "About", href: "#/project50" },
    { title: "Services", href: "#/project50" },
    { title: "Projects", href: "#/project50" }
];

export const servicesData = [
    {
        id: "transform",
        title: "Transform your brand",
        description: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        imageDesktop: imgDesktopTransform,
        imageMobile: imgMobileTransform,
        color: "yellow",
        reverse: true,
    },
    {
        id: "stand-out",
        title: "Stand out to the right audience",
        description: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
        imageDesktop: imgDesktopStand,
        imageMobile: imgMobileStand,
        color: "red",
        reverse: false,
    },
];

export const specialtiesData = [
    {
        id: "graphic-design",
        title: "Graphic Design",
        description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
        imageDesktop: imgDesktopGraphic,
        imageMobile: imgMobileGraphic,
        className: "graphic",
    },
    {
        id: "photography",
        title: "Photography",
        description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
        imageDesktop: imgDesktopPhotography,
        imageMobile: imgMobilePhotography,
        className: "photography",
    },
]

export const testimonials = [
    {
        comment: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        owner: "Emily R.",
        position: "Marketing Director",
        ownerimg: profile1,

    },
    {
        comment: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        owner: "Thomas S.",
        position: "Chief Operating Officer",
        ownerimg: profile3,

    },
    {
        comment: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        owner: "Jennie F.",
        position: "Business Owner",
        ownerimg: profile2,

    }
];


export const imageGallery = [
    {
        id: "milkbottles",
        alt: "Milkbottles on a table",
        imageDesktop: imgDesktopMilkbottles,
        imageMobile: imgMobileMilkbottles,
    },
    {
        id: "orange",
        alt: "Sliced orange",
        imageDesktop: imgDesktopOrange,
        imageMobile: imgMobileOrange,
    },
    {
        id: "cone",
        alt: "Ice cream cone",
        imageDesktop: imgDesktopCone,
        imageMobile: imgMobileCone,
    },
    {
        id: "sugarcubes",
        alt: "Stacked sugarcubes",
        imageDesktop: imgDesktopSugarcubes,
        imageMobile: imgMobileSugarcubes,
    },
];


