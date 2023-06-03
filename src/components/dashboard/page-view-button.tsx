import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import { styled } from '@mui/material/styles'

const MyToggleButton = styled(ToggleButton)({
    "&.MuiToggleButton-root": {
        width: '7em',
        textTransform: 'none',
        height: '2.5em',
        fontSize: '14px',
        color: 'black',
    },

    "&.Mui-selected, &.Mui-selected:hover": {
        color: 'white',
        backgroundColor: '#F29047',
    },
    '&.MuiToggleButton-root:not(.Mui-selected):hover': {
        // Style for on hover
        backgroundColor: '#fad4b7',
        color: 'black'
    }
});


interface PageViewButtonProps {
    pageView: string,
    onPageViewChange: (newPageView: string) => void;
}

export default function PageViewButton({pageView, onPageViewChange} : PageViewButtonProps) {


    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        if (newAlignment !== null) {
            onPageViewChange(newAlignment);
        }
    };


    return (
        <ToggleButtonGroup
            exclusive
            color='primary'
            value={pageView}
            onChange={handleChange}
        sx={{display: 'flex'}}>
            <MyToggleButton value={'calendar'}>Calendar</MyToggleButton>
            <MyToggleButton value={'list'}>List</MyToggleButton>
            <MyToggleButton value={'map'}>Map</MyToggleButton>
        </ToggleButtonGroup>
    );
}