import { useState, useEffect } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project45.scss';
import { jobListing as jobListingData } from './data/data';

 import JobCard from "./component/JobCard";
import TagFilterBar from "../../components/TagFilterBar";

const Project45 = () => {
  useFavicon("icons/project21.png");
  useDocumentTitle("Job Listings | Frontend Mentor");

  const [filters, setFilters] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobListingData);
  }, []);

  const filterJobs = job => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every(filter => tags.includes(filter));
  };

  const handleTagClick = tag => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  const clearFilters = () => setFilters([]);
  const removeFilter = tag => setFilters(filters.filter(f => f !== tag));

  return (
    <div className='project-45'>
      <div className="header">

      </div>
      <div className="container">


        <div className="filter-bar-wrapper">
          {filters.length > 0 ? (
            <TagFilterBar
              filters={filters}
              clearFilters={clearFilters}
              removeFilter={removeFilter}
            />
          ) : (
            <div className="filter-bar empty"></div> // Empty placeholder
          )}
        </div>

        <div className="job__listings">
          {jobs.filter(filterJobs).map(job => (
            <JobCard key={job.id} job={job} onTagClick={handleTagClick} />
          ))}

        </div>


      </div>
    </div>
  )
}

export default Project45