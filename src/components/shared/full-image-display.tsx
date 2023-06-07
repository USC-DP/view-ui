import { ImageToolbar } from './image-toolbar';
import './styles/full-image-display.css'
import Image from "next/image";


export function FullImageDisplay({ imageSrc }: { imageSrc: string }) {
    return (
        <div className="overlay-container">
            <ImageToolbar></ImageToolbar>
            <Image src={imageSrc} width={0} height={0} sizes="100vw" style={{ width: '80%', height: 'auto' }} alt=""></Image>
        </div>
    );
}