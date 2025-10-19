import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';

import './style/project67.scss';
import 'leaflet/dist/leaflet.css';

import useIPInfo from "./hook/useIPInfo";

import SearchBar from "./component/SearchBar";
import IPInfo from "./component/IPInfo";
import MapView from "./component/MapView";



export default function Project67() {
    useFavicon("icons/project67.png");
    useDocumentTitle("IP Address Tracker | Frontend Mentor");

    const { ipData, loading, error, fetchIPInfo } = useIPInfo();


    return (
        <div className='project-67'>

            <header>
                <div className="container">
                    <h1>IP Address Tracker</h1>
                    <SearchBar onSearch={fetchIPInfo} />
                    {error && <p className="status error">{error}</p>}
                </div>
            </header>


            <section className="hero">
                {loading ? (
                    <div className="ip-info skeleton">
                        <div>
                            <div className="skeleton-title"></div>
                            <div className="skeleton-line"></div>
                        </div>
                        <div>
                            <div className="skeleton-title"></div>
                            <div className="skeleton-line"></div>
                        </div>
                        <div>
                            <div className="skeleton-title"></div>
                            <div className="skeleton-line"></div>
                        </div>
                        <div>
                            <div className="skeleton-title"></div>
                            <div className="skeleton-line"></div>
                        </div>
                    </div>
                ) : (
                    ipData && (
                        <>
                            <IPInfo ipData={ipData} />
                            <MapView
                                lat={ipData.location.lat}
                                lng={ipData.location.lng}
                                city={ipData.location.city}
                                region={ipData.location.region}
                                country={ipData.location.country}
                            />
                        </>
                    )
                )}

            </section>


        </div >
    )
}
