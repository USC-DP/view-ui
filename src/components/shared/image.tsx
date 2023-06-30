import { HtmlPhoto } from "@/models/photo-display";

import { useRouter } from "next/router";

import Image from "next/image";
import './styles/image-list-item.css'
import React from "react";
import { fetchPhoto } from "@/hooks/fetch-photo";
import Link from "next/link";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";

export default function ImageListItem({ photo, viewPhoto }: { photo: HtmlPhoto, viewPhoto: (photoId: string) => void }) {

    const imageRef = React.useRef<HTMLDivElement>(null);

    const { visiblePhotoContent, setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

    const [clicked, setClicked] = React.useState<boolean>(false);

    React.useEffect(() => {
        if(photo.photoId == "1852565c-c4b8-46f3-bc28-c48d35fb4b00") {
            //@ts-ignore
            imageRef.current.style.viewTransitionName = "image";
        }
    }, []);


    function click() {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            
            //@ts-ignore
            imageRef.current.style.viewTransitionName = "image";
            

            let x = rect.left + rect.width / 2;// + window.scrollX;
            let y = rect.top + rect.height / 2;// + window.scrollY;
            console.log('Image Coordinates (x, y):', x, y);
            setVisiblePhotoContent((i) => ({
                ...i,
                xCoord: x,
                yCoord: y,
                width: rect.width,
                height: rect.height
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
                viewTransitionName: photo.photoId == "1852565c-c4b8-46f3-bc28-c48d35fb4b00" ? "image" : 'none'
            }}></div>
        </div>
    )
}