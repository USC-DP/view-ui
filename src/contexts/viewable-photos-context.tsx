import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display"
import React from "react"

export type ViewablePhotosType = {
    photoRows: HtmlPhotoRow[];
    width: number
}

export const ViewablePhotosContext = React.createContext<{
    viewablePhotos: ViewablePhotosType;
    setViewablePhotos: React.Dispatch<React.SetStateAction<ViewablePhotosType>>;
} | null>(null);

const { Provider } = ViewablePhotosContext;

export const ViewablePhotoProvider = ({ children }: any) => {
    const [viewablePhotos, setViewablePhotos] = React.useState<ViewablePhotosType>({
        photoRows: [],
        width: 0,
    });
    
    const contextValue = {
        viewablePhotos,
        setViewablePhotos
    }

    return <Provider value={contextValue}>({children})</Provider>
}

export const useViewablePhotosContext = () => {
    const context = React.useContext(ViewablePhotosContext);
    if (context === undefined || context == null) {
        throw new Error('useViewablePhotosContext must be used within a ViewablePhotoProvider');
    }
    return context;
};