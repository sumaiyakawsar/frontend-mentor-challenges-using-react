import React from 'react'
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project14.scss'

import TestimonialCard from './component/TestimonialCard';
import { testimonialsData } from './data/data'

const Project14 = () => {
  useFavicon("icons/project1314.png");
  useDocumentTitle("Testimonials grid section | Frontend Mentor");

  return (
    <div className='container project-14'>
      <div className="card-wrapper">

        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
        
      </div>
    </div>
  )
}

export default Project14