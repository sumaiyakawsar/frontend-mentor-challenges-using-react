import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY;

export default function useIPInfo(initialIP = "") {
    const [ipData, setIpData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchIPInfo = async (ip = "") => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(`https://geo.ipify.org/api/v2/country,city`, {
                params: { apiKey: API_KEY, ipAddress: ip }
            });

            setIpData(response.data);
        } catch (err) {
            setError("Failed to fetch IP information.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIPInfo(initialIP);
    }, []);

    return { ipData, loading, error, fetchIPInfo };
}
