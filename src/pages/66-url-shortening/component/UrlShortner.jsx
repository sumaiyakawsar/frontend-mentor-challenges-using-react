import { useEffect, useState } from "react";
import { MdContentCopy, MdClose } from "react-icons/md";
import useShortner from "../hook/useShortner";

import Error from "../../../components/Error";

const UrlShortener = () => {
    const [url, setUrl] = useState("");
    const { shortUrl, loading, error, shortenUrl } = useShortner();
    const [links, setLinks] = useState(() => {
        const saved = localStorage.getItem("shortenedLinks");
        return saved ? JSON.parse(saved) : [];
    });
    const [duplicateError, setDuplicateError] = useState("");
    const [inputError, setInputError] = useState(""); // New state for input error



    // Save links to localStorage whenever links change
    useEffect(() => {
        localStorage.setItem("shortenedLinks", JSON.stringify(links));
    }, [links]);

    // Add new shortened URL to links when shortUrl changes
    useEffect(() => {
        if (shortUrl) {
            setLinks(prev => {
                // check if the same original URL already exists
                const exists = prev.some(link => link.original === url || link.short === shortUrl);
                if (exists) return prev; // skip adding duplicate

                const newLink = {
                    id: Date.now().toString(),
                    original: url,
                    short: shortUrl,
                    copied: false
                };
                return [newLink, ...prev];
            });
            setUrl(""); // clear input after successful shortening
        }
    }, [shortUrl]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedUrl = url.trim();

        // Check if the input is empty
        if (!trimmedUrl) {
            setInputError("Please add a link");
            return;
        }
        const exists = links.some(link => link.original === trimmedUrl);
        if (exists) {
            setDuplicateError("This link has already been shortened!");
            setTimeout(() => {
                setDuplicateError("");
                setUrl("");
            }, 2500);
            return;
        }

        setInputError(""); // clear any previous input errors
        setDuplicateError(""); // clear any previous duplicate errors
        shortenUrl(trimmedUrl);
    };

    const handleChange = (e) => {
        setUrl(e.target.value);
        // Clear the input error as soon as the user types
        if (inputError) {
            setInputError("");
        }
    };
    const handleCopy = async (linkId, shortUrl) => {
        try {
            await navigator.clipboard.writeText(shortUrl);

            setLinks(prev =>
                prev.map(l => ({ ...l, copied: l.id === linkId }))
            );

            // Reset copied status after 2 seconds
            setTimeout(() => {
                setLinks(prev =>
                    prev.map(l => (l.id === linkId ? { ...l, copied: false } : l))
                );
            }, 2000);

        } catch (e) {
            alert("Failed to copy link.");
        }
    };
    const handleDelete = (linkId) => {
        setLinks(prev => prev.filter(link => link.id !== linkId));
    };
    const hasError = inputError || duplicateError || error;

    return (

        <section className="url-shortening">
            <div className="container">
                <div className="shortener-form-wrapper">

                    <form className="shortener-form" onSubmit={handleSubmit} noValidate>
                        <div className="input-group">
                            <input
                                type="url"
                                name="url"
                                id="url"
                                value={url}
                                placeholder="Shorten a link here..."
                                onChange={handleChange} // Update onChange handler to clear error
                                className={hasError ? "error" : ""} // Apply red border for any error
                                aria-describedby="url-error"
                            />
                            <button type="submit" disabled={loading}>
                                {loading ? "Shortening..." : "Shorten It!"}
                            </button>
                        </div>


                        {inputError && <Error message={inputError} id="url-error" className="error-msg" />}
                        {error && <Error message={error} id="url-error" className="error-msg" />}
                        {duplicateError && <Error id="url-error" message={duplicateError} className="error-msg" />}

                    </form>
                </div>
                <div className="shortened-results">
                    {links.map(({ id, original, short, copied }) => (
                        <div key={id} className="shortened-item">
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(id)}
                                aria-label="Delete link"
                            >
                                <MdClose />
                            </button>
                            <p className="original-link">{original}</p>
                            <div className="shortened-actions">
                                <a
                                    href={short}
                                    target="_blank"
                                    rel="noreferrer">
                                    {short}
                                </a>
                                <button
                                    className={`copy-btn ${copied ? "copied" : ""}`}
                                    onClick={() => handleCopy(id, short)}
                                >
                                    <MdContentCopy />

                                    {copied ? "Copied!" : "Copy"}
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UrlShortener;
