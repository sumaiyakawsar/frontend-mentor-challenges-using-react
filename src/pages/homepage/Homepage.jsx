import { useState, useEffect } from 'react';
import './style/homepage.scss'
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import { useTheme } from '../../components/theme/ThemeContext';
import TagFilterBar from '../../components/TagFilterBar';
import ProjectCard from './component/ProjectCard';
import { Projects } from "./data/data";

function Homepage() {
    useFavicon("icons/main.png");
    useDocumentTitle("Frontend Mentor Challenges by SK");
    const { theme, toggleTheme } = useTheme();

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

    const filteredProjects = projects.filter(filterProjects);
    const totalProjects = filteredProjects.length;

    const levelCounts = filteredProjects.reduce((acc, project) => {
        const level = project.projectLevel.toLowerCase();
        acc[level] = (acc[level] || 0) + 1;
        return acc;
    }, {});

    const clearFilters = () => setTagFilters([]);
    const removeFilter = tag => setTagFilters(tagFilters.filter(f => f !== tag));

    return (
        <section className='projects'>
            <header className="header">
                <div className="header-top">
                    <h1>Frontend Mentor Challenges</h1>
                    <p className="subtitle">A collection of solutions by SK</p>

                    <div className="theme-toggle-wrapper">
                        <label className="theme-toggle">
                            <input
                                type="checkbox"
                                checked={theme === "dark"}
                                onChange={toggleTheme}
                            />
                            <span className="slider">
                                <span className="icon sun">☀️</span>
                                <span className="icon moon">🌙</span>
                            </span>
                        </label>
                    </div>

                </div>

                <div className="kpi-container">
                    <div className="kpi">
                        <div
                            className={`kpi-item all ${levelFilter === "all" ? "active" : ""}`}
                            onClick={() => setLevelFilter("all")}
                        >
                            <span className="kpi-number">{totalProjects}</span>
                            <span className="kpi-label">Total Projects</span>
                        </div>

                        {levels.filter(l => l !== "all").map(level => {
                            const count = levelCounts[level] || 0;
                            const percentage = totalProjects === 0 ? 0 : Math.round((count / totalProjects) * 100);

                            return (
                                <div
                                    key={level}
                                    className={`kpi-item ${level} ${levelFilter === level ? "active" : ""}`}
                                    data-tooltip={`${count} ${level} projects`}
                                    onClick={() => setLevelFilter(level)}
                                >
                                    <span className="kpi-number">{percentage}%</span>
                                    <span className="kpi-label">{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                                    <div className={`progress-bar ${level}`}>
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="filter-section">
                    <div className="filter-header">
                        <h2>Filter Projects</h2>
                        {tagFilters.length > 0 && (
                            <button className="clear-filters-btn" onClick={clearFilters}>
                                Clear All
                            </button>
                        )}
                    </div>

                    <div className="level-filters">
                        {levels.map(level => (
                            <button
                                key={level}
                                onClick={() => setLevelFilter(level)}
                                className={`level-filter-btn ${level} ${levelFilter === level ? 'active' : ''}`}
                            >
                                {level.charAt(0).toUpperCase() + level.slice(1)}
                                {level !== "all" && levelCounts[level] > 0 && (
                                    <span className="level-count">{levelCounts[level]}</span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="tag-filter-bar-wrapper">
                        {tagFilters.length > 0 ? (
                            <TagFilterBar
                                filters={tagFilters}
                                clearFilters={clearFilters}
                                removeFilter={removeFilter}
                            />
                        ) : (
                            <div className="no-filters-message">
                                Select tags from project cards to filter
                            </div>
                        )}
                    </div>
                </div>

                <div className='projects-grid'>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <ProjectCard key={project.projectId} project={project} onTagClick={handleTagClick} />
                        ))
                    ) : (
                        <div className="no-projects-message">
                            <h3>No projects match your filters</h3>
                            <p>Try adjusting your level or tag filters</p>
                            <button className="reset-filters-btn" onClick={() => { setLevelFilter("all"); clearFilters(); }}>
                                Reset All Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Homepage