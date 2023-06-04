import { HtmlPhoto } from "@/models/photo-display";
import { Backdrop, Box } from "@mui/material";
import Image from "next/image";
import './styles/image-list-item.css'
import React from "react";

export default function ImageListItem({ photo }: { photo: HtmlPhoto }) {

    const [open, setOpen] = React.useState(false);

    function showFullImageView() {
        setOpen(true)
    }

    return (
        <div className="html-image-container">
            <Image className="html-image" src={photo.src} width={photo.width} height={photo.height} onClick={showFullImageView} alt=""></Image>
            {/*<div className="html-image-overlay">

            </div>*/}

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={() => setOpen(false)}
            >
                <p>Test</p>
            </Backdrop>
        </div>
    )
}