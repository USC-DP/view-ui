import { HtmlPhoto } from "@/models/photo-display";

import { useRouter } from "next/router";

import Image from "next/image";
import './styles/image-list-item.css'
import React from "react";
import { fetchPhoto } from "@/hooks/fetch-photo";
import Link from "next/link";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import { PreviousContentContext } from "@/contexts/previous-content-context";
import { flushSync } from "react-dom";
import useViewTransitionRouter from "@/transition-lib/use-transition-router";
//import useViewTransitionRouter from "@/transition-lib/use-transition-router";

export default function ImageListItem({ photo }: { photo: HtmlPhoto }) {

    const imageRef = React.useRef<HTMLDivElement>(null);

    const router = useViewTransitionRouter();

    const { setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

    const { setPreviousContent } = React.useContext(PreviousContentContext);

    const [clicked, setClicked] = React.useState<boolean>(false);


    function click() {

        flushSync(() => {
            if (imageRef.current) {
                //@ts-ignore
                setPreviousContent((i) => ({
                    ...i,
                    scrollPosition: window.scrollY,
                    photoId: photo.photoId
                }));
    
                setVisiblePhotoContent((i) => ({
                    ...i,
                    photo: photo
                }))
    
            }
            setClicked(!clicked);
        })
        router.push("/view/" + photo.photoId);
    }


    return (
        <>
            {
                /*visiblePhotoContent.photo?.photoId != photo.photoId && !visiblePhotoContent.isVisible &&*/
                <div style={{ width: photo.width, height: photo.height }}
                    onClick={() => click()}
                    className="html-image-container">
                    <div ref={imageRef} className="html-image" style={{
                        backgroundImage: `url(${fetchPhoto(photo.photoId)})`,
                        viewTransitionName: 'a' + photo.photoId,
                        backgroundSize: `${photo.width}px, ${photo.height}px`,
                        backgroundPosition: 'center center',
                        minWidth: photo.width
                    }}>

                    </div>
                </div>
            }
        </>

    )
}