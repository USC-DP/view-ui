import { Grid } from "@mui/material";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
  

export default function Calendar() {
    return (
        
            {/*<Grid container spacing={2} columns={{ md: 12 }}>
                {Array.from(Array(12)).map((_, index) => (
                    <Grid item md={3} key={index}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar views={['day']}/>
                        </LocalizationProvider>        
                    </Grid>
                ))
                }
            </Grid>*/}
        
    )
}