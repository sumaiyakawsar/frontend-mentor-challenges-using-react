import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            onSearch(value);
            setValue("");
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for any IP address or domain"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" aria-label="Search"><MdNavigateNext size={24} /></button>
        </form>
    );
}
