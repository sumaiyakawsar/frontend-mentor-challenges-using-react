import React from 'react'
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import cardImg from './images/image-qr-code.png'
import './style/project1.scss'

const Project1 = () => {
  useFavicon("icons/project1.png");
  useDocumentTitle("QR code component | Frontend Mentor");

  return (
    <div className="container project1">
      <div className="card">
        <img src={cardImg} alt="qr-code" className="card__img" />
        <h1 className="card__header">
          Improve your front-end skills by building projects
        </h1>
        <p className="card__body">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>

  )
}

export default Project1