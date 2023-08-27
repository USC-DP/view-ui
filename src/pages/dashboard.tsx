import CalendarDisplay from "@/components/dashboard/calendar";
import MapView from "@/components/dashboard/map-view";
import PageViewButton from "@/components/dashboard/page-view-button";
import PhotoList from "@/components/dashboard/photo-list";
import PhotoTest from "@/components/dashboard/photos.test";
import Searchbar from "@/components/dashboard/searchbar";
import TopBar from "@/components/dashboard/topbar";
import Navbar from "@/components/shared/navbar";
import { UserContext, useUserContext } from "@/contexts/user-context";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import { Box } from "@mui/material";
import React from "react";


export default function Dashboard() {

    const [pageView, onPageViewChange] = React.useState<string>('list')

    const { user } = useUserContext();
    


    return (
        <>

            {/*<div style={{position: 'fixed', width: '100%', zIndex: 100, backgroundColor: 'white'}}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '10px', md: 0 }, m: '1em', alignItems: 'center', flexWrap: 'none' }}>

                    <PageViewButton pageView={pageView} onPageViewChange={onPageViewChange} />

                    <Searchbar />

                </Box>
            </div>*/}

            

            {<PhotoList isVisible={pageView == 'list'}></PhotoList>}
            {/*user.searchTerm != '' && <PhotoTest></PhotoTest>*/}
            {<MapView isVisible={pageView == 'map'}></MapView>}
            {<CalendarDisplay isVisible={pageView == 'calendar'}></CalendarDisplay>}

        </>
    )
}