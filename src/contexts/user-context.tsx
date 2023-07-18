import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display"
import React from "react"

export type User = {
    searchTerm: string
}

export const UserContext = React.createContext<{
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}>({
    user: {
        searchTerm: ""
    },
    setUser: () => { },

});