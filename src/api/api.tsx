import { ViewSegment } from "@/models/photo-display";
import axios from "axios";

class Api {
    private serverUrl = "http://localhost:5000";

    private getHeaders = () => ({
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      

    public fetchPhotoUrl(photoId: string) {
        if (!photoId) {
            return "";
        }
        return this.serverUrl + "/media/view/" + photoId;
    }

    public async fetchPhotoData(photoId: string) {
        const res = await axios.get(this.serverUrl + '/media/data/' + photoId, this.getHeaders());
        return res.data;
    }

    public async fetchPhoto(photoId: string | null) {
        //const res = await axios.get(this.serverUrl + '/media/view/' + photoId);
        //return res.data;
    }

    public async fetchPhotos(ownerId: string) {
        const res = await axios.get(this.serverUrl + '/media/from-owner/' + ownerId, this.getHeaders());
        return res.data;
    }

    public async fetchSections(searchTerm: string = "") {
        const res = await axios.get(this.serverUrl + '/media/sections/' + searchTerm, this.getHeaders());
        return res.data;
    }

    public async fetchSegments(sectionId: string, searchTerm?: string): Promise<ViewSegment[]> {
        let url = this.serverUrl + '/media/segments/' + sectionId + (searchTerm ? "?search=" + searchTerm : "");
        const res = await axios.get(url, this.getHeaders());
        return res.data;
    }

    public async fetchPhotoGeoData(ownerId: string) {
        const res = await axios.get(this.serverUrl + '/media/all-geo-data/' + ownerId, this.getHeaders());
        return res.data;
    }

    public async postMediaCategories(mediaId: string, tags: string[]) {
        const res = await axios.post(this.serverUrl + '/media/set-categories/', {
            mediaId: mediaId,
            tags: tags
        },  this.getHeaders());
        return res.data;
    }

    public async getMediaCategories(photoId: string) {
        const res = await axios.get(this.serverUrl + '/media/get-categories/' + photoId, this.getHeaders());
        return res.data;
    }

    public async login(username: string, password: string) {
        const res = await axios.post(this.serverUrl + '/auth/login', { username, password })
        return res.data;
    }

    public async searchMedia(searchTerm: string) {
        const res = await axios.get(this.serverUrl + '/media/search/' + searchTerm, this.getHeaders())
        console.log(res.data)
        return res.data;
    }

}

const api = new Api();

export default api;