import React, { MutableRefObject } from "react";
import mapboxgl from 'mapbox-gl';
import './styles/map.css'
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

export default function MapView({ isVisible }: { isVisible: boolean }) {

    const map = React.useRef<any>();
    const mapContainer = React.useRef<any>();
    const [lng, setLng] = React.useState(-70.9);
    const [lat, setLat] = React.useState(42.35);
    const [zoom, setZoom] = React.useState(9);



    React.useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    React.useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.resize();
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });



    return (
        <div style={{ display: 'flex', flexGrow: '1', flexDirection: 'column', overflow: 'hidden' }}>

            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>

    );
}