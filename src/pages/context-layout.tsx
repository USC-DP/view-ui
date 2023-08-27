import { PreviousContentProvider } from "@/contexts/previous-content-context";
import { UserProvider } from "@/contexts/user-context";
import { ViewablePhotoProvider } from "@/contexts/viewable-photos-context";
//import { VisiblePhotoProvider } from "@/contexts/visible-photo-context";

export default function ContextLayout({ children }: any) {
    return (
        <UserProvider>
                <ViewablePhotoProvider>
                    <PreviousContentProvider>
                        {children}
                    </PreviousContentProvider>
                </ViewablePhotoProvider>
        </UserProvider >
    )
}