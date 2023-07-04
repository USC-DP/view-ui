import React from "react";
import PhotoSection from "../shared/photo-section";
import { fetchSections } from "@/hooks/fetch-sections";
import { Section, config } from "@/models/photo-display";
import MediaSection from "../shared/media-section";

interface Dictionary {
    [key: string]: {
        isVisible: boolean
        top: number
        lastUpdateTime: number,
        height: number
    }
}
export default function PhotoList({ isVisible }: { isVisible?: boolean }) {

    const [sections, setSections] = React.useState<Section[]>([]);
    const [visibleSections, setVisibleSections] = React.useState<Dictionary>({});

    const mediaSectionRef = React.useRef<any>();

    function updateSectionHeight(sectionId: string, newHeight: number): void {

        const prevHeight = visibleSections[sectionId].height;

        const heightDelta = newHeight - prevHeight;

        console.log(heightDelta)
        if (heightDelta == 0) {
            return;
        }

        let newVisibleSections: Dictionary = { ...visibleSections }

        newVisibleSections[sectionId] = {
            ...newVisibleSections[sectionId],
            height: newHeight
        }

        for (let i = 0; i < sections.length; i++) {
            if (sections[i].sectionId == sectionId) {
                for (let j = i + 1; j < sections.length; j++) {
                    newVisibleSections[sections[j].sectionId] = {
                        ...newVisibleSections[sections[j].sectionId],
                        top: newVisibleSections[sections[j].sectionId].top + heightDelta
                    }
                }
            }
        }





        setVisibleSections(newVisibleSections);

        
    }



    let lastSectionUpdateTimes: any = {};

    function handleSectionIntersection(entries: any[], observer: any) {
        entries.forEach((entry) => {
            const sectionDiv = entry.target;

            lastSectionUpdateTimes[sectionDiv.id] = entry.time;

            let updatedVisibleSections;
            if (entry.isIntersecting) {

                if (lastSectionUpdateTimes[sectionDiv.id] !== entry.time) {
                    console.log("new updates received on section, discarding update for", sectionDiv.id, entry.time);
                    return;
                }
                setVisibleSections((prevDictionary) => ({
                    ...prevDictionary,
                    [sectionDiv.id]: {
                        ...prevDictionary[sectionDiv.id],
                        isVisible: true
                    },
                }));

            } else {
                setVisibleSections((prevDictionary) => ({
                    ...prevDictionary,
                    [sectionDiv.id]: {
                        ...prevDictionary[sectionDiv.id],
                        isVisible: false
                    },
                }));
            }
        })
    }

    React.useEffect(() => {
        fetchSections()
            .then(
                d => {

                    let newVisibleSections: Dictionary = {}
                    /*d.forEach((section: any) => {
                        newVisibleSections[section.sectionId] = {...newVisibleSections[section.sectionId], isVisible: false};
                    });*/


                    let sectionMargin = 80;
                    let prevSectionEnd = 70;
                    for (const sectionElement of d) {

                        newVisibleSections[sectionElement.sectionId] = {
                            ...newVisibleSections[sectionElement.sectionId],
                            isVisible: false,
                            lastUpdateTime: -1,
                            top: prevSectionEnd,
                            height: estimateSectionHeight(sectionElement)
                        }
                        prevSectionEnd += newVisibleSections[sectionElement.sectionId].height + sectionMargin;
                    }

                    setVisibleSections(newVisibleSections);
                    setSections(d);

                }
            )

        window.scrollTo(0, 10000);
    }, [])

    React.useEffect(() => {
        const sectionObserver = new IntersectionObserver(handleSectionIntersection, {
            rootMargin: "200px 0px"
        });

        const sectionElements = document.querySelectorAll('.section');
        sectionElements.forEach((element) => {
            sectionObserver.observe(element);
        })

    }, [sections])

    function estimateSectionHeight(section: Section) {
        const unwrappedWidth = (3 / 2) * section.totalMedia * config.targetRowHeight * (7 / 10);
        const rows = Math.ceil(unwrappedWidth / config.containerWidth);
        const height = rows * config.targetRowHeight;

        return height;
    }

    return (
        <div style={{ display: isVisible ? 'block' : 'none' }}>
            {/*<PhotoSection></PhotoSection>*/}
            {
                visibleSections && sections && sections.map((i, index) => {
                    return (
                        <MediaSection key={i.sectionId} width={config.containerWidth} top={visibleSections[i.sectionId].top} height={visibleSections[i.sectionId].height} section={i} visible={visibleSections[i.sectionId].isVisible} updateSectionHeight={updateSectionHeight}></MediaSection>
                    )
                }
                )
            }

        </div>
    )
}