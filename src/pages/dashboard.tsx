import CalendarDisplay from "@/components/dashboard/calendar";
import MapView from "@/components/dashboard/map-view";
import PageViewButton from "@/components/dashboard/page-view-button";
import PhotoList from "@/components/dashboard/photo-list";
import Searchbar from "@/components/dashboard/searchbar";
import { FullImageDisplay } from "@/components/photo-display/full-image-display";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import { Box } from "@mui/material";
import React from "react";


export default function Dashboard() {

    const [pageView, onPageViewChange] = React.useState<string>('list')


    return (
            
            
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '10px', md: 0 }, m: '1em', alignItems: 'center', flexWrap: 'none' }}>

                        <PageViewButton pageView={pageView} onPageViewChange={onPageViewChange} />

                        <Searchbar />

                    </Box>


                    {<PhotoList isVisible={pageView == 'list'}></PhotoList>}
                    {<MapView isVisible={pageView == 'map'}></MapView>}
                    {<CalendarDisplay isVisible={pageView == 'calendar'}></CalendarDisplay>}

                </div>
    )
}