import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display"
import React from "react"

export type PreviousContentContext = {
    photoId: string | null;
    scrollPosition: number;
}

export const PreviousContentContext = React.createContext<{
    previousContent: PreviousContentContext;
    setPreviousContent: React.Dispatch<React.SetStateAction<PreviousContentContext>>;
}>({
    previousContent: {
        photoId: null,
        scrollPosition: 0
    },
    setPreviousContent: () => { },

});