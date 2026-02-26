import { useState, useEffect } from "react";

/**
 * Reusable hook to fetch JSON from public/data/ folder.
 * Returns { data, loading, error }.
 *
 * @param {string} url — e.g. "/data/companyContent.json"
 */
export function useJsonData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`Failed to fetch ${url}`);
                return res.json();
            })
            .then((json) => {
                if (!cancelled) {
                    setData(json);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (!cancelled) {
                    setError(err);
                    setLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [url]);

    return { data, loading, error };
}
