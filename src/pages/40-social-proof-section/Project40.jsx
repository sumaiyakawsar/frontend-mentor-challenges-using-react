import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project40.scss'

import iconStar from './images/icon-star.svg'
import avatrAnne from './images/image-anne.jpg'
import avatrColton from './images/image-colton.jpg'
import avatrIrene from './images/image-irene.jpg'
import MultiLineTypewriter from '../../components/utility/MultiLineTypewriter';

const Project40 = () => {
  useFavicon("icons/project30.png");
  useDocumentTitle("Social proof section | Frontend Mentor");

  return (
    <div className='project-40'>
      <div className="container">
        <div className="top">
          <div className="description">
            
            <MultiLineTypewriter
              text={`10,000+ of our users love our products.`}
              speed={40}
            />

            <p>
              We only provide great products combined with excellent customer service.
              See what our satisfied customers are saying about our services.
            </p>
          </div>


          <div className="ratings">
            <div className="rating reviews">
              <div className="star-rating">
                {[...Array(5)].map((_, idx) => (
                  <img src={iconStar} alt="star" key={idx} />
                ))}
              </div>
              <p>Rated 5 Stars in Reviews</p>
            </div>
            <div className="rating guru">
              <div className="star-rating">
                {[...Array(5)].map((_, idx) => (
                  <img src={iconStar} alt="star" key={idx} />
                ))}
              </div>
              <p> Rated 5 Stars in Report Guru</p>
            </div>
            <div className="rating besttech">
              <div className="star-rating">
                {[...Array(5)].map((_, idx) => (
                  <img src={iconStar} alt="star" key={idx} />
                ))}
              </div>
              <p>Rated 5 Stars in BestTech</p>

            </div>
          </div>
        </div>

        <div className="reviews__container">
          <div className="review smith">
            <div className="user__profile">
              <img src={avatrColton} alt="colton" className='avatar' />
              <div className="user__details">
                <div className="user__name">Colton Smith</div>
                <span> Verified Buyer</span>
              </div>
            </div>
            <div className="user__review">
              "We needed the same printed design as the one we had ordered a week prior.
              Not only did they find the original order, but we also received it in time.
              Excellent!"
            </div>
          </div>
          <div className="review roberts">
            <div className="user__profile">
              <img src={avatrIrene} alt="irene" className='avatar' />
              <div className="user__details">
                <div className="user__name">Irene Roberts</div>
                <span> Verified Buyer</span>
              </div>
            </div>
            <div className="user__review">
              "Customer service is always excellent and very quick turn around. Completely
              delighted with the simplicity of the purchase and the speed of delivery."
            </div>
          </div>
          <div className="review wallace">
            <div className="user__profile">
              <img src={avatrAnne} alt="anne" className='avatar' />
              <div className="user__details">
                <div className="user__name">Anne Wallace</div>
                <span> Verified Buyer</span>
              </div>
            </div>
            <div className="user__review">
              "Put an order with this company and can only praise them for the very high
              standard. Will definitely use them again and recommend them to everyone!"
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project40