import useTheme from "../hook/useTheme";

export default function ThemeToggle() {
    const { themeIndex, setThemeByIndex } = useTheme();
    const handleTrackClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const segmentWidth = rect.width / 3;
        const index = Math.min(2, Math.max(0, Math.floor(clickX / segmentWidth)));
        setThemeByIndex(index);
    };

    // knob positions (in percentage of track width)
    const positions = ["0%", "50%", "100%"];
    return (
        <div className="theme-toggle-wrapper">
            <p className="theme-label">THEME</p>

            <div className="theme-toggle">
                {/* Numbers */}
                <div className="numbers">
                    {[1, 2, 3].map((num, i) => (
                        <span
                            key={i}
                            className={`num ${themeIndex === i ? "active" : ""}`}
                            onClick={() => setThemeByIndex(i)}
                        >
                            {num}
                        </span>
                    ))}
                </div>

                {/* Track + Knob */}
                <div className="track" onClick={handleTrackClick}>

                    <div
                        className="knob"
                        style={{ transform: `translateX(${themeIndex * 100}%)` }}
                    />
                </div>
            </div>
        </div>
    );
}
