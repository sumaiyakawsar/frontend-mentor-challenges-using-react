import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import MultiLineTypewriter from '../../components/utility/MultiLineTypewriter';
import './style/project43.scss';

import illustration from "./images/illustration-mockups.svg";
import logo from "./images/logo.svg";

const Project43 = () => {
  useFavicon("icons/project30.png");
  useDocumentTitle("Huddle landing page | Frontend Mentor");


  return (
    <div className='project-43'>
      <div className="header">
        <img src={logo} alt="" />
      </div>

      <div className="flex">
        <img src={illustration} alt="" />
        <div className="content">
          <MultiLineTypewriter
            text='Build The Community Your Fans Will Love'
          />

          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.
          </p>

          <button type="button" className='btn'>Register</button>
        </div>


      </div>
    </div>
  )
}

export default Project43