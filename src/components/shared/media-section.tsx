import { MediaBox, Section, ViewMedia, ViewSegment } from "@/models/photo-display";
import React from "react";
import MediaSegment from "./media-segment";
import api from "@/api/api";
import { Typography } from "@mui/joy";

var justifiedLayout = require('justified-layout')

interface SegmentPosType {
    containerHeight: number,
    top: number
}

export default function MediaSection({ width, height, section, visible, top, updateSectionHeight }: { width: number, height: number, section: Section, visible: boolean, top: number, updateSectionHeight: (sectionId: string, newHeight: number) => void }) {

    const [segments, setSegments] = React.useState<ViewSegment[]>([]);
    const sectionRef = React.useRef<HTMLDivElement>(null);

    const [mediaBoxes, setMediaBoxes] = React.useState<MediaBox[][]>([]);
    const [segmentPoses, setSegmentPoses] = React.useState<SegmentPosType[]>([]);

    const [fullyInitialized, setfullyInitialized] = React.useState<boolean>(false);

    let lastSectionUpdateTimes: any = {};


    function populateSegments() {
        api.fetchSegments(section.sectionId)
            .then(
                d => {
                    let segmentMargin = 20;
                    let prevSegmentEnd = 20;
                    let segmentPosTemp: SegmentPosType[] = [];
                    let mediaBoxesTemp: MediaBox[][] = [];
                    for (const segment of d) {
                        const sizes = segment.media.map((image: ViewMedia) => ({ width: image.width, height: image.height }));
                        let layout = justifiedLayout(sizes, {
                            boxSpacing: 2,
                            containerPadding: 0,
                            targetRowHeightTolerance: 0.15,
                            containerWidth: width,
                            targetRowHeight: 150,
                        });

                        segmentPosTemp.push(
                            (
                                {
                                    containerHeight: layout.containerHeight,
                                    top: prevSegmentEnd
                                }
                            ))

                        mediaBoxesTemp.push(
                            layout.boxes
                        );
                        prevSegmentEnd += layout.containerHeight + segmentMargin;
                    }
                    updateSectionHeight(section.sectionId, prevSegmentEnd);

                    setSegments(d);

                    setSegmentPoses(segmentPosTemp);
                    setMediaBoxes(mediaBoxesTemp);

                    setfullyInitialized(true);
                }
            )
    }

    React.useEffect(() => {
        if (visible) {
            populateSegments();
        } else {
            if (sectionRef.current) {
                setfullyInitialized(false);
                setSegments([]);
                setSegmentPoses([]);
                setMediaBoxes([]);

            }
        }
    }, [visible, sectionRef, width])

    /*React.useEffect(() => {
        console.log(section.sectionId + " " + top + " " + height);
    }, [height, section, top])*/

    function convertDate(dateString: string) {
        const dateParts = dateString.split('-');
        const year = dateParts[0];
        const month = parseInt(dateParts[1]);
        
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        const formattedDate = `${months[month - 1]}, ${year}`;
        return formattedDate;
      }

    return (
        <>
            <div ref={sectionRef} className="section" id={section.sectionId} style={{ width: width, height: height + 32, position: 'absolute', top: `${top}px`,/*backgroundColor: 'blueviolet'*/ }}>
                <Typography fontSize={32}>{convertDate(section.sectionId)}</Typography>
                {
                    fullyInitialized && segmentPoses && mediaBoxes && segments.length > 0 && segments.map((i, index) => {
                        return (
                            <>
                                <MediaSegment key={i.segmentId} width={width} segment={i} mediaBoxes={mediaBoxes[index]} segmentPos={segmentPoses[index]}></MediaSegment>
                            </>
                        )
                    }
                    )
                }
            </div>
        </>
    );
}