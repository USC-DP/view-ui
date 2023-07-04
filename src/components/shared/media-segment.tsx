import { fetchSegments } from "@/hooks/fetch-segment";
import { MediaBox, Segment, config } from "@/models/photo-display";
import React from "react";
import MediaTile from "./media-tile";

var justifiedLayout = require('justified-layout')

interface SegmentPosType {
    containerHeight: number,
    top: number
}

export default function MediaSegment({ segment, mediaBoxes, segmentPos }: { segment: Segment, mediaBoxes: MediaBox[], segmentPos: SegmentPosType }) {

    
    React.useEffect(() => {
        /*const sizes = segment.media.map(image => image.metadata);
        let layout = justifiedLayout(sizes, config);
        setContainerHeight(layout.containerHeight)
        setMediaBoxes(layout.boxes);*/
        /*console.log(segment.media[index].imageId);*/
        //console.log(segmentPos.top);

    }, [])

    return (
        <div className="segment" style={{ position: 'absolute', backgroundColor: 'blue', width: config.containerWidth, height: segmentPos.containerHeight, top: segmentPos.top}}>
            {segment && mediaBoxes && mediaBoxes.map((i, index) => {
                return (
                    <MediaTile key={segment.media[index].imageId} mediaBox={i}></MediaTile>
                );
            })}
        </div>
    );
}