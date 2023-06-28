import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { ImageInfo } from "../shared/image-info";
import "./styles/image-toolbar.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import InfoIcon from '@mui/icons-material/Info';
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import React from "react";

export function ImageToolbar({ drawerOpen, setDrawerOpen }: { drawerOpen: boolean, setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const { visiblePhotoContent, setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

    function click() {
        setVisiblePhotoContent((i) => ({
            ...i,
            isVisible: false
        }));
    }

    return (

        <Box sx={{ position: 'absolute', marginRight: { xs: 0, sm: drawerOpen ? '360px' : 0, backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,.4))' }, transition: 'margin 0.2s', right: 0, left: 0, zIndex: '1400' }}>
            <Toolbar variant="dense" sx={{ backgroundColor: 'none', padding: '8px' }}>
                <IconButton onClick={() => click()}>
                    <ArrowBackIcon sx={{color: 'white'}} />
                </IconButton>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <ImageInfo drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}></ImageInfo>
                </Toolbar>
        </Box>
    );
}