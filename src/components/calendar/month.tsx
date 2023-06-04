import { Box, Grid, Typography } from "@mui/material";
import './styles/month.css'
import React from "react";
import { MonthNumber, monthMap } from "./models/models";



export default function Month({ month, year }: { month: MonthNumber, year: number }) {
    
    const [monthDays, setMonthDays] = React.useState<number>();
    const [startMonthOffset, setStartMonthOffset] = React.useState<number>();

    React.useEffect(() => {
        setMonthDays((new Date(year, month, 0)).getDate());
        console.log(new Date(year, month - 1).getDay())
        setStartMonthOffset((new Date(year, month - 1)).getDay());
    }, [month, year])

    return (
        <Box sx={{ width: '5em' }}>
            <Typography variant="h6">{monthMap[month]}</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto auto' }}>
                <Typography className="grid-item">Su</Typography>
                <Typography className="grid-item">Mo</Typography>
                <Typography className="grid-item">Tu</Typography>
                <Typography className="grid-item">We</Typography>
                <Typography className="grid-item">Th</Typography>
                <Typography className="grid-item">Fr</Typography>
                <Typography className="grid-item">Sa</Typography>
                {Array.from(Array(startMonthOffset)).map(_ => <div className="grid-item date-label"></div>)}
                {
                    Array.from(Array(monthDays)).map((i, index) => {
                    return (
                        <Typography className="grid-item date-label">{ index + 1}</Typography>
                    )
                })
                }
            </Box>
        </Box>
    )
}