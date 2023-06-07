import { HtmlPhoto } from "@/models/photo-display";
import { Backdrop, Box, Modal } from "@mui/material";
import Image from "next/image";
import './styles/image-list-item.css'
import React from "react";
import FullImageDisplay from "./full-image-display";

export default function ImageListItem({ photo }: { photo: HtmlPhoto }) {

    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const close = (e: any) => {
            if (e.keyCode === 27) {
                setOpen(false)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

    function showFullImageView() {
        setOpen(true)
    }

    return (
        <div className="html-image-container">
            <Image className="html-image" src={photo.src} width={photo.width} height={photo.height} onClick={showFullImageView} alt=""></Image>
            {/*<div className="html-image-overlay">

            </div>*/}

            <Modal
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={() => setOpen(false)}
                onClose={() => setOpen(false)}
            >
                <FullImageDisplay imageSrc={photo.src}></FullImageDisplay>
            </Modal>
        </div>
    )
}