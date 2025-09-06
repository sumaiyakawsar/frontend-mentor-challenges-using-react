import { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project57.scss';
import imgLogo from "./images/logo.svg";
import { IoIosDocument, IoMdFolder, IoMdCloudUpload } from "react-icons/io";

function Project57() {
    useFavicon("icons/project49.png");
    useDocumentTitle("Fylo Data Storage | Frontend Mentor");

    const used = 815;
    const total = 1000;
    const left = total - used;
    const percentage = (used / total) * 100;


    return (
        <div className='project-57'>

            <div className="storage-container">
                <div className="storage-box brand-box">
                    <img src={imgLogo} alt="logo" className='logo' />
                    <div className="icons">
                        <button type="button" className="icon"><IoIosDocument /></button>
                        <button type="button" className="icon"><IoMdFolder /></button>
                        <button type="button" className="icon"><IoMdCloudUpload /></button>
                    </div>
                </div>
                <div className="storage-box usage-box">
                    <p>
                        You’ve used <strong>{used} GB</strong> of your storage
                    </p>

                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${percentage}%` }}>
                            <span className="circle"></span>
                        </div>
                    </div>

                    <div className="limits">
                        <span>0 GB</span>
                        <span>{total} GB</span>
                    </div>

                    <div className="storage-left">
                        <h1>{left}</h1>
                        <span>GB LEFT</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Project57


