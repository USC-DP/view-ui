export const fetchPhoto = (photoId: string | null) => {
    if (!photoId) {
        return "";
    }
    return "http://localhost:5000/photos/view/" + photoId;
}