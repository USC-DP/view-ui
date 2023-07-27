import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display"
import React from "react"

export type PreviousContentContext = {
    mediaId: string | null;
    scrollPosition: number;
}

export const PreviousContentContext = React.createContext<{
    previousContent: PreviousContentContext;
    setPreviousContent: React.Dispatch<React.SetStateAction<PreviousContentContext>>;
}>({
    previousContent: {
        mediaId: null,
        scrollPosition: 0
    },
    setPreviousContent: () => { },

});