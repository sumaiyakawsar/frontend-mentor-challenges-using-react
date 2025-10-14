import { MdClose, MdOutlineNavigateBefore, MdOutlineNavigateNext, MdSend } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import dog1 from "../images/dog-image-1.jpg";
import dog2 from "../images/dog-image-2.jpg";
import dog3 from "../images/dog-image-3.jpg";

import ChatHeader from "./ChatHeader";

export default function ChatScreen() {
    const initialMessages = [
        { id: 1, text: "That sounds great. I’d be happy with that.", type: "left" },
        { id: 2, text: "Could you send over some pictures of your dog, please?", type: "left" },
        { id: 3, images: [dog1, dog2, dog3], type: "right-images" },
        { id: 4, text: "Here are a few pictures. She’s a happy girl.", type: "right" },
        { id: 5, text: "Can you make it?", type: "right" },
        { id: 6, text: "She looks so happy! The time we discussed works. How long shall I take her out for?", type: "left" },
    ];

    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [overlayImages, setOverlayImages] = useState([]);
    const [overlayIndex, setOverlayIndex] = useState(0);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMsg = { id: Date.now(), text: input, type: "right" };
        setMessages([...messages, newMsg]);
        setInput("");

        // Simulate bot typing + response
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    text: "Got it! I’ll make sure everything’s ready for the walk 🐾",
                    type: "left",
                },
            ]);
        }, 2000);
    };



    const handleOptionSelect = (value) => {
        setSelectedOption(value);

        // Add user message
        const userMsg = {
            id: Date.now(),
            text: value === "30" ? "I’ll take the 30 minute walk." : "I’ll take the 1 hour walk.",
            type: "right",
        };
        setMessages((prev) => [...prev, userMsg]);

        // Simulate bot typing and response
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    text:
                        value === "30"
                            ? "Great! I’ve scheduled a 30-minute walk for your dog 🐾"
                            : "Perfect! A 1-hour walk it is — she’ll love the extra time outdoors 🌳",
                    type: "left",
                },
            ]);
        }, 2000);
    };

    useEffect(() => {
        // Scroll to bottom on new message
        const chatBody = document.querySelector(".chat-body-wrapper");
        if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
    }, [messages, isTyping]);

    const chatVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15 },
        }),
    };


    return (
        <div className="simple-booking__chat">
            <ChatHeader />

            <div className="chat-container">
                {/* Scrollable messages */}
                <div className="chat-body-wrapper">
                    <div className="chat-body">

                        {messages.map((msg, i) => {
                            if (msg.images) {
                                return (
                                    <motion.div
                                        key={msg.id}
                                        className="chat-images"
                                        custom={i}
                                        variants={chatVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >

                                        {msg.images.map((img, index) => (
                                            <img
                                                tabIndex={0}  // <-- make focusable
                                                key={index}
                                                src={img}
                                                alt="dog"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setOverlayImages(msg.images);
                                                    setOverlayIndex(index);
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") {
                                                        setOverlayImages(msg.images);
                                                        setOverlayIndex(index);
                                                    }
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                );
                            }

                            return (
                                <motion.div
                                    key={msg.id}
                                    className={`chat-message-wrapper chat-message-wrapper--${msg.type}`}
                                    custom={i}
                                    variants={chatVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <div className={`chat-message chat-message--${msg.type}`}>
                                        {msg.text}
                                    </div>

                                    {msg.id === 6 && (
                                        <div className="chat-options">
                                            <label
                                                tabIndex={0}  // <-- make focusable
                                                className={`chat-option ${selectedOption === "30" ? "selected" : ""
                                                    } ${selectedOption ? "disabled" : ""}`}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") handleOptionSelect("30"); // support keyboard
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="walkOption"
                                                    value="30"
                                                    checked={selectedOption === "30"}
                                                    onChange={() => handleOptionSelect("30")}
                                                    disabled={!!selectedOption}
                                                />
                                                <div className="circle">
                                                    {selectedOption === "30" && <span className="check"> </span>}
                                                </div>
                                                <div className="option">
                                                    <span>30 minute walk</span>
                                                    <strong>$29</strong>
                                                </div>


                                            </label>

                                            <label
                                                tabIndex={0}  // <-- make focusable
                                                className={`chat-option ${selectedOption === "60" ? "selected" : ""
                                                    } ${selectedOption ? "disabled" : ""}`}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") handleOptionSelect("60"); // support keyboard
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="walkOption"
                                                    value="60"
                                                    checked={selectedOption === "60"}
                                                    onChange={() => handleOptionSelect("60")}
                                                    disabled={!!selectedOption}
                                                />
                                                <div className="circle">
                                                    {selectedOption === "60" && <span className="check"> </span>}
                                                </div>
                                                <div className="option">
                                                    <span>1 hour walk</span>
                                                    <strong>$49</strong>
                                                </div>

                                            </label>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}

                        <AnimatePresence>
                            {isTyping && (
                                <motion.div
                                    className="chat-message chat-message--left typing-bubble"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="typing-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Input fixed at bottom */}
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <button onClick={handleSend}>
                        <MdSend />
                    </button>
                </div>
            </div>
            {overlayImages.length > 0 && (
                <motion.div
                    className="chat-image-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOverlayImages([])} // close overlay on background click
                >
                    <motion.img
                        src={overlayImages[overlayIndex]}
                        alt="dog enlarged"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        onClick={(e) => e.stopPropagation()} // don't close when clicking the image
                    />

                    {/* Navigation buttons */}
                    {overlayImages.length > 1 && (
                        <>
                            <button
                                className="prev-image"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOverlayIndex((prev) => (prev - 1 + overlayImages.length) % overlayImages.length);
                                }}
                            ><MdOutlineNavigateBefore /></button>
                            <button
                                className="next-image"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOverlayIndex((prev) => (prev + 1) % overlayImages.length);
                                }}
                            ><MdOutlineNavigateNext /></button>
                        </>
                    )}

                    <button
                        className="close-overlay"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOverlayImages([]);
                        }}
                    ><MdClose /></button>
                </motion.div>
            )}
        </div>
    );

}
