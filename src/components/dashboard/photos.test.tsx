import api from "@/api/api";
import { UserContext, useUserContext } from "@/contexts/user-context";
import React from "react";


export default function PhotoTest() {

    const [results, setResults] = React.useState<string[]>([]);

    const { user } = useUserContext();

    React.useEffect(() => {
        api.searchMedia(user.searchTerm).then(res => {
            setResults(res.mediaId);
        })
    }, [user.searchTerm])

    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>

            {
                results && results.map(media => {
                    return <div
                        key={media}
                        style={{
                        
                            position: 'relative',
                            backgroundColor: 'lightgrey',
                            cursor: 'pointer',
                            height: '240px',
                            width: '240px',
                            backgroundImage: `url(${api.fetchPhotoUrl(media)})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center'
                            //viewTransitionName: media.mediaId === previousContent.mediaId ? "i" : 'none'
                        }}></div>
                })
            }

        </div>
    )
}