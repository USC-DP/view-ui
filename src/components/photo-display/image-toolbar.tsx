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
import { HtmlPhoto } from "@/models/photo-display";
import api from "@/api/api";

export function ImageToolbar({ data, drawerOpen, setDrawerOpen }: { data: HtmlPhoto, drawerOpen: boolean, setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const { visiblePhotoContent, setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

    const [mediaCategories, setMediaCategories] = React.useState<string[]>([]);

    const mediaCategoriesRef = React.useRef<string[]>(mediaCategories);


    React.useEffect(() => {
        mediaCategoriesRef.current = mediaCategories;
    }, [mediaCategories]);

    const [isTyping, setIsTyping] = React.useState<boolean>(false);
    const isTypingRef = React.useRef<boolean>(isTyping);


    React.useEffect(() => {
        isTypingRef.current = isTyping;
    }, [isTyping]);

    const router = useViewTransitionRouter();

    React.useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (!isTypingRef.current && event.key === 'i') {
                setDrawerOpen((i) => !i);
            }
            else if (event.key === "Escape") {
                click();
            }
        }

        window.addEventListener('keydown', handleKeyPress);


        api.getMediaCategories(data.photoId).then(
            d => {
                let arr = [];
                for (const v of d) {
                    arr.push(v.tag);
                }
                setMediaCategories(arr);
            }
        );

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, [])


    function click() {
        api.postMediaCategories(data.photoId, mediaCategoriesRef.current);

        document.startViewTransition(() => {
            flushSync(() => {
                setVisiblePhotoContent((i) => ({
                    isVisible: false,
                    photo: null
                }))
            })
        })
        //router.push("/dashboard/");
    }

    return (
        <Box sx={{ position: 'absolute', marginRight: { xs: 0, sm: drawerOpen ? '360px' : 0, backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,.4))' }, transition: 'margin 0.2s', right: 0, left: 0, zIndex: '1400' }}>
            <Toolbar variant="dense" sx={{ backgroundColor: 'none', padding: '8px' }}>
                <IconButton onClick={() => click()}>
                    <ArrowBackIcon sx={{ color: 'white' }} />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}></Box>
                <ImageInfo setIsTyping={setIsTyping} data={data} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} mediaCategories={mediaCategories} setMediaCategories={setMediaCategories}></ImageInfo>
            </Toolbar>
        </Box>
    );
}