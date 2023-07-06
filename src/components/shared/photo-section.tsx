import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display";
import { Box, Typography } from "@mui/material";
import React from "react";
import { naiveLayout } from "@/algorithms/naive-layout";
import ImageListItem from "./image";

import { fetchPhotos } from "@/hooks/fetchPhotos";
import useSWR from "swr";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import { fetchPhotoData } from "@/hooks/fetch-photo-data";
import { fetchPhoto } from "@/hooks/fetch-photo";
import { useRouter } from "next/router";
import { ViewablePhotosContext } from "@/contexts/viewable-photos-context";
import { PreviousContentContext } from "@/contexts/previous-content-context";
//import useViewTransitionRouter from "@/transition-lib/use-transition-router";

const fetcher = (id: string) => fetchPhotos(id).then((d) => { return d })

export default function PhotoSection() {


    const { viewablePhotos, setViewablePhotos } = React.useContext(ViewablePhotosContext);

    const { previousContent } = React.useContext(PreviousContentContext);

    const { data, error, isLoading } = useSWR("095785b9-d07b-4307-9e7f-c16eae55526a", fetcher)




    React.useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            /*setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });*/
            console.log(viewablePhotos);

            let viewWidth = window.innerWidth - 150;

            if (data && viewWidth != viewablePhotos.width) {
                let htmlPhotoRowsData = naiveLayout(data.slice(0, 4), viewWidth);
                setViewablePhotos((i) => ({
                    ...i,
                    photoRows: htmlPhotoRowsData,
                    width: viewWidth
                }))
            }

        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

    }, [data]); // Empty array ensures that effect is only run on mount

    return (
        <>
            <Typography sx={{ fontSize: '24px' }}>Big Sur</Typography>
            <Typography sx={{ fontSize: '18px' }}>Mon, May 24</Typography>

            <div style={{

            }}>
                {/*<ImageListItem photo={{ photoId: "421d99a7-b4c8-46e7-940b-1020f4c3fc9b", width: 500, height: 200 }} viewPhoto={viewPhoto}></ImageListItem>*/}
                {
                    viewablePhotos.photoRows && viewablePhotos.photoRows.map((photoRow) => {
                        return (
                            <div key={photoRow.id + "a"}>
                                <Box sx={{ display: 'flex' }} key={photoRow.id}>
                                    {
                                        photoRow.row.map((photo) => {
                                            return (
                                                <ImageListItem photo={photo} key={photo.photoId}></ImageListItem>
                                            )
                                        })
                                    }
                                </Box>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}