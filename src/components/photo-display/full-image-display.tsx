
import { HtmlPhoto } from '@/models/photo-display';
import { ImageToolbar } from './image-toolbar';
import './styles/full-image-display.css'
import Image from "next/image";
import React from 'react';
import { Box, Button, Typography, styled, useTheme } from '@mui/material';
import { VisiblePhotoContentType, VisiblePhotoContext } from '@/contexts/visible-photo-context';
import { relative } from 'path';
import { PreviousContentContext } from '@/contexts/previous-content-context';
import api from '@/api/api';


export function FullImageDisplay({ data, setData }: { data?: VisiblePhotoContentType, setData?: React.Dispatch<React.SetStateAction<VisiblePhotoContentType>> }) {
    const theme = useTheme();

    const { visiblePhotoContent, setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

    React.useEffect(() => {
        if (visiblePhotoContent.photo?.photoId) {
            api.fetchPhotoData(visiblePhotoContent.photo?.photoId).then(
                d => {
                    setVisiblePhotoContent(prev => ({
                        ...prev,
                        photo: d
                    }))
                }
            )
        }
    }, [visiblePhotoContent.photo?.photoId])


    const [drawerOpen, setDrawerOpen] = React.useState(false);


    return (
        <>
            {visiblePhotoContent.isVisible && visiblePhotoContent?.photo &&
                <Box className={`overlay ${visiblePhotoContent.isVisible ? "" : ""}`}>
                    <div className={`background ${visiblePhotoContent.isVisible ? 'background-active' : 'background-active'}`}></div>

                    <ImageToolbar data={visiblePhotoContent.photo} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}></ImageToolbar>

                    <Box sx={{ marginRight: { xs: 0, sm: drawerOpen ? '360px' : 0 }, transition: 'margin 0.2s', height: '100%' }}>


                        <div className='container' style={{}}>
                            {visiblePhotoContent.photo !== null && visiblePhotoContent.isVisible
                                &&
                                <Image
                                    unoptimized={true}
                                    src={api.fetchPhotoUrl(visiblePhotoContent.photo.photoId)}
                                    width={0} height={0} sizes="100vw"
                                    className={`image`}
                                    alt=""
                                    style={{
                                        viewTransitionName: "i"
                                    }}
                                ></Image>}
                        </div>
                    </Box>

                </Box>
            }
        </>
    );
}