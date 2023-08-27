import { HtmlPhoto, HtmlPhotoRow } from "@/models/photo-display"
import React from "react"

export type User = {
    searchTerm: string
    userId: string,
    username: string,
    token: string
}

const UserContext = React.createContext<{
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    setUserAuthInfo: (tokenValue: string) => void;
    isUserAuthenticated: () => boolean | undefined
} | null>(null);

const { Provider } = UserContext;

const UserProvider = ({ children }: any) => {

    const [userState, setUserState] = React.useState<User>({
        searchTerm: "",
        userId: "",
        username: "",
        token: ""
    })

    const setUserAuthInfo = (tokenValue: string) => {
        console.log("here");
        setUserState((prev) => ({
            ...prev,
            token: tokenValue,
        }))
        const token = localStorage.setItem('token', tokenValue);

        console.log(userState);
    }

    const isUserAuthenticated = () => {
        return !!userState.token;
    };

    const contextValue = {
        user: userState,
        setUser: setUserState,
        setUserAuthInfo: setUserAuthInfo,
        isUserAuthenticated: isUserAuthenticated
    }

    return <Provider
        value={contextValue}>
        {children}
    </Provider>
}

export const useUserContext = () => {
    const context = React.useContext(UserContext);
    if (context === undefined || context == null) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};


export { UserContext, UserProvider }

