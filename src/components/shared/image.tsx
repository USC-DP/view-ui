import { HtmlPhoto } from "@/models/photo-display";
import { Backdrop, Box, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';

import Image from "next/image";
import './styles/image-list-item.css'
import React from "react";
import { FullImageDisplay } from "./full-image-display";

export default function ImageListItem({ photo }: { photo: HtmlPhoto }) {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /*React.useEffect(() => {
        const close = (e: any) => {
            if (e.keyCode === 27) {
                setOpen(false)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])*/

    return (
        <div className="html-image-container">
            <Image className="html-image" src={photo.src} width={photo.width} height={photo.height} onClick={handleOpen} alt=""></Image>
            {/*<div className="html-image-overlay">

            </div>*/}

            {/*<Modal
                open={open}
                onClose={handleClose}>

                <FullImageDisplay imageSrc={photo.src}></FullImageDisplay>
        </Modal>*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <FullImageDisplay imageSrc={photo.src}></FullImageDisplay>
                </Box>
            </Modal>
        </div>
    )
}