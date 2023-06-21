import { Box, ListItem, ListItemButton, ListItemIcon, List, ListItemText } from "@mui/material";
import Typography from '@mui/joy/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useRouter } from "next/router";

import PhotoIcon from '@mui/icons-material/Photo';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsIcon from '@mui/icons-material/Settings';
import React from "react";

export default function Navbar() {

    const router = useRouter();

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    
    const handleNav = (url: string) => {
        router.push(url)
    }

    const drawerContent = (
        <Box sx={{ bgcolor: 'white.paper', height: '100vh', m: 0, overflow: 'none' }}>
            <List disablePadding sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNav('/dashboard')}>
                        <Typography level="h5">All Media</Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ pl: '30px' }}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <PhotoIcon sx={{ color: '#1a1a1a' }} />
                        </ListItemIcon>
                        <ListItemText primary="Photos" primaryTypographyProps={{ variant: 'h6' }}>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ pl: '30px' }}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <VideocamIcon sx={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="Videos" primaryTypographyProps={{ variant: 'h6' }}>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                <Box sx={{ mt: { sm: '0', md: 'clamp(0em, 5em, 20vh)' }, transition: 'margin 0.2s' }}>
                    <ListItem disablePadding sx={{ m: 0 }}>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <SearchIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Explore" primaryTypographyProps={{ variant: 'h6' }}>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <AutoStoriesIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Albums" primaryTypographyProps={{ variant: 'h6' }}>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Box>

                <Box sx={{ mt: { sm: '0', md: 'clamp(0em, 5em, 20vh)' }, transition: 'margin 0.2s' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <ExtensionIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Extensions" primaryTypographyProps={{ variant: 'h6' }}>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Box>

                <ListItem disablePadding sx={{ mt: 'auto' }}>
                    <ListItemButton onClick={() => handleNav('/settings')}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <SettingsIcon sx={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="Settings" primaryTypographyProps={{ variant: 'h6' }}>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );
    return (
        <Box sx={{ width: { sm: 175 }, flexShrink: { sm: 0 } }}>
            <IconButton sx={{position: 'absolute'}} onClick={handleDrawerToggle}>
                <MenuIcon />

            </IconButton>
            <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 175 },
                }}
            >
                {drawerContent}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 175 },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </Box>
    )
}