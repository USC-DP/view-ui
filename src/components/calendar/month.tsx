import { Box, Button, Grid, Typography } from "@mui/material";
import './styles/month.css'
import React from "react";
import { MonthNumber, monthMap } from "./models/models";
import { Day } from "./components/day";



export default function Month({ month, year }: { month: MonthNumber, year: number }) {

    const [monthDays, setMonthDays] = React.useState<number>();
    const [startMonthOffset, setStartMonthOffset] = React.useState<number>();

    React.useEffect(() => {
        setMonthDays((new Date(year, month, 0)).getDate());
        setStartMonthOffset((new Date(year, month - 1)).getDay());
    }, [month, year]);

    return (
            <>
                <Typography className="month-label">{monthMap[month]}</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto auto' }}>
                    <Typography className="grid-item day-of-week-label">Su</Typography>
                    <Typography className="grid-item day-of-week-label">Mo</Typography>
                    <Typography className="grid-item day-of-week-label">Tu</Typography>
                    <Typography className="grid-item day-of-week-label">We</Typography>
                    <Typography className="grid-item day-of-week-label">Th</Typography>
                    <Typography className="grid-item day-of-week-label">Fr</Typography>
                    <Typography className="grid-item day-of-week-label">Sa</Typography>
                    {Array.from(Array(startMonthOffset)).map((_, idx) => <div className="grid-item date-label" key={idx}></div>)}
                    {
                        Array.from(Array(monthDays)).map((i, index) => {
                            return (
                                <Day label={(index + 1).toString()} key={index}></Day>
                            )
                        })
                    }
                </Box>
            </>

    )
}