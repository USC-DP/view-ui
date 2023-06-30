import { HtmlPhoto } from "@/models/photo-display";

import { useRouter } from "next/router";

import Image from "next/image";
import './styles/image-list-item.css'
import React from "react";
import { fetchPhoto } from "@/hooks/fetch-photo";
import Link from "next/link";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import { PreviousContentContext } from "@/contexts/previous-content-context";

export default function ImageListItem({ photo, viewPhoto }: { photo: HtmlPhoto, viewPhoto: (photoId: string) => void }) {

    const imageRef = React.useRef<HTMLDivElement>(null);

    const { visiblePhotoContent, setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

    const { previousContent, setPreviousContent } = React.useContext(PreviousContentContext);

    const [clicked, setClicked] = React.useState<boolean>(false);


    function click() {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            
            //@ts-ignore
            imageRef.current.style.viewTransitionName = "image";
            setPreviousContent((i) => ({
                ...i,
                scrollPosition: window.scrollY,
                photoId: photo.photoId
            }));
            
        }
        setClicked(!clicked);

        viewPhoto(photo.photoId)
    }


    return (
        <div className={`html-image-container ${clicked ? 'active' : ''}`} style={{ width: photo.width, height: photo.height, transition: 'all 0.3s' }}
            onClick={() => click()}>
            <div ref={imageRef} className="html-image" style={{
                backgroundImage: `url(${fetchPhoto(photo.photoId)})`,
                backgroundSize: 'contain',
                viewTransitionName: photo.photoId == previousContent.photoId ? "image" : 'none'
            }}></div>
        </div>
    )
}