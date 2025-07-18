
const JobCard = ({ job, onTagClick }) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    return (
        <div className={`job-card ${job.featured ? 'border-left' : ''}`}>

            <img src={job.logo} alt={job.company} className="logo" />

            <div className="info">
                <div className="company-meta">
                    <h2>{job.company}</h2>
                    {job.new && <span className="new">NEW!</span>}
                    {job.featured && <span className="featured">FEATURED</span>}
                </div>
                <h3>{job.position}</h3>
                <div className="job-meta">
                    <span>{job.postedAt}</span>
                    <span className="dot" />
                    <span>{job.contract}</span>
                    <span className="dot" />
                    <span>{job.location}</span>
                </div>
            </div>
            <hr />
            <div className="tags">
                {tags.map((tag, i) => (
                    <span key={i} onClick={() => onTagClick(tag)}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;
