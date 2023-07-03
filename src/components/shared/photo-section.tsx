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

export default function PhotoSection(/*{ photoRows }: { photoRows: HtmlPhoto[][] }*/) {

    //const router = useViewTransitionRouter();

    const { setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

    const { viewablePhotos, setViewablePhotos } = React.useContext(ViewablePhotosContext);

    const { previousContent } = React.useContext(PreviousContentContext);

    //const [windowSize, setWindowSize] = React.useState<window>();

    const { data, error, isLoading } = useSWR("095785b9-d07b-4307-9e7f-c16eae55526a", fetcher)

    const viewPhoto = (photoId: string) => {

        //@ts-ignore
        /*document.startViewTransition(async () => {
            fetchPhotoData(photoId).then(
                (d) => {
                    setVisiblePhotoContent((i) => ({
                        ...i,
                        isVisible: true,
                        photo: d,
                    }))
                }
            )
        })*/
        
        //router.push("/view/" + photoId);
    }

    React.useEffect(() => {
        window.scrollTo(0, previousContent.scrollPosition)
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
            console.log(viewablePhotos);

            if (data && viewablePhotos.photoRows.length < 10) {
                console.log("loaded data");
                let htmlPhotoRowsData = naiveLayout(data, window.innerWidth - 200);
                setViewablePhotos((i) => ({
                    ...i,
                    photoRows: htmlPhotoRowsData
                }))
            }

        }

        // Add event listener
        //window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

    }, [data]); // Empty array ensures that effect is only run on mount

    return (
        <>
            <Typography sx={{ fontSize: '24px' }}>Big Sur</Typography>
            <Typography sx={{ fontSize: '18px' }}>Mon, May 24</Typography>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {/*<ImageListItem photo={{ photoId: "421d99a7-b4c8-46e7-940b-1020f4c3fc9b", width: 500, height: 200 }} viewPhoto={viewPhoto}></ImageListItem>*/}
                {
                    viewablePhotos.photoRows && viewablePhotos.photoRows.map((photoRow) => {
                        return (
                            <Box sx={{ display: 'inline' }} key={photoRow.id}>
                                {
                                    photoRow.row.map((photo) => {
                                        return (
                                            <ImageListItem photo={photo} key={photo.photoId} viewPhoto={viewPhoto}></ImageListItem>
                                        )
                                    })
                                }
                            </Box>
                        )
                    })
                }
            </div>

            {/*
                memoizedPhotoRows && memoizedPhotoRows.map((item, rIdx) => {
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
            */}

        </>
    )
}