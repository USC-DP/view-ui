import { ViewSegment } from "@/models/photo-display";
import axios from "axios";

class Api {
    private serverUrl = "http://localhost:5000";

    public fetchPhotoUrl(photoId: string) {
        if (!photoId) {
            return "";
        }
        return this.serverUrl + "/photos/view/" + photoId;
    }

    public async fetchPhotoData(photoId: string) {
        const res = await axios.get(this.serverUrl + '/photos/photo/' + photoId);
        return res.data;
    }

    public async fetchPhoto(photoId: string | null) {
        const res = await axios.get(this.serverUrl + '/photos/view/' + photoId);
        return res.data;
    }

    public async fetchPhotos(ownerId: string) {
        const res = await axios.get(this.serverUrl + '/photos/from-owner/' + ownerId);
        return res.data;
    }

    public async fetchSections(searchTerm: string = "") {
        const res = await axios.get(this.serverUrl + '/photos/sections/' + searchTerm);
        return res.data;
    }

    public async fetchSegments(sectionId: string, searchTerm?: string): Promise<ViewSegment[]> {
        let url = this.serverUrl + '/photos/segments/' + sectionId + (searchTerm ? "?search=" + searchTerm : "");
        const res = await axios.get(url);
        return res.data;
    }

    public async fetchPhotoGeoData(ownerId: string) {
        const res = await axios.get(this.serverUrl + '/photos/all-geo-data/' + ownerId);
        return res.data;
    }

    public async postMediaCategories(photoId: string, tags: string[]) {
        const res = await axios.post(this.serverUrl + '/photos/photo/set-categories/', {
            photoId: photoId,
            tag: tags
        });
        return res.data;
    }

    public async getMediaCategories(photoId: string) {
        const res = await axios.get(this.serverUrl + '/photos/photo/get-categories/' + photoId);
        return res.data;
    }

}

const api = new Api();

export default api;