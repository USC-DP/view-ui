import { fetchPhoto } from "@/hooks/fetch-photo";
import { fetchPhotoData } from "@/hooks/fetch-photo-data";
import { HtmlPhoto } from "@/models/photo-display";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { FullImageDisplay } from "@/components/photo-display/full-image-display";

export default function Photo() {
    /*const router = useRouter();

    const [photo, setPhoto] = React.useState<HtmlPhoto>();

    React.useEffect(() => {
        if (router.query.id) {
            const photoId = router.query.id.toString()

            fetchPhotoData(photoId).then(
                (d) => {
                    setPhoto(d);
                }
            )
        }
    }, [router])

    return (
        <>
            {
                photo &&
                <FullImageDisplay photo={photo}></FullImageDisplay>
            }
            
        </>
    );*/
}