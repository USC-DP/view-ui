import Navbar from "@/components/shared/navbar";
import "../styles/globals.css";
import { Box } from "@mui/material";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import React, { useTransition } from "react";
import { FullImageDisplay } from "@/components/photo-display/full-image-display";
import { ViewablePhotosContext, ViewablePhotosType } from "@/contexts/viewable-photos-context";
import { PreviousContentContext } from "@/contexts/previous-content-context";
import TransitionProvder from "@/transition-lib/transition-provider";
import FullPhotoDsiplay from "@/components/photo-display/full-photo-display-test";



export default function MyApp({ Component, pageProps, ...appProps }) {

  const [visiblePhotoContent, setVisiblePhotoContent] = React.useState({
    photo: {
      photoId: "421d99a7-b4c8-46e7-940b-1020f4c3fc9b",
      width: 500,
      height: 500
    },
    isVisible: true,
  });

  const [viewablePhotos, setViewablePhotos] = React.useState({
    photoRows: [],
    width: 0
  });

  const [previousContent, setPreviousContent] = React.useState({
    photoId: null,
    scrollPosition: 0
  })



  const getContent = () => {

    if ([`/404`].includes(appProps.router.pathname)) {
      return (
  
        <Component {...pageProps} />

      )
    }

    return (
      <TransitionProvder>
      <VisiblePhotoContext.Provider value={{visiblePhotoContent, setVisiblePhotoContent}}>
        <ViewablePhotosContext.Provider value={{ viewablePhotos, setViewablePhotos }}>
            <PreviousContentContext.Provider value={{ previousContent, setPreviousContent }}>
            {/*<FullImageDisplay data={visiblePhotoContent} setVisiblePhotoContent={setVisiblePhotoContent}></FullImageDisplay>*/}
            {/*<FullPhotoDsiplay data={visiblePhotoContent} setVisiblePhotoContent={setVisiblePhotoContent}></FullPhotoDsiplay>*/}
                  <Box sx={{ display: "flex" }}>
                {/* <Navbar />*/}
                <Navbar/>

            {/*Main content*/}
            <Box
              sx={{
                flexGrow: 1,
                width: { sm: `calc(100% - 175px)` },
                height: "100vh",
              }}
              >

                  <Component {...pageProps} />
              {/*<Box sx={{ mt: '1em', ml: {xs: 0, sm: '1em'}, mr: {xs: 0, sm: '1em'} }}></Box>*/}
            </Box>
            </Box>
            </PreviousContentContext.Provider>
          </ViewablePhotosContext.Provider>
        </VisiblePhotoContext.Provider>
        </TransitionProvder>
    );
  };

  return <>{getContent()}</>;
}
