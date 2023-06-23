import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { ImageInfo } from "../shared/image-info";
import "./styles/image-toolbar.css"

import InfoIcon from '@mui/icons-material/Info';

export function ImageToolbar({drawerOpen, setDrawerOpen}: {drawerOpen: boolean, setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        
        <Box sx={{ marginRight: { xs: 0, sm: drawerOpen ? '360px': 0 }, transition: 'margin 0.2s'}}>
            <Toolbar variant="dense" sx={{ backgroundColor: 'white' }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <ImageInfo drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}></ImageInfo>
            </Toolbar>

        </Box>
    );
}