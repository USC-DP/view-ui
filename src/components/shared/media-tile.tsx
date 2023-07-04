import { MediaBox } from "@/models/photo-display";

export default function MediaTile({ mediaBox }: { mediaBox: MediaBox }) {
    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'yellow',
            height: `${mediaBox.height}px`,
            width: `${mediaBox.width}px`,
            top: `${mediaBox.top}px`,
            left: `${mediaBox.left}px`
        }}></div>
    );
}