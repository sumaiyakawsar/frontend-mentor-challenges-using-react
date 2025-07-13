import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import MultiLineTypewriter from '../../components/utility/MultiLineTypewriter';
import './style/project41.scss'


const Project41 = () => {
  useFavicon("icons/project71516.png");
  useDocumentTitle("Single Price Grid Component | Frontend Mentor");


  return (
    <div className='project-41'>

      <div className="card">
        <div className="description">
          <MultiLineTypewriter
            text='Join our community'
          />

          <h2>30-day, hassle-free money back guarantee</h2>
          <p>
            Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.
          </p>
        </div>
        <div className="bottom">
          <div className="subscription">
            <h2> Monthly Subscription</h2>

            <div className="details">
              <div className="price">
                <div className="amount"> $29</div>
                <span>per month</span>
              </div>

              <p>
                Full access for less than $1 a day
              </p>
            </div>


            <button type="button" className='btn'> Sign Up </button>

          </div>
          <div className="why">
            <h2>Why Us</h2>

            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li> Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project41