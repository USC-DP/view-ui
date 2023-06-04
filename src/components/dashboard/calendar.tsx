import { Grid } from "@mui/material";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Month from "../calendar/month";

import { monthNumbers } from "../calendar/models/models";

export default function Calendar({ isVisible }: {isVisible?: boolean}) {



    return (
        <div style={{display: isVisible ? 'block' : 'none'}}>
            <div className="month-grid">
                {
                    monthNumbers.map((i) => (
                        <div className="month-item">
                            <Month month={i} year={2023}></Month>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}