
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import MultiLineTypewriter from '../../components/utility/MultiLineTypewriter';
import './style/project65.scss';


import ChatScreen from "./Components/ChatScreen";

export default function Project65() {
  useFavicon("icons/project30.png");
  useDocumentTitle("Chat | Frontend Mentor");


  return (
    <div className='project-65 simple-booking'>
      <div className="container">
        <div className="simple-booking__content">
          {/* Left: Chat UI */}
          <ChatScreen />

          {/* Right: Text section */}
          <div className="simple-booking__text">
            <MultiLineTypewriter
              text='Simple booking'
            />
            <p>
              Stay in touch with our dog walkers through the chat interface. This makes it easy to
              discuss arrangements and make bookings. Once the walk has been completed you can rate
              your walker and book again all through the chat.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
