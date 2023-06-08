import { ImageInfo } from "./image-info";
import "./styles/image-toolbar.css"

import InfoIcon from '@mui/icons-material/Info';

export function ImageToolbar() {
    return (
        <div className="image-toolbar-container">
            <ImageInfo></ImageInfo>
        </div>
    );
}