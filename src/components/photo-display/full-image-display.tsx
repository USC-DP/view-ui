
import { HtmlPhoto } from '@/models/photo-display';
import { ImageToolbar } from './image-toolbar';
import './styles/full-image-display.css'
import Image from "next/image";
import { fetchPhoto } from '@/hooks/fetch-photo';
import React from 'react';
import { Box, Button, Typography, styled, useTheme } from '@mui/material';
import { VisiblePhotoContentType, VisiblePhotoContext } from '@/contexts/visible-photo-context';
import { relative } from 'path';
import { PreviousContentContext } from '@/contexts/previous-content-context';


export function FullImageDisplay({ data, setData }: { data: VisiblePhotoContentType, setData: React.Dispatch<React.SetStateAction<VisiblePhotoContentType>> }) {
    const theme = useTheme();

    const { visiblePhotoContent } = React.useContext(VisiblePhotoContext);

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <>
            { data.isVisible && 
                <Box className={`overlay ${data.isVisible ? "" : ""}`}>
                    <div className={`background ${data.isVisible ? 'background-active' : 'background-active'}`}></div>

                    <ImageToolbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}></ImageToolbar>

                    <Box sx={{ marginRight: { xs: 0, sm: drawerOpen ? '360px' : 0 }, transition: 'margin 0.2s', height: '100%' }}>


                        <div className='container' style={{}}>
                            {data.photo !== null && data.isVisible
                                &&
                                <Image
                                    unoptimized={true}
                                    src={fetchPhoto(data.photo.photoId)}
                                    width={0} height={0} sizes="100vw"
                                    className={`image`}
                                    alt=""
                                    style={{
                                        viewTransitionName: 'a' + data.photo.photoId
                                    }}
                                ></Image>}
                        </div>
                    </Box>

                </Box>
            }
        </>
    );
}