import api from "@/api/api";
import { PreviousContentContext, usePreviousContentContext } from "@/contexts/previous-content-context";
import { VisiblePhotoContext, useVisiblePhotoContext } from "@/contexts/visible-photo-context";
import { MediaBox, ViewMedia } from "@/models/photo-display";
import useViewTransitionRouter from "@/transition-lib/use-transition-router";
import React from "react";
import { flushSync } from "react-dom";

export default function MediaTile({ mediaBox, media }: { mediaBox: MediaBox, media: ViewMedia }) {

    const router = useViewTransitionRouter();

    const imageRef = React.useRef<HTMLDivElement>(null);

    const { previousContent, setPreviousContent } = usePreviousContentContext()
    const { visiblePhotoContent, setVisiblePhotoContent } = useVisiblePhotoContext();
    const [clicked, setClicked] = React.useState<boolean>(false);

    function click() {
        setPreviousContent((i) => ({
            ...i,
            scrollPosition: window.scrollY,
            mediaId: media.mediaId
        }));

        document.startViewTransition(() => {
            flushSync(() => {
                if (imageRef.current) {
                    //@ts-ignore
    
                    setVisiblePhotoContent((prev) => ({
                        ...prev,
                        isVisible: true,
                        photo: {
                            mediaId: media.mediaId,
                            width: media.width,
                            height: media.height
                        }
                    }))
                }
                setClicked(!clicked);
            })
        });
        
        //router.push("/view/" + media.metadata.testMediaId);
    }

    return (
        <>
            {
                !visiblePhotoContent.isVisible && visiblePhotoContent.photo?.mediaId !== media.mediaId && 
                <div
                    ref={imageRef}
                    onClick={() => click()}
                    style={{
                        position: 'absolute',
                        backgroundColor: 'lightgrey',
                        cursor: 'pointer',
                        height: `${mediaBox.height}px`,
                        width: `${mediaBox.width}px`,
                        top: `${mediaBox.top + 32}px`,
                        left: `${mediaBox.left}px`,
                        backgroundImage: `url(${api.fetchPhotoUrl(media.mediaId)})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        viewTransitionName: media.mediaId === previousContent.mediaId ? "i" : 'none'
                    }}></div>
            }
        </>
    );
}