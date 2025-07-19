import { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project46.scss';
import { initialNotifications } from './data/data';
import NotificationItem from "./component/NotificationItem";


const Project46 = () => {
  useFavicon("icons/project30.png");
  useDocumentTitle("Notifications page | Frontend Mentor");

  const [notifications, setNotifications] = useState(initialNotifications);
  const [animatingIds, setAnimatingIds] = useState([]);

  const unreadCount = notifications.filter(notification => !notification.isRead).length;

  const markAllAsRead = () => {
    const unreadIds = notifications.filter(n => !n.isRead).map(n => n.id);
    setAnimatingIds(unreadIds);

    setTimeout(() => {
      setNotifications(prev =>
        prev.map(n => ({ ...n, isRead: true }))
      );
      setAnimatingIds([]);
    }, 400); 
  };

  return (
    <div className='project-46'>

      <div className="notifications-container">
        <div className="notifications-header">
          <h1>Notifications <span>{unreadCount}</span></h1>
          <button onClick={markAllAsRead}>Mark all as read</button>
        </div>



        <section className="notifications-list">
          {notifications.map(n => (
            <NotificationItem
              key={n.id}
              {...n}
              triggerAnimation={animatingIds.includes(n.id)}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Project46