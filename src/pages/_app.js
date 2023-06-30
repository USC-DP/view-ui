import Navbar from "@/components/shared/navbar";
import "../styles/globals.css";
import { Box } from "@mui/material";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import React from "react";
import { FullImageDisplay } from "@/components/photo-display/full-image-display";
import { ViewablePhotosContext, ViewablePhotosType } from "@/contexts/viewable-photos-context";

export default function MyApp({ Component, pageProps, ...appProps }) {

  const [visiblePhotoContent, setVisiblePhotoContent] = React.useState({
    photo: null,
    isVisible: false,
  });

  const [viewablePhotos, setViewablePhotos] = React.useState({
    photoRows: []
  });

  /*React.useEffect(() => {
    if (![`/view/[id]`, `/404`].includes(appProps.router.pathname)) {
      setVisiblePhotoContent((i) => ({
        ...i,
        isVisible: false,
      }))
    }

    window.addEventListener('popstate', (e) => {

      setVisiblePhotoContent((i) => ({
        ...i,
        isVisible: false,
      }))
    })
    
  }, []);*/

  const getContent = () => {

    if ([`/404`].includes(appProps.router.pathname)) {
      return (
        <VisiblePhotoContext.Provider value={{ visiblePhotoContent, setVisiblePhotoContent }}>
          <ViewablePhotosContext.Provider value={{viewablePhotos, setViewablePhotos}}>
            <Component {...pageProps} />;
          </ViewablePhotosContext.Provider>            
        </VisiblePhotoContext.Provider>

      )
    }

    return (
      <VisiblePhotoContext.Provider value={{visiblePhotoContent, setVisiblePhotoContent}}>
        <ViewablePhotosContext.Provider value={{viewablePhotos, setViewablePhotos}}>
        <Box sx={{ display: "flex" }}>
            <Navbar />

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
          </ViewablePhotosContext.Provider>
      </VisiblePhotoContext.Provider>
    );
  };

  return <>{getContent()}</>;
}
