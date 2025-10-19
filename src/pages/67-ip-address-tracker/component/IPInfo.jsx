export default function IPInfo({ ipData }) {
    
    if (!ipData) return null;

    const { ip, isp, location } = ipData || {};
    const { city, region, country, postalCode, timezone } = location || {};

    const locationParts = [city, region, country, postalCode].filter(Boolean);
    const locationText = locationParts.join(", ");

    return (
        <div className="ip-info">

            {ip && (
                <div>
                    <h2>IP ADDRESS</h2>
                    <p>{ip}</p>
                </div>
            )}
            {locationText && (
                <div>
                    <h2>LOCATION</h2>
                    <p>{locationText}</p>
                </div>
            )}
            {timezone && (
                <div>
                    <h2>TIMEZONE</h2>
                    <p>UTC {timezone}</p>
                </div>
            )}
            {isp && (
                <div>
                    <h2>ISP</h2>
                    <p>{isp}</p>
                </div>
            )}

        </div>
    );
}
