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
        <Box style={{ backgroundColor: 'white', height: '100vh' }}>
            <ImageToolbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}></ImageToolbar>

            <Box sx={{ marginRight: { xs: 0, sm: drawerOpen? '360px': 0 }, transition: 'margin 0.2s'}}>
                
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
                    dolor purus non enim praesent elementum facilisis leo vel. Risus at
                    ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
                    quisque non tellus. Convallis convallis tellus id interdum velit
                    laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
                    adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                    integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
                    eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
                    quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                    vivamus at augue. At augue eget arcu dictum varius duis at consectetur
                    lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
                    faucibus et molestie ac.
                
                {/*<Image loader={() => fetchPhoto(photo.photoId)} unoptimized={true} src={fetchPhoto(photo.photoId)} width={0} height={0} sizes="100vw" style={{ width: '95%', height: 'auto', margin: 'auto' }} alt=""></Image>*/}
            </Box>

            {/*position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', */}
        </Box>
    );
}