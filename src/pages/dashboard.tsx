import CalendarDisplay from "@/components/dashboard/calendar";
import PageViewButton from "@/components/dashboard/page-view-button";
import PhotoList from "@/components/dashboard/photo-list";
import Searchbar from "@/components/dashboard/searchbar";
import { Box } from "@mui/material";
import React from "react";


export default function Dashboard() {

    const [pageView, onPageViewChange] = React.useState<string>('list')

    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '10px', md: 0 }, mb: '1em', alignItems: 'center', flexWrap: 'none' }}>

                <PageViewButton pageView={pageView} onPageViewChange={onPageViewChange} />

                <Searchbar />

            </Box>

            {<PhotoList isVisible={pageView == 'list'}></PhotoList>}
            {pageView == 'map' && <p>map</p>}
            {<CalendarDisplay isVisible={pageView == 'calendar'}></CalendarDisplay>}
        </>
    )
}