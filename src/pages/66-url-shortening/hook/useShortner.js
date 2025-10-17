import { useState } from "react";

export default function useShortner() {
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const shortenUrl = async (originalUrl) => {
        // Basic URL validation
        try {
            new URL(originalUrl);
        } catch (err) {
            setError("Please enter a valid URL (include http:// or https://)");
            return;
        }

        setLoading(true);
        setError("");
        setShortUrl("");

        try { 
            const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const shortUrl = await response.text();

            // Check if the response contains an error
            if (shortUrl.includes('error') || !shortUrl.startsWith('http')) {
                throw new Error("Failed to shorten URL");
            }

            setShortUrl(shortUrl);
        } catch (err) {
            console.error("URL shortening error:", err);
            setError("Failed to shorten URL. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return { shortUrl, loading, error, shortenUrl };
}