import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display"
import React from "react"

export type ViewablePhotosType = {
    photoRows: HtmlPhotoRow[];
    width: number
}

export const ViewablePhotosContext = React.createContext<{
    viewablePhotos: ViewablePhotosType;
    setViewablePhotos: React.Dispatch<React.SetStateAction<ViewablePhotosType>>;
}>({
    viewablePhotos: {
        photoRows: [],
        width: 0
    },
    setViewablePhotos: () => { },

});