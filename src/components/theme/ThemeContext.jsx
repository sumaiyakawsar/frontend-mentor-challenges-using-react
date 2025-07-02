import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, projectId }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem(`${projectId}-theme`) || "light";
    });

    useEffect(() => {
        localStorage.setItem(`${projectId}-theme`, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            <div className={`theme ${projectId}`} data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
