import { MediaBox, ViewSegment, config } from "@/models/photo-display";
import React from "react";
import MediaTile from "./media-tile";
import { Typography } from "@mui/material";

var justifiedLayout = require('justified-layout')

interface SegmentPosType {
    containerHeight: number,
    top: number
}

function convertDate(dateString: string) {
    // Define an array of month names
    const dateObj = new Date(dateString);

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Define an array of day names
    const days = [
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
    ];

    // Get the day, month, and year
    const day = days[dateObj.getDay()];
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    // Get the formatted date string
    return `${day}, ${month} ${dateObj.getDate() + 1}, ${year}`;
}


export default function MediaSegment({ width, segment, mediaBoxes, segmentPos }: { width: number, segment: ViewSegment, mediaBoxes: MediaBox[], segmentPos: SegmentPosType }) {


    return (
        <div className="segment" style={{ position: 'absolute', /*backgroundColor: 'blue',*/ width: width, height: segmentPos.containerHeight, top: segmentPos.top + 24 }}>
            <Typography fontSize={24}>{convertDate(segment.segmentId)}</Typography>
            {segment && mediaBoxes && mediaBoxes.map((i, index) => {
                return (
                    <MediaTile key={segment.media[index].mediaId} mediaBox={i} media={segment.media[index]}></MediaTile>
                );
            })}
        </div>
    );
}