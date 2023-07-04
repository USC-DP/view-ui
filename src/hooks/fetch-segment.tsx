import axios from "axios"

export const fetchSegments = async (sectionId: string) => {
    const res = await axios.get('http://localhost:5000/photos/segments/' + sectionId);

    return res.data;
}