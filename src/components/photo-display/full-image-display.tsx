import { HtmlPhoto } from '@/models/photo-display';
import { ImageToolbar } from './image-toolbar';
import './styles/full-image-display.css'
import Image from "next/image";
import { fetchPhoto } from '@/hooks/fetch-photo';
import React from 'react';
import { Box, Button, Typography, styled, useTheme } from '@mui/material';


export function FullImageDisplay({ photo }: { photo: HtmlPhoto }) {
    const theme = useTheme();


    const [drawerOpen, setDrawerOpen] = React.useState(false);



    return (
        <Box style={{ backgroundColor: 'green', height: '100vh' }}>
            <ImageToolbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}></ImageToolbar>

            <Box sx={{ marginRight: { xs: 0, sm: drawerOpen ? '360px' : 0 }, transition: 'margin 0.2s', height: '100%' }}>


                <div style={{ width: '50vw', height: '80%', backgroundColor: 'red', margin: 'auto' }}>
                    
                </div>

            </Box>

            {/*position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
            
            <Image loader={() => fetchPhoto(photo.photoId)} unoptimized={true} src={fetchPhoto(photo.photoId)} width={0} height={0} sizes="100vw" style={{ width: 'auto', maxWidth: '80vw', height: 'auto', marginLeft: 'auto' }} alt=""></Image>
            */}
        </Box>
    );
}