
import jsavatarwebp from "../images/avatars/image-juliusomo.webp"
import aravatarwebp from "../images/avatars/image-amyrobson.webp"
import mbavatarwebp from "../images/avatars/image-maxblagun.webp"
import rmavatarwebp from "../images/avatars/image-ramsesmiron.webp"
import meavatar from "../images/avatars/image-me.webp"
export const status = [
    {
        "currentUser": {
            "image": meavatar,
            "username": "sumaiya"
        },
        "comments": [
            {
                "id": 1,
                "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
                "createdAt": "2025-05-11T12:00:00.000Z", // 1 month ago
                "score": 12,
                "user": {
                    "image": aravatarwebp,
                    "username": "amyrobson"
                },
                "replies": []
            },
            {
                "id": 2,
                "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
                "createdAt": "2025-05-28T15:30:00.000Z", // 2 weeks ago
                "score": 5,
                "user": {
                    "image": mbavatarwebp,
                    "username": "maxblagun"
                },
                "replies": [
                    {
                        "id": 3,
                        "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                        "createdAt": "2025-06-04T10:00:00.000Z", // 1 week ago
                        "score": 4,
                        "replyingTo": "maxblagun",
                        "user": {
                            "image": rmavatarwebp,
                            "username": "ramsesmiron"
                        }
                    },
                    {
                        "id": 4,
                        "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                        "createdAt": "2025-06-09T18:45:00.000Z", // 2 days ago
                        "score": 2,
                        "replyingTo": "ramsesmiron",
                        "user": {
                            "image": jsavatarwebp,
                            "username": "juliusomo"
                        }
                    },
                    {
                        "id": 5,
                        "content": "Absolutely agree with both of you. It’s easy to feel the pressure to catch up with all the new tools, but having a solid grasp of HTML, CSS, and JavaScript really pays off in the long run. React becomes way more intuitive once you’ve built that foundation — and you’ll avoid a lot of confusion down the line. Take your time with the basics; everything else builds on top of that.",
                        "createdAt": "2025-06-12T18:45:00.000Z", // 18 hours ago
                        "score": 5,
                        "replyingTo": "juliusomo",
                        "user": {
                            "image": meavatar,
                            "username": "sumaiya"
                        }
                    }
                ]
            }
        ]
    }
]
