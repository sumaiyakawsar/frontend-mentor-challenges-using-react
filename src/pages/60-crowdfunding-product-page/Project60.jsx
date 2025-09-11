import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project60.scss';
import { MenuTitles, rewards as initialRewards } from "./data/data";  
import Navbar from './component/Navbar';
import MobileMenu from './component/MobileMenu';
import { formatCurrency } from '../../components/utility/numberFormat'

import { IoIosBookmark } from "react-icons/io";
import ProgressBar from "../../components/ProgressBar";
import PledgeModal from "./component/PledgeModal";
import ConfirmationModal from "./component/ConfirmationModal";
import StatCard from "./component/StatCard";
import CraftCard from "./component/CraftCard";

import logoM from "./images/logo-mastercraft.svg";

function Project60() {
    useFavicon("icons/project60.svg");
    useDocumentTitle("Crowdfunding product page | Frontend Mentor");

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [showPledgeModal, setShowPledgeModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedReward, setSelectedReward] = useState(null);
    const [totalBacked, setTotalBacked] = useState(89914);  
    const [totalBackers, setTotalBackers] = useState(5007); 
    const [rewardList, setRewardList] = useState(initialRewards);  
    const [goalReached, setGoalReached] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const FUNDING_GOAL = 100000;
    const DAYS_LEFT = 56;

    const mainContentRef = useRef(null);

    useEffect(() => {
        if (totalBacked >= 100000 && !goalReached) {
            setGoalReached(true);
            setShowConfetti(true);

            // stop confetti after 10 seconds
            setTimeout(() => setShowConfetti(false), 10000);
        }
    }, [totalBacked, goalReached]);

    // Autofocus modal first interactive element
    useEffect(() => {
        if (showPledgeModal || showConfirmModal) {
            const firstEl = document.querySelector('.modal button, .modal input');
            firstEl?.focus();
        }
    }, [showPledgeModal, showConfirmModal]);

    const handleSelectReward = (rewardId) => {
        setSelectedReward(rewardId);
        setShowPledgeModal(true); // open pledge modal when a reward is selected
    };

    const handleConfirmPledge = (pledgeAmount) => {
        setTotalBacked(prev => prev + Number(pledgeAmount));
        setTotalBackers(prev => prev + 1);

        // ✅ decrease quantity for selected reward
        if (selectedReward !== null) decrementRewardQuantity(selectedReward);

        setShowPledgeModal(false);
        setShowConfirmModal(true);
    };

    const toggleBookmark = () => setBookmarked(prev => !prev);

    const decrementRewardQuantity = (id) => {
        setRewardList(prev => prev.map(r =>
            r.id === id && r.quantityLeft ? { ...r, quantityLeft: r.quantityLeft - 1 } : r
        ));
    };

    return (
        <div className='project-60'>
            <div className="project-content" ref={mainContentRef} aria-hidden={showPledgeModal || showConfirmModal}>

            <header className="header">
                <div className="container">
                    <Navbar
                        toggleMenu={() => setIsMenuOpen(prev => !prev)}
                        menuTitles={MenuTitles}
                        isMenuOpen={isMenuOpen}
                    />
                    {isMenuOpen &&
                        <MobileMenu
                            isOpen={isMenuOpen}
                            menuTitles={MenuTitles}
                        />}
                </div>
            </header>

            {/* Funding Section */}
            <div className="funding">
                <div className="funding-container">

                    {/* Intro Card */}
                    <div className="card intro">
                        <img src={logoM} alt="logo" className="logoM" />
                        <h1> Mastercraft Bamboo Monitor Riser </h1>
                        <p> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                        <div className="btn__container">
                            <button type="button" onClick={() => setShowPledgeModal(true)} className="btn btn__primary">Back this project</button>
                            <button type="button"
                                className={`btn btn__bookmark ${bookmarked ? "active" : ""}`}
                                onClick={toggleBookmark}
                            >
                                <span className="icon">
                                    <IoIosBookmark />
                                </span>
                                <span className="label">
                                    {bookmarked ? "Bookmarked" : "Bookmark"}

                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Stats & Progress */}
                    <div className="card">
                        <div className="progress-card">
                            <StatCard amount={formatCurrency(totalBacked)} label={`of ${formatCurrency(FUNDING_GOAL)} backed`} />
                            <StatCard amount={totalBackers.toLocaleString()} label="total backers" />
                            <StatCard amount={DAYS_LEFT} label="days left" />
                        </div>
                        <ProgressBar progress={(totalBacked / 100000) * 100} />

                        {showConfetti && <Confetti width={window.innerWidth}
                            height={window.innerHeight} />}
                        {goalReached && (
                            <div className="goal-message">
                                🎉 Thank you! We’ve reached our goal thanks to amazing backers like you! 💖
                            </div>
                        )}

                    </div>

                    {/* About Project & Rewards */}
                    <div className="card">
                        <h2> About this project</h2>

                        <p>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                        </p>
                        <p>
                            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                            to allow notepads, pens, and USB sticks to be stored under the stand.
                        </p>

                        {rewardList
                            .filter(r => r.pledge !== null)
                            .map(reward => (
                                <CraftCard key={reward.id} reward={reward} onSelect={handleSelectReward} formatCurrency={formatCurrency} />
                            ))}

                    </div>
                </div>

            </div>
            </div>
            {/* Modals */}
            {showPledgeModal && (
                <PledgeModal
                    rewards={rewardList}
                    selectedReward={selectedReward}
                    onClose={() => setShowPledgeModal(false)}
                    onConfirm={handleConfirmPledge}
                />
            )}

            {showConfirmModal && (
                <ConfirmationModal onClose={() => setShowConfirmModal(false)} />
            )}
        </div>
    )
}

export default Project60