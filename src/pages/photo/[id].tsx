import { fetchPhoto } from "@/hooks/fetch-photo";
import { fetchPhotoData } from "@/hooks/fetch-photo-data";
import { HtmlPhoto } from "@/models/photo-display";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

export default function Photo() {
    const router = useRouter();

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
    }, [])

    return (
        <div style={{width: '80%', height: '80%'}}>
            Hello world
            <br />
            {router.query.id}
            {
                photo &&
                <Image loader={() => fetchPhoto(photo.photoId)} unoptimized={true} src={fetchPhoto(photo.photoId)} width={0} height={0} sizes="100vw" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: 'auto', margin: 'auto' }} alt=""></Image>
                /*<Image className="html-image" unoptimized={true} loader={() => fetchPhoto(photo.photoId)} src={fetchPhoto(photo.photoId)} width={0} height={0} sizes="100vw" alt=""></Image>*/
            }
            
        </div>
    );
}