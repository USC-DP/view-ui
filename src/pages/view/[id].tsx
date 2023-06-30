
import React from "react";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import { FullImageDisplay } from "@/components/photo-display/full-image-display";

export default function Photo() {

    const { visiblePhotoContent, setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

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
    }, [router])*/

    return (
        <>
            {
                visiblePhotoContent.photo &&
                <FullImageDisplay data={visiblePhotoContent} setData={setVisiblePhotoContent}></FullImageDisplay>
            }

        </>
    );
}