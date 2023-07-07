import { fetchSegments } from "@/hooks/fetch-segment";
import { MediaBox, ViewSegment, config } from "@/models/photo-display";
import React from "react";
import MediaTile from "./media-tile";

var justifiedLayout = require('justified-layout')

interface SegmentPosType {
    containerHeight: number,
    top: number
}

export default function MediaSegment({ width, segment, mediaBoxes, segmentPos }: { width: number, segment: ViewSegment, mediaBoxes: MediaBox[], segmentPos: SegmentPosType }) {


    return (
        <div className="segment" style={{ position: 'absolute', /*backgroundColor: 'blue',*/ width: width, height: segmentPos.containerHeight, top: segmentPos.top}}>
            {segment && mediaBoxes && mediaBoxes.map((i, index) => {
                return (
                    <MediaTile key={segment.media[index].mediaId} mediaBox={i} media={segment.media[index]}></MediaTile>
                );
            })}
        </div>
    );
}