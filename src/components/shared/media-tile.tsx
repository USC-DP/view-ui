import { PreviousContentContext } from "@/contexts/previous-content-context";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import { fetchPhoto } from "@/hooks/fetch-photo";
import { fetchPhotoData } from "@/hooks/fetch-photo-data";
import { MediaBox, ViewMedia } from "@/models/photo-display";
import useViewTransitionRouter from "@/transition-lib/use-transition-router";
import React from "react";
import { flushSync } from "react-dom";

export default function MediaTile({ mediaBox, media }: { mediaBox: MediaBox, media: ViewMedia }) {

    const router = useViewTransitionRouter();

    const imageRef = React.useRef<HTMLDivElement>(null);

    const { previousContent, setPreviousContent } = React.useContext(PreviousContentContext);
    const {visiblePhotoContent, setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);
    const [clicked, setClicked] = React.useState<boolean>(false);

    function click() {
        setPreviousContent((i) => ({
            ...i,
            scrollPosition: window.scrollY,
            photoId: media.mediaId
        }));

        document.startViewTransition(() => {
            flushSync(() => {
                if (imageRef.current) {
                    //@ts-ignore
    
    
                    setVisiblePhotoContent((prev) => ({
                        ...prev,
                        isVisible: true,
                        photo: {
                            photoId: media.mediaId,
                            width: media.height,
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
                !visiblePhotoContent.isVisible && visiblePhotoContent.photo?.photoId !== media.mediaId && 
                <div
                    ref={imageRef}
                    onClick={() => click()}
                    style={{
                        position: 'absolute',
                        //backgroundColor: 'yellow',
                        height: `${mediaBox.height}px`,
                        width: `${mediaBox.width}px`,
                        top: `${mediaBox.top}px`,
                        left: `${mediaBox.left}px`,
                        backgroundImage: `url(${fetchPhoto(media.mediaId)})`,
                        backgroundSize: 'contain',
                        viewTransitionName: media.mediaId === previousContent.photoId ? "i" : 'none'
                    }}></div>
            }
        </>
    );
}