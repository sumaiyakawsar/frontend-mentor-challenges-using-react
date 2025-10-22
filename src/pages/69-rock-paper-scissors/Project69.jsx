import { useEffect, useState } from 'react';
import './style/project69.scss';

import { MdRestartAlt } from "react-icons/md";
import { MdClose } from "react-icons/md";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import bgPentagon from "./images/bg-pentagon.svg";

import logo from "./images/logo-bonus.svg"
import rules from "./images/image-rules-bonus.svg"
import { choices } from "./data/data";


const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

export default function project69() {
    useFavicon("icons/project69.png");
    useDocumentTitle("RPSLS | Frontend Mentor");

    const [step, setStep] = useState(1);
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");
    const [showRules, setShowRules] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    const [score, setScore] = useState(() => {
        const s = localStorage.getItem("rpsls_score");
        return s !== null ? parseInt(s, 10) : 0;
    });

    // Save score to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("rpsls_score", score);
        if (score >= 3) {
            setGameWon(true);
        }
    }, [score]);

    const handleUserChoice = (choice) => {
        setUserChoice(choice);
        setStep(2);

        // Simulate computer picking after a delay
        setTimeout(() => {
            const computer = getRandomChoice();
            setComputerChoice(computer);
            setStep(3);

            // Determine winner after showing computer pick
            setTimeout(() => {
                determineWinner(choice.name, computer.name);
                setStep(4);
            }, 1000);
        }, 1000);
    };
    const determineWinner = (user, computer) => {
        if (user === computer) return setResult("Draw!");
        const win =
            (user === "scissors" && (computer === "paper" || computer === "lizard")) ||
            (user === "paper" && (computer === "rock" || computer === "spock")) ||
            (user === "rock" && (computer === "lizard" || computer === "scissors")) ||
            (user === "lizard" && (computer === "spock" || computer === "paper")) ||
            (user === "spock" && (computer === "scissors" || computer === "rock"));

        if (win) {
            setResult("You Win");
            setScore((s) => s + 1);
        } else {
            setResult("You Lose");
        }
    };

    const resetGame = () => {
        setStep(1);
        setUserChoice("");
        setComputerChoice("");
        setResult("");
    };

    const handleFullReset = () => {
        setScore(0);
        setGameWon(false);
        resetGame();
    };
    return (
        <section className='project-69'>
            <div className="container">
                <header className="game-header">
                    <img src={logo} alt="logo" />

                    <div className="score-box">
                        <span>Score</span>
                        <h1>{score}</h1>

                        <MdRestartAlt role='button' title='Reset Score' className="reset-score" onClick={() => setScore(0)} />


                    </div>
                </header>

                {/* Step 1: User selection */}
                <div className="game">
                    {step === 1 && (
                        <div className="pentagon-container">
                            <img src={bgPentagon} alt="pentagon background" className="pentagon-bg" />
                            {choices.map((c) => (
                                <button
                                    key={c.name}
                                    type='button'
                                    className={`choice ${c.color}`}
                                    onClick={() => handleUserChoice(c)}
                                >
                                    <img src={c.img} alt={c.name} />
                                </button>
                            ))}
                        </div>
                    )}
                    {/* Step 2 & 3: Show user & computer picks */}

                    {step > 1 && (

                        <div className="battle">
                            <div className={`pick user ${result === "You Win" ? "winner" : ""}`}>
                                {userChoice && (
                                    <div className={`choice ${userChoice.color}`}>
                                        <img src={userChoice.img} alt={userChoice.name} />
                                    </div>
                                )}
                                <h3>You Picked</h3>
                            </div>

                            {step === 4 && (
                                <div className="result-box">
                                    <h2>{result}</h2>
                                    <button className="btn play-again" type='button' onClick={resetGame}>
                                        Play Again
                                    </button>
                                </div>
                            )}

                            <div className={`pick computer ${result === "You Lose" ? "winner" : ""}`}>

                                {computerChoice ? (
                                    <div className={`choice ${computerChoice.color}`}>
                                        <img src={computerChoice.img} alt={computerChoice.name} />
                                    </div>
                                ) : (
                                    <div className="loading-circle"></div>
                                )}
                                <h3>The House Picked</h3>
                            </div>
                        </div>

                    )}
                </div>
            </div>

            {/* Rules Button */}
            <button className="btn rules-btn" type='button' onClick={() => setShowRules(!showRules)}>
                Rules
            </button>

            {/* Rules Popup */}
            {showRules && (
                <div className="rules-popup">
                    <div className="rules-content">
                        <div className="rules-header">
                            <h3>Rules</h3>
                            <button onClick={() => setShowRules(false)} type='button' className="close-desktop">
                                <MdClose />
                            </button>
                        </div>
                        <img src={rules} alt="rules" />

                        <button onClick={() => setShowRules(false)} type='button' className="close-mobile">
                            <MdClose />
                        </button>
                    </div>
                </div>
            )}

            {/* 🎉 Win Animation */}
            {gameWon && (
                <div className="win-overlay">
                    <div className="confetti"></div>
                    <h1 className="win-text">🎉 Congratulations! You Won the Game! 🎉</h1>
                    <button className="btn reset-btn" type='button' onClick={handleFullReset}>
                        Reset Game
                    </button>
                </div>
            )}
        </section >
    )
}
