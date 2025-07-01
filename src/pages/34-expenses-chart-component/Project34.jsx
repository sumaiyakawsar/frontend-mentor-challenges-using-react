import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project34.scss';
import { expenseData } from './data/data'
import logo from "./images/logo.svg"
import BarChart from "./component/BarChart";

const Project34 = () => {
    useFavicon("icons/project34.png");
    useDocumentTitle("Expenses Chart Component | Frontend Mentor");

    return (
        <div className='project-34'>
            <div className="expense__header">
                <div className="balance">
                    <span>My balance</span>
                    <p className="amount">$921.48</p>
                </div>
                <img src={logo} alt="logo" />
            </div>

            <div className="chart__card">
                <div className="chart">
                    <h1>Spending - Last 7 days</h1>
                    <div className="chart-container">
                        <BarChart data={expenseData} />
                    </div>
                </div>

                <div className="card__footer">
                    <span>Total this month</span>
                    <div className="amounts">
                        <div className="total"> $478.99 </div>
                        <div className="difference">
                            <div className="amount">
                                +2.4%
                            </div>
                            <span>from last month</span>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Project34