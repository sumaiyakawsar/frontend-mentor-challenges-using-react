import { FaTimes } from "react-icons/fa";

const TagFilterBar = ({ filters, clearFilters, removeFilter }) => {
    if (filters.length === 0) return null;

    return (
        <div className="filter-bar">
            <div className="tags">
                {filters.map((tag, i) => (
                    <div key={i} className={`tag ${tag.toLowerCase()}`}>
                        <span>{tag}</span>
                        <button onClick={() => removeFilter(tag)}>
                            <FaTimes />
                        </button>
                    </div>
                ))}
            </div>
            <button className="clear" onClick={clearFilters}>
                Clear
            </button>
        </div>
    );
};

export default TagFilterBar;
