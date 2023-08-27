import Navbar from "@/components/shared/navbar";
import "../styles/globals.css";
import { Box } from "@mui/material";
import React from "react";
import { FullImageDisplay } from "@/components/photo-display/full-image-display";
import TopBar from "@/components/dashboard/topbar";

import { useRouter } from "next/router";
import ContextLayout from "./context-layout";
import { VisiblePhotoContentType, VisiblePhotoContext } from "@/contexts/visible-photo-context";

export default function MyApp({ Component, pageProps, ...appProps }: {Component: any, pageProps: any,[key: string]: any }) {
  
  const [visiblePhotoContent, setVisiblePhotoContent] = React.useState<VisiblePhotoContentType>({
    photo: null,
    isVisible: false,
});

  React.useEffect(() => {
    /*if (!userContext.isUserAuthenticated()) {
      router.push("/login");
    }
    */
  }, []);

  const getContent = () => {

    if ([`/404`, "/login"].includes(appProps.router.pathname)) {
      return (
          <Component {...pageProps} />
      );
    }

    /*if (!userContext.isUserAuthenticated()) {
      return <></>
    }*/

    return (
      <>
        {
          <FullImageDisplay
            data={visiblePhotoContent}
            setData={setVisiblePhotoContent}
          ></FullImageDisplay>
          }

        <Box sx={{ display: "flex" }}>
          {/* <Navbar />*/}
          <Navbar />
          <TopBar />
          {/*Main content*/}
          <Box
            sx={{
              flexGrow: 1,
              marginTop: "64px",
              width: { sm: `calc(100% - 175px)` },
            }}
          >
            <Component {...pageProps} />
          </Box>
        </Box>
      </>
    );
  };

  return <ContextLayout><VisiblePhotoContext.Provider value={{visiblePhotoContent, setVisiblePhotoContent}}>{getContent()}</VisiblePhotoContext.Provider></ContextLayout>;
}
