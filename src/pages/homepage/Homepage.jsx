import { useState, useEffect } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import { Projects } from "./data/data";
import './style/homepage.scss'
import TagFilterBar from '../../components/TagFilterBar';
import ProjectCard from './component/ProjectCard';

function Homepage() {
    useFavicon("icons/main.png");
    useDocumentTitle("Frontend Mentor Challenges by SK");

    const [levelFilter, setLevelFilter] = useState("all");
    const [tagFilters, setTagFilters] = useState([]);
    const [projects, setProjects] = useState([]);

    const levels = ["all", "newbie", "junior", "intermediate", "advanced", "guru"];


    const filterProjects = (project) => {
        const matchesLevel =
            levelFilter === "all" ||
            project.projectLevel.toLowerCase() === levelFilter;
        const matchesTags = tagFilters.every(tag =>
            project.projectTags.includes(tag)
        );

        return matchesLevel && matchesTags;
    };


    useEffect(() => {
        setProjects(Projects);
    }, []);



    const handleTagClick = tag => {
        if (!tagFilters.includes(tag)) {
            setTagFilters([...tagFilters, tag]);
        }
    };

    const clearFilters = () => setTagFilters([]);
    const removeFilter = tag => setTagFilters(tagFilters.filter(f => f !== tag));

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


            <div className="filter-bar-wrapper">
                {tagFilters.length > 0 ? (
                    <TagFilterBar
                        filters={tagFilters}
                        clearFilters={clearFilters}
                        removeFilter={removeFilter}
                    />
                ) : (
                    <div className="filter-bar empty"></div> // Empty placeholder
                )}
            </div>

            <div className='projects__filtered'>
                {projects.filter(filterProjects).map(project => (
                    <ProjectCard key={project.id} project={project} onTagClick={handleTagClick} />
                ))}
            </div>


        </section>
    )
}

export default Homepage