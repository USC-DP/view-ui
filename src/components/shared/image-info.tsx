import { Box, ListItem, ListItemButton, List, IconButton } from "@mui/material";
import React from "react";
import Drawer from '@mui/material/Drawer';

import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

import { Typography } from "@mui/joy";

export function ImageInfo({ drawerOpen, setDrawerOpen }: { drawerOpen: boolean, setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };


    const drawerContent = (
        <Box sx={{ bgcolor: 'white.paper', height: '100vh', m: 0, overflow: 'none', zIndex: 500 }}>
            <List disablePadding sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <ListItem disablePadding sx={{padding: '4px'}}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                    <Typography level="h5">Information</Typography>
                </ListItem>

            </List>
        </Box>
    );
    return (
        <Box>
            <IconButton onClick={handleDrawerToggle}>
                <InfoIcon />
            </IconButton>
            <Drawer
                variant="persistent"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                anchor="right"
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {xs: '100%', sm: 360} },
                }}
            >
                {drawerContent}
            </Drawer>
        </Box>
    )
}