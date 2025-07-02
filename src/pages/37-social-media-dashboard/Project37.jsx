import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import { useTheme } from '../../components/theme/ThemeContext';
import { formatNumber, formatWithCommas } from '../../components/utility/numberFormat';

import './style/project37.scss';
import {
    totalFollowers,
    socialAccounts,
    overviewToday
} from './data/data'

import iconUp from "./images/icon-up.svg"
import iconDown from "./images/icon-down.svg"


function Project37() {
    useFavicon("icons/project30.png");
    useDocumentTitle("Social Media Dashboard | Frontend Mentor");

    const { theme, toggleTheme } = useTheme();

    return (
        <div className='project-37' >


            <div className="container">
                <header className='header__content'>

                    <div className="title__summary">
                        <h1>  Social Media Dashboard  </h1>
                        <span> Total Followers: {formatWithCommas(totalFollowers)}</span>
                    </div>

                    <div className={`theme-toggle ${theme}`} >
                        <span>
                            Dark Mode
                        </span>

                        <label className="switch" role="switch" >
                            <input
                                type="checkbox"
                                checked={theme === "light"}
                                onChange={toggleTheme}
                                aria-label="Toggle extension"
                            />
                            <span className={`slider round ${theme}`}></span>
                        </label>
                    </div>
                </header>

                <section className="summary__cards">
                    {socialAccounts.map((social) => {
                        return (
                            <div key={social.platform}
                                className={`social__card ${social.platform.toLowerCase()} ${theme}`}>
                                <div className="handle">
                                    <img src={social.icon} alt="" />
                                    <p className="username">{social.username}</p>
                                </div>

                                <div className="count">
                                    <p className="followers">{formatNumber(social.followers)}</p>
                                    <span className="label">{social.metricLabel}</span>
                                </div>

                                <div className="change">
                                    <img
                                        src={social.isPositive ? iconUp : iconDown}
                                        alt={social.isPositive ? 'up' : 'down'}
                                        className="change-icon"
                                    />
                                    <span className={social.isPositive ? 'positive' : 'negative'}>
                                        {social.changeToday} Today
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </section>

                <section>
                    <h2>Overview - Today</h2>
                    <div className="today__overview">
                        {overviewToday.map((ot, idx) => {
                            return (
                                <div className={`stats__card ${theme}`} key={idx}>
                                    <div className="stat__header">
                                        <p className='stat__label'>{ot.label}</p>
                                        <div className="logo">
                                            <img src={ot.icon} alt={ot.platform} />
                                        </div>
                                    </div>

                                    <div className="stat__footer">
                                        <p className="stat__count">
                                            {formatNumber(ot.value)}
                                        </p>

                                        <div className="change">
                                            <img
                                                src={ot.isPositive ? iconUp : iconDown}
                                                alt={ot.isPositive ? 'up' : 'down'}
                                                className="change-icon"
                                            />
                                            <span className={ot.isPositive ? 'positive' : 'negative'}>
                                                {ot.changePercent}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Project37




