import React, { MutableRefObject } from "react";
import mapboxgl from 'mapbox-gl';
import './styles/map.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import api from "@/api/api";

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

        api.fetchPhotoGeoData("68a4d453-28e6-46d4-b63b-1c5f60789e81")
            .then((d) => {
                map.current.on('load', () => {
                    // Add an image to use as a custom marker
                    map.current.loadImage(
                        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                        (error: any, image: any) => {
                            if (error) throw error;
                            map.current.addImage('custom-marker', image);
                            // Add a GeoJSON source with 2 points
                            map.current.addSource('points', {
                                'type': 'geojson',
                                'data': {
                                    'type': 'FeatureCollection',
                                    'features':
                                        d.map((i: any) => {
                                            return {
                                                'type': 'Feature',
                                                'geometry': {
                                                    'type': 'Point',
                                                    'coordinates': [i.lon, i.lat]
                                                }
                                            }
                                        })

                                }
                            });

                            // Add a symbol layer
                            map.current.addLayer({
                                'id': 'points',
                                'type': 'symbol',
                                'source': 'points',
                                'layout': {
                                    'icon-image': 'custom-marker',
                                    // get the title name from the source's "title" property
                                    'text-field': ['get', 'title'],
                                    'text-font': [
                                        'Open Sans Semibold',
                                        'Arial Unicode MS Bold'
                                    ],
                                    'text-offset': [0, 1.25],
                                    'text-anchor': 'top'
                                }
                            });
                        }
                    );
                });
            })

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
        <div style={{ display: isVisible ? 'flex' : 'none', flexGrow: '1', flexDirection: 'column', overflow: 'hidden' }}>

            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>

    );
}