import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project35.scss';


const Project35 = () => {
  useFavicon("icons/project19.png");
  useDocumentTitle("Interactive rating component | Frontend Mentor");


  return (
    <div className='project-35'>
      Project 35
    </div >
  )
}

export default Project35