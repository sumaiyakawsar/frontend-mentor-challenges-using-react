import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project39.scss'

import imgDesktop from './images/image-header-desktop.jpg'
import imgMobile from './images/image-header-mobile.jpg'


const Project39 = () => {
  useFavicon("icons/project71516.png");
  useDocumentTitle("Stats preview card component | Frontend Mentor");


  return (
    <div className='project-39'>
      <div className="card">
        <div className="card__content">

          <div className="details">
            <h1>Get <span>insights</span> that help your business grow.</h1>
            <p>
              Discover the benefits of data analytics and make better decisions regarding revenue, customer
              experience, and overall efficiency.
            </p>
          </div>


          <div className="stats">
            <div className="stat">
              <p className="stat__amount">
                10k+
              </p>

              <p className="stat__heading">companies</p>

            </div>
            <div className="stat">
              <p className="stat__amount">
                314
              </p>

              <p className="stat__heading">templates</p>

            </div>
            <div className="stat">
              <p className="stat__amount">
                12m+
              </p>

              <p className="stat__heading">queries</p>

            </div>
          </div>
        </div>
        <div className="card__img">
          <picture>
            {/* Mobile Image */}
            <source srcSet={imgMobile} media="(max-width: 600px)" />
            {/* Desktop Image */}
            <img src={imgDesktop} alt="Image" />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default Project39