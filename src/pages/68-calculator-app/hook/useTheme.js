import { useState, useEffect } from "react";

const themes = ["dark", "light", "pink"];

export default function useTheme() {
    const [themeIndex, setThemeIndex] = useState(() => {
        const saved = localStorage.getItem("project68theme");
        if (saved && themes.includes(saved)) return themes.indexOf(saved);
        return 1; // default dark
    });

    const theme = themes[themeIndex];

    useEffect(() => {
        document.documentElement.classList.remove(...themes);
        document.documentElement.classList.add(theme);
        localStorage.setItem("project68theme", theme);
    }, [theme]);



    // Change to a specific theme
    const setThemeByIndex = (index) => {
        if (index < 0 || index >= themes.length) return;
        setThemeIndex(index);
    };



    return { theme, themeIndex, setThemeByIndex, themes };
}
