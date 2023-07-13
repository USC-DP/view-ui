import Navbar from "@/components/shared/navbar";
import "../styles/globals.css";
import { Box, ThemeProvider } from "@mui/material";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import React from "react";
import { FullImageDisplay } from "@/components/photo-display/full-image-display";
import {
  ViewablePhotosContext,
  ViewablePhotosType,
} from "@/contexts/viewable-photos-context";
import { PreviousContentContext } from "@/contexts/previous-content-context";
import TransitionProvder from "@/transition-lib/transition-provider";
import FullPhotoDsiplay from "@/components/photo-display/full-photo-display-test";
import TopBar from "@/components/dashboard/topbar";

export default function MyApp({ Component, pageProps, ...appProps }) {
  const [visiblePhotoContent, setVisiblePhotoContent] = React.useState({
    photo: null,
    isVisible: false,
  });

  const [viewablePhotos, setViewablePhotos] = React.useState({
    photoRows: [],
    width: 0,
  });

  const [previousContent, setPreviousContent] = React.useState({
    photoId: null,
    scrollPosition: 0,
  });

  const getContent = () => {
    if ([`/404`, "/login"].includes(appProps.router.pathname)) {
      return <Component {...pageProps} />;
    }

    return (
      
        <VisiblePhotoContext.Provider
          value={{ visiblePhotoContent, setVisiblePhotoContent }}
        >
          <ViewablePhotosContext.Provider
            value={{ viewablePhotos, setViewablePhotos }}
          >
            <PreviousContentContext.Provider
              value={{ previousContent, setPreviousContent }}
            >
              {
                <FullImageDisplay
                  data={visiblePhotoContent}
                  setVisiblePhotoContent={setVisiblePhotoContent}
                ></FullImageDisplay>
              }

              <Box sx={{ display: "flex" }}>

              {/* <Navbar />*/}
                <Navbar />
                <TopBar/>
                {/*Main content*/}
                <Box
                sx={{
                  flexGrow: 1,
                  marginTop: '64px',
                    width: { sm: `calc(100% - 175px)` }
                  }}
              >
                  <Component {...pageProps} />
                </Box>
              </Box>
            </PreviousContentContext.Provider>
          </ViewablePhotosContext.Provider>
        </VisiblePhotoContext.Provider>
    );
  };

  return <>{getContent()}</>;
}
