import { AppBar, Box, InputBase, Toolbar, Typography, alpha, styled, ThemeProvider } from "@mui/material";
import React from "react";
import PageViewButton from "./page-view-button";

import SearchIcon from '@mui/icons-material/Search';
import viewTheme from "@/theme/primary";


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        //transition: theme.transitions.create('width'),
        width: '30vw',
        /*[theme.breakpoints.down('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },*/
    },
}));


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    //backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: '1px solid black',
    //display: 'flex',
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',

    /*'&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    }*/
    [theme.breakpoints.up('md')]: {
        marginRight: 'auto'
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


export default function TopBar() {
    const [pageView, onPageViewChange] = React.useState<string>("list");

    return (
        <Box sx={{ position: 'sticky', zIndex: 100 }}>
            <AppBar position="static" sx={{ backgroundColor: '#FFF', color: '#000' }} elevation={1}>
                <Toolbar sx={{ display: 'flex',  flexDirection: {xs: 'column-reverse', sm: 'column-reverse', md: 'row'}, alignItems: 'center', justifyContent: 'space-around' }}>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <PageViewButton pageView={pageView} onPageViewChange={onPageViewChange} />

                    {/*<div style={{ width: '100px', backgroundColor: 'green', height: '50px' }}></div>*/}
                </Toolbar>
            </AppBar>
        </Box>
    );
}