import { fetchSegments } from "@/hooks/fetch-segment";
import { MediaBox, ViewSegment, config } from "@/models/photo-display";
import React from "react";
import MediaTile from "./media-tile";

var justifiedLayout = require('justified-layout')

interface SegmentPosType {
    containerHeight: number,
    top: number
}

export default function MediaSegment({ segment, mediaBoxes, segmentPos }: { segment: ViewSegment, mediaBoxes: MediaBox[], segmentPos: SegmentPosType }) {

    
    React.useEffect(() => {
        /*const sizes = segment.media.map(image => image.metadata);
        let layout = justifiedLayout(sizes, config);
        setContainerHeight(layout.containerHeight)
        setMediaBoxes(layout.boxes);*/
        //console.log(segment);
        //console.log(segmentPos.top);

    }, [])

    return (
        <div className="segment" style={{ position: 'absolute', backgroundColor: 'blue', width: window.innerWidth - 175, height: segmentPos.containerHeight, top: segmentPos.top}}>
            {segment && mediaBoxes && mediaBoxes.map((i, index) => {
                return (
                    <MediaTile key={segment.media[index].mediaId} mediaBox={i} media={segment.media[index]}></MediaTile>
                );
            })}
        </div>
    );
}