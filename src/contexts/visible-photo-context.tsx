import { HtmlPhoto } from "@/models/photo-display"
import React from "react"

export type VisiblePhotoContentType = {
    photo: HtmlPhoto | null,
    isVisible: boolean,
}

export const VisiblePhotoContext = React.createContext<{
    visiblePhotoContent: VisiblePhotoContentType;
    setVisiblePhotoContent: React.Dispatch<React.SetStateAction<VisiblePhotoContentType>>;
}| null>(null);


const { Provider } = VisiblePhotoContext;

/*export const VisiblePhotoProvider = ({ children }: any) => {
    const [visiblePhotoContent, setVisiblePhotoContent] = React.useState<VisiblePhotoContentType>({
        photo: null,
        isVisible: false,
    });

    const contextValue = {
        visiblePhotoContent,
        setVisiblePhotoContent
    }

    return <Provider value={contextValue}>({children})</Provider>
}*/

export const useVisiblePhotoContext = () => {
    const context = React.useContext(VisiblePhotoContext);
    if (context === undefined || context == null) {
        throw new Error('useVisiblePhotoContext must be used within a VisiblePhotoProvider');
    }
    return context;
};