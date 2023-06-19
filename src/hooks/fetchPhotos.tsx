import axios from "axios"

export const fetchPhotos = async (ownerId: string) => {
    const res = await axios.get('http://localhost:5000/photos/from-owner/' + ownerId);

    return res.data;
}