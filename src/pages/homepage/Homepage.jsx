import { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import { Projects } from "./data/data";
import { Link } from "react-router-dom";
import './style/homepage.scss'

function Homepage() {
    useFavicon("icons/main.png");
    useDocumentTitle("Frontend Mentor Challenges by SK");


    // const [filter, setFilter] = useState("all");

    // const levels = ["all", "newbie", "junior", "intermediate", "advanced"];

    // const filteredProjects =
    //     filter === "all"
    //         ? Projects
    //         : Projects.filter((project) => project.projectLevel.toLowerCase() === filter);
    const [levelFilter, setLevelFilter] = useState("all");
    const [tagFilter, setTagFilter] = useState("all");

    const levels = ["all", "newbie", "junior", "intermediate", "advanced", "guru"];
    const allTags = [...new Set(Projects.flatMap(p => p.projectTags))];

    const filteredProjects = Projects.filter(project => {
        const matchLevel =
            levelFilter === "all" ||
            project.projectLevel.toLowerCase() === levelFilter;
        const matchTag =
            tagFilter === "all" ||
            project.projectTags.includes(tagFilter);
        return matchLevel && matchTag;
    });
    return (
        <section className='projects'>


            <div className="projects__filters">
                {levels.map(level => (
                    <button
                        key={level}
                        onClick={() => setLevelFilter(level)}
                        className={`filter-btn ${level} ${levelFilter === level ? 'active' : ''}`}
                    >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                ))}
            </div>

            <div className="projects__tag-filters">
                {["all", ...allTags].map(tag => (
                    <button
                        key={tag}
                        onClick={() => setTagFilter(tag)}
                        className={`tag-btn tag-${tag.toLowerCase()} ${tagFilter === tag ? 'active' : ''}`}
                    >

                        {tag.charAt(0).toUpperCase() + tag.slice(1)}

                    </button>
                ))}
            </div>
            <div className='projects__filtered'>
                {filteredProjects.map((menu, id) => (
                    <div>
                        <Link
                            key={id}
                            to={menu.src}
                            className="project"
                            exact
                            strict
                        >
                            <img className="project__img" src={menu.projectImage} />

                            <div className={`project__num ${menu.projectLevel}`}>{menu.projectId}</div>



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
            </div>


        </section>
    )
}

export default Homepage