import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display"
import React from "react"

export type ViewablePhotosType = {
    photoRows: HtmlPhotoRow[];
}

export const ViewablePhotosContext = React.createContext<{
    viewablePhotos: ViewablePhotosType;
    setViewablePhotos: React.Dispatch<React.SetStateAction<ViewablePhotosType>>;
}>({
    viewablePhotos: {
        photoRows: []
    },
    setViewablePhotos: () => { },

});