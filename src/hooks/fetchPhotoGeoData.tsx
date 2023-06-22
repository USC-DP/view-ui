import axios from "axios"

export const fetchPhotoGeoData = async (ownerId: string) => {
    const res = await axios.get('http://localhost:5000/photos/all-geo-data/' + ownerId);

    return res.data;
}