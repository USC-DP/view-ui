import { VisiblePhotoContentType } from "@/contexts/visible-photo-context";
import { fetchPhoto } from "@/hooks/fetch-photo";
import Image from "next/image";

export default function FullPhotoDsiplay({ data, setData }: { data: VisiblePhotoContentType, setData: React.Dispatch<React.SetStateAction<VisiblePhotoContentType>> }) {
    return (
        <>

            {data && data.photo && <Image
                unoptimized={true}
                src={fetchPhoto(data.photo.photoId)}
                width={0} height={0} sizes="100vw"
                className={`image`}
                alt=""
                style={{
                    viewTransitionName: 'qq'
                }}
            ></Image >}
        </>
    );
}