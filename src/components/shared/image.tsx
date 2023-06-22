import { HtmlPhoto } from "@/models/photo-display";

import { useRouter } from "next/router";

import Image from "next/image";
import './styles/image-list-item.css'
import React from "react";
import { fetchPhoto } from "@/hooks/fetch-photo";

export default function ImageListItem({ photo }: { photo: HtmlPhoto }) {

    const router = useRouter();

    return (
        <div className="html-image-container">
            <Image className="html-image" unoptimized={true} onClick={() => router.push('/photo/' + photo.photoId)} loader={() => fetchPhoto(photo.photoId)} src={fetchPhoto(photo.photoId)} width={photo.width} height={photo.height} alt=""></Image>
        </div>
    )
}