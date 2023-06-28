import { HtmlPhoto } from '@/models/photo-display';
import { ImageToolbar } from './image-toolbar';
import './styles/full-image-display.css'
import Image from "next/image";
import { fetchPhoto } from '@/hooks/fetch-photo';
import React from 'react';
import { Box, Button, Typography, styled, useTheme } from '@mui/material';
import { VisiblePhotoContentType, VisiblePhotoContext } from '@/contexts/visible-photo-context';
import { relative } from 'path';


export function FullImageDisplay({ data, setData }: { data: VisiblePhotoContentType, setData: React.Dispatch<React.SetStateAction<VisiblePhotoContentType>> }) {
    const theme = useTheme();


    const [drawerOpen, setDrawerOpen] = React.useState(false);



    return (

        <Box className={`overlay ${data.isVisible ? "" : "overlay-hidden"}`}>
            <div className={`background ${data.isVisible ? 'background-active' : 'background-inactive'}`}></div>

            <ImageToolbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}></ImageToolbar>

            <Box sx={{ marginRight: { xs: 0, sm: drawerOpen ? '360px' : 0 }, transition: 'margin 0.2s', height: '100%' }}>


                <div className='container'>

                    {data.photo !== null
                        &&
                        <Image

                            unoptimized={true}
                            src={fetchPhoto(data.photo.photoId)}
                            width={0} height={0} sizes="100vw"
                            className={`image`}
                            style={!data.isVisible ?
                                {
                                    aspectRatio: data.photo.width / data.photo.height,
                                    transform: `translate(calc(${data.xCoord}px - 50vw), calc(${data.yCoord}px - 50vh))`,
                                    maxWidth: data.width,
                                    maxHeight: data.height,
                                } :
                                {
                                    transform: `translate(0,${window.scrollY}px)`,
                                    
                                }}
                            alt=""></Image>}

                </div>
            </Box>

        </Box>
    );
}