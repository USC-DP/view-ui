import React from "react";
import { Section, config } from "@/models/photo-display";
import MediaSection from "../shared/media-section";
import { PreviousContentContext } from "@/contexts/previous-content-context";
import api from "@/api/api";

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

    const [elementWidth, setElementWidth] = React.useState<number>(10000);
    const elementRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {

        const handleResize = () => {
            if (elementRef.current) {
                setElementWidth(elementRef.current.clientWidth - 25);
          }
        };
    
        // Initial width on component mount
        if (elementRef.current) {
          setElementWidth(elementRef.current.clientWidth - 25);
        }
    
        // Update width on window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };

      }, []);    


    function updateSectionHeight(sectionId: string, newHeight: number): void {

        const prevHeight = visibleSections[sectionId].height;

        const heightDelta = newHeight - prevHeight;

        //console.log(sectionId + " " + prevHeight + " " + newHeight + " started");
        if (heightDelta == 0) {
            return;
        }
        setVisibleSections(prevVisibleSections => {
            const newVisibleSections = { ...prevVisibleSections };

            newVisibleSections[sectionId] = {
                ...newVisibleSections[sectionId],
                height: newHeight
            };

            for (let i = 0; i < sections.length; i++) {
                if (sections[i].sectionId === sectionId) {
                    for (let j = i + 1; j < sections.length; j++) {
                        newVisibleSections[sections[j].sectionId] = {
                            ...newVisibleSections[sections[j].sectionId],
                            top: newVisibleSections[sections[j].sectionId].top + heightDelta
                        };
                    }
                }
            }

            return newVisibleSections;
        });

        if (window.scrollY > visibleSections[sectionId].top) {
            window.scrollBy(0, heightDelta);
        }
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
        api.fetchSections()
            .then(
                d => {

                    let newVisibleSections: Dictionary = {}


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
        console.log("loaded");
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
        const rows = Math.ceil(unwrappedWidth / (elementWidth));
        const height = rows * config.targetRowHeight;
        return height;
    }

    return (
        <div ref={elementRef} style={{ display: isVisible ? 'block' : 'none' }}>
            {
                visibleSections && sections && sections.map((i, index) => {
                    return (
                        <MediaSection key={i.sectionId} width={elementWidth} top={visibleSections[i.sectionId].top} height={visibleSections[i.sectionId].height} section={i} visible={visibleSections[i.sectionId].isVisible} updateSectionHeight={updateSectionHeight}></MediaSection>
                    )
                }
                )
            }

        </div>
    )
}