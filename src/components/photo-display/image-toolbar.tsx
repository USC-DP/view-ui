import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { ImageInfo } from "../shared/image-info";
import "./styles/image-toolbar.css"
import { flushSync } from "react-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import InfoIcon from '@mui/icons-material/Info';
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import React from "react";
//import useViewTransitionRouter from "@/transition-lib/use-transition-router";
import Link from "next/link";
import Photo from "@/pages/view/[id]";
import { useRouter } from "next/router";
import useViewTransitionRouter from "@/transition-lib/use-transition-router";

export function ImageToolbar({ drawerOpen, setDrawerOpen }: { drawerOpen: boolean, setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const { visiblePhotoContent, setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

    const router = useViewTransitionRouter();


    function click() {
        router.push("/dashboard/");
    }

    return (
        <Box sx={{ position: 'absolute', marginRight: { xs: 0, sm: drawerOpen ? '360px' : 0, backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,.4))' }, transition: 'margin 0.2s', right: 0, left: 0, zIndex: '1400' }}>
            <Toolbar variant="dense" sx={{ backgroundColor: 'none', padding: '8px' }}>
                <IconButton onClick={() => click()}>
                    <ArrowBackIcon sx={{ color: 'white' }} />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}></Box>
                <ImageInfo drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}></ImageInfo>
            </Toolbar>
        </Box>
    );
}