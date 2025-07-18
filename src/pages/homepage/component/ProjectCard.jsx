import { Link } from "react-router-dom";

const ProjectCard = ({ project, onTagClick }) => {
    const tags = [...project.projectTags];

    return (
        <div className="project">
            <Link
                key={project.id}
                to={project.src}
                exact
                strict
            >
                <div className="project__top">
                    <img className="project__top__img" src={project.projectImage} />
                    <div className={`project__top__num ${project.projectLevel}`}>{project.projectId}</div>
                </div>

                <div className="project__body">
                    <div className="project__body__header">
                        <h4>  {project.projectTitle}</h4>
                        <div className={`level ${project.projectLevel}`}>
                            <span className={`level__no ${project.projectLevel}`}> {project.projectLevelNo}</span>
                            <span>{project.projectLevel} </span>
                        </div>
                    </div>
                </div>
            </Link>

            <div className="project__description">
                {project.projectDescription || ""}

            </div>
            <div className="project__tags">
                {tags.map((tag, id) => (
                    <span key={id} className={`tag ${tag.toLowerCase()}`} onClick={() => onTagClick(tag)}>
                        {tag}
                    </span>
                ))}
            </div>

        </div>



    );
};

export default ProjectCard;
