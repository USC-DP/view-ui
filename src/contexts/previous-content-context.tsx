import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display"
import React from "react"

export type PreviousContentContext = {
    mediaId: string | null;
    scrollPosition: number;
}

export const PreviousContentContext = React.createContext<{
    previousContent: PreviousContentContext;
    setPreviousContent: React.Dispatch<React.SetStateAction<PreviousContentContext>>;
} | null>(null);

const { Provider } = PreviousContentContext;

export const PreviousContentProvider = ({ children }: any) => {
    const [previousContent, setPreviousContent] = React.useState<PreviousContentContext>({
        mediaId: null,
        scrollPosition: 0,
    });
    
    const contextValue = {
        previousContent,
        setPreviousContent
    }

    return <Provider value={contextValue}>{children}</Provider>
}

export const usePreviousContentContext = () => {
    const context = React.useContext(PreviousContentContext);
    if (context === undefined || context == null) {
        throw new Error('usePreviousContentContext must be used within a PreviousContentProvider');
    }
    return context;
};