import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import '../styles/month.css'


export function Day({ label, bgColor }: { label: string, bgColor?: string }) {

    const [bagColor, setBagColor] = React.useState<string>();
    
    React.useEffect(() => {
        if (bgColor == undefined) {
            let v = Math.random();
            if (v > 0.9) {
                setBagColor('#74D746')
            }
            else if (v > 0.85) {
                setBagColor('#EAD21A')
            }
            else if (v > 0.75) {
                setBagColor('#F36564')
            }
            //console.log(bgColor);
        }
    }, [bagColor]);

    return (
        <>
            <Button className="grid-item date-label"  disableElevation sx={{ p: 0, minWidth: '25px', borderRadius: '20px', backgroundColor: bagColor ? bagColor : 'white', color: bagColor ? 'white' : 'black', "&:hover": { backgroundColor: bagColor ? bagColor : 'white', color: bagColor ? 'white' : 'black'} }} variant="contained">
                {label}
            </Button>
        </>
    );
}