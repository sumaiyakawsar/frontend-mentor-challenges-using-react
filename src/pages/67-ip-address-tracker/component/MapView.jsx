import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { createRoot } from "react-dom/client";
import { FaMapMarkerAlt } from "react-icons/fa";

// Create a custom HTML icon using react-icon
const customIcon = () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<FaMapMarkerAlt size={30} color="#000" />);
    return L.divIcon({
        html: div,
        iconSize: [30, 30],
        className: "custom-marker",
    });
};



export default function MapView({ lat, lng, city, region, country }) {
    const locationText = [city, region, country].filter(Boolean).join(", ");

    return (
        <div className="map-container">
            <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />  
                <Marker position={[lat, lng]} icon={customIcon()}>
                    <Popup>{locationText || "Unknown location"}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
