import React from 'react'
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project14.scss'

import TestimonialCard from './component/TestimonialCard';
import { testimonialsData } from './data/data'

const Project14 = () => {
  useFavicon("project1314.png");
  useDocumentTitle("Testimonials grid section | Frontend Mentor");

  return (
    <div className='container project14'>
      <div class="card-wrapper">

        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
        
      </div>
    </div>
  )
}

export default Project14