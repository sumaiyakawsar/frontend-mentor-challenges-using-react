import React from 'react'
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project13.scss'


import ServiceCard from './component/ServiceCard';
import { servicesData } from './data/data' 

const Project13 = () => {
  useFavicon("icons/project1314.png");
  useDocumentTitle("Four card feature section | Frontend Mentor");

  return (
    <div className='container project-13'>
      <div className='project-header'>
        <h1> Reliable, efficient delivery</h1>
        <h2> Powered by Technology</h2>


        <p className="description">
          Our Artificial Intelligence powered tools use millions of project data points
          to ensure that your project is successful </p>
      </div>

      <div className="card-wrapper">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}

      </div>
    </div>
  )
}

export default Project13