import { HtmlPhoto } from '@/models/photo-display';
import { ImageToolbar } from './image-toolbar';
import './styles/full-image-display.css'
import Image from "next/image";
import { fetchPhoto } from '@/hooks/fetch-photo';
import React from 'react';
import { Box, Button, Typography, styled, useTheme } from '@mui/material';


export function FullImageDisplay({ photo, isVisible }: { photo: HtmlPhoto, isVisible: boolean }) {
    const theme = useTheme();


    const [drawerOpen, setDrawerOpen] = React.useState(false);



    return (
        
        photo && <Box style={{display: isVisible ? 'block' : 'none', visibility: isVisible ? 'visible' : 'hidden', backgroundColor: 'black', height: '100vh'}}>
            <ImageToolbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}></ImageToolbar>

            <Box sx={{ marginRight: { xs: 0, sm: drawerOpen ? '360px' : 0}, transition: 'margin 0.2s', height: '100%' }}>


                <div className='container'>
                    {/*<Image loader={() => fetchPhoto(photo.photoId)} unoptimized={true} src={fetchPhoto(photo.photoId)} width={0} height={0} sizes="100vw" className='image' style={{ aspectRatio: photo.width / photo.height }} alt=""></Image>*/}
                </div>
            </Box>

        </Box>
    );
}