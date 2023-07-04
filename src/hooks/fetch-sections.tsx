import axios from "axios"

export const fetchSections = async () => {
    const res = await axios.get('http://localhost:5000/photos/sections');

    return res.data;
}