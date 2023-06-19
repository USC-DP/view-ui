import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display";
import { Box, Typography } from "@mui/material";
import { NextPageContext } from "next";
//import photoData from '../../../public/json/images.json';
import React, { useEffect } from "react";
import { naiveLayout } from "@/algorithms/naive-layout";
import Image from "./image";
import ImageListItem from "./image";

import axios from 'axios'
import { fetchPhotos } from "@/hooks/fetchPhotos";


/*PhotoSection.getInitialProps = async (ctx: NextPageContext) => {
    return { photoRows:  }
}*/


interface window {
    width: number,
    height: number
}

export default function PhotoSection(/*{ photoRows }: { photoRows: HtmlPhoto[][] }*/) {

    const [photoRows, setPhotoRows] = React.useState<HtmlPhotoRow[]>();
    const [photoData, setPhotoData] = React.useState<HtmlPhoto[] | any>();

    //const [windowSize, setWindowSize] = React.useState<window>();
    
    React.useEffect(() => {
        fetchPhotos("1").then((d) => {
            setPhotoData(d);
        })
        /*axios.get('http://localhost:5000/photos/from-owner/1')
        .then((data) => setPhotoData(data.data))*/
    }, [])

    React.useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            /*setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });*/

            if (photoData) {
                setPhotoRows(naiveLayout(photoData, window.innerWidth - 200))
            }

        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

    }, [photoData]); // Empty array ensures that effect is only run on mount


    return (
        <>
            <Typography sx={{ fontSize: '24px' }}>Big Sur</Typography>
            <Typography sx={{ fontSize: '18px' }}>Mon, May 24</Typography>

            {
                photoRows && photoRows.map((item, rIdx) => {
                    return (
                        <Box sx={{ display: 'inline' }} key={item.id}>
                            {
                                item.row.map((photo, pIdx) => {
                                    return (
                                        <ImageListItem photo={photo} key={photo.photoId}></ImageListItem>
                                    )
                                })
                            }
                            <br />
                        </Box>
                    )
                })
            }

        </>
    )
}