import { HtmlPhoto } from "@/models/photo-display";
import axios from "axios";

export const fetchPhotoData = async (photoId: string): Promise<HtmlPhoto> => {
    const res = await axios.get('http://localhost:5000/photos/photo/' + photoId);

    return res.data;
}