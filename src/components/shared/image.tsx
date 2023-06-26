import { HtmlPhoto } from "@/models/photo-display";

import { useRouter } from "next/router";

import Image from "next/image";
import './styles/image-list-item.css'
import React from "react";
import { fetchPhoto } from "@/hooks/fetch-photo";
import Link from "next/link";

export default function ImageListItem({ photo, viewPhoto }: { photo: HtmlPhoto, viewPhoto: (photoId: string) => void }) {


    return (
        <div className="html-image-container">
            
                <Image className="html-image" unoptimized={true} onClick={() => viewPhoto(photo.photoId)} loader={() => fetchPhoto(photo.photoId)} src={fetchPhoto(photo.photoId)} width={photo.width} height={photo.height} alt=""></Image>
            
        </div>
    )
}