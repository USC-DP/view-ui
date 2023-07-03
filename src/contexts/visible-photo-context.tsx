import { HtmlPhoto } from "@/models/photo-display"
import React from "react"

export type VisiblePhotoContentType = {
    photo: HtmlPhoto | null,
    isVisible: boolean,
}

export const VisiblePhotoContext = React.createContext<{
    visiblePhotoContent: VisiblePhotoContentType;
    setVisiblePhotoContent: React.Dispatch<React.SetStateAction<VisiblePhotoContentType>>;
}>({
    visiblePhotoContent: {
        photo: {
            photoId: "cef29661-9d4b-443f-84f2-507a7a5ddfb0",
            width: 1,
            height: 1,
        },
        isVisible: false,
    },
    setVisiblePhotoContent: () => { },

});