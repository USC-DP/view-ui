import { Box, ListItem, ListItemButton, List, IconButton, TextField } from "@mui/material";
import React from "react";
import Drawer from '@mui/material/Drawer';

import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

import { Typography } from "@mui/joy";


import TodayIcon from '@mui/icons-material/Today';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';


const DenseInfoListItem = ({ icon, majorLabel, minorLabel }: { icon: any, majorLabel: string, minorLabel?: string[] }) => {
    return (
        <ListItem sx={{ p: '18px 24px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', gap: '20px', width: '100%' }}>
                {icon}
                <Box>
                    <Typography fontSize={'16px'}>{majorLabel}</Typography>
                    {minorLabel &&
                        <Typography fontSize={'14px'}>
                            {minorLabel[0]}
                            {minorLabel.slice(1).map((minorLabelText, index) => {
                                return <span key={index} style={{ marginLeft: '12px' }}>{minorLabelText}</span>
                            })}
                        </Typography>
                    }
                </Box>
            </Box>
        </ListItem>
    );
}


export function ImageInfo({ drawerOpen, setDrawerOpen }: { drawerOpen: boolean, setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const map = React.useRef<any>();
    const mapContainer = React.useRef<any>();

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    React.useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-119.890410, 35.212260],
            zoom: 14
        });

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
                            'features': [
                                {
                                    // feature for Mapbox SF
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-119.890410, 35.212260]
                                    }
                                }
                            ]
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


    }, [])


    const drawerContent = (
        <Box sx={{ bgcolor: 'white.paper', height: '100vh', m: 0, overflow: 'none', zIndex: 500 }}>
            <List disablePadding sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <ListItem disablePadding sx={{ p: '12px' }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                    <Typography fontSize={'18px'}>Information</Typography>
                </ListItem>

                <ListItem sx={{ p: '16.5px 24px' }}>
                    <TextField id="standard-basic" placeholder="Add a description" variant="standard" sx={{ width: '100%' }} multiline />
                </ListItem>

                <ListItem sx={{ p: '14px 24px' }}>
                    <Typography fontSize={'11px'} fontFamily={'Roboto, Arial, sans-serif'} fontWeight={'550'} textColor="rgb(95,99,104)" letterSpacing={'0.8px'}>DETAILS</Typography>
                </ListItem>

                <DenseInfoListItem icon={<TodayIcon />} majorLabel="May 20" minorLabel={["Sat, 7:38 PM", "GMT-07:00"]} />

                <DenseInfoListItem icon={<CameraOutlinedIcon />} majorLabel="Google Pixel 3a XL" minorLabel={["ƒ/2", "1/60", "2.51mm", "ISO71"]} />

                <DenseInfoListItem icon={<ImageOutlinedIcon />} majorLabel="PXL_20230521_023815098.jpg" minorLabel={["8MP", "2448 × 3264"]} />

                <DenseInfoListItem icon={<LocationOnOutlinedIcon />} majorLabel="California" />

                <div ref={mapContainer} className="map-container" style={{ maxHeight: '360px' }} />
            </List>
        </Box>
    );
    return (
        <Box>
            <IconButton onClick={handleDrawerToggle}>
                <InfoIcon sx={{ color: 'white' }} />
            </IconButton>
            <Drawer
                variant="persistent"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                anchor="right"
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '100%', sm: 360 } },
                }}
            >
                {drawerContent}
            </Drawer>
        </Box>
    )
}