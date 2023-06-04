import { Grid } from "@mui/material";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Month from "../calendar/month";


export default function Calendar() {



    return (
        <>
            <Month month={11} year={2023}></Month>
            {/*<Grid container spacing={2} columns={{ md: 12 }}>
            {Array.from(Array(12)).map((_, index) => (
                <Grid item md={3} key={index}>
                    
                </Grid>
            ))
            }
        </Grid>
        */}
        </>
    )
}