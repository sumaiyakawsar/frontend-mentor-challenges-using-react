import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import { Projects } from "./data/data";
import { Link } from "react-router-dom";
import './style/homepage.scss'

function Homepage() {
    useFavicon("icons/main.png");
    useDocumentTitle("Frontend Mentor Challenges by SK");


    return (
        <section className='projects'>


            {Projects.map((menu, id) => (
                <div>
                    <Link
                        key={id}
                        to={menu.src}
                        className="project"
                        exact
                        strict
                    >
                        <img className="project__img" src={menu.projectImage} />
                        <div className="project__body">
                            <div className="project__body__header">
                                <h4>  {menu.projectTitle}</h4>
                                <div className={`level ${menu.projectLevel}`}>
                                    <span className={`level__no ${menu.projectLevel}`}> {menu.projectLevelNo}</span>
                                    <span>{menu.projectLevel} </span>
                                </div>
                            </div>
                            <div className="project__body__tags">
                                {menu.projectTags.map((tag, id) => (
                                    <span key={id} className={`tag ${tag.toLowerCase()}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="project__body__desc"></div>
                        </div>

                    </Link>
                </div>
            ))
            }

        </section>
    )
}

export default Homepage