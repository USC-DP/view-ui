import { ImageToolbar } from './image-toolbar';
import './styles/full-image-display.css'
import Image from "next/image";


export function FullImageDisplay({ imageSrc }: { imageSrc: string }) {
    return (
        <div className="">
            <ImageToolbar></ImageToolbar>
            <Image loader={() => imageSrc} unoptimized={true} src={imageSrc} width={0} height={0} sizes="100vw" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: 'auto', margin: 'auto' }} alt=""></Image>
        </div>
    );
}