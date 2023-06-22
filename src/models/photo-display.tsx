export interface HtmlPhoto {
    photoId: string,
    path?: string,
    width: number,
    height: number,
    dateTaken?: string,
    lastModified?: string,
    lat?: number,
    lon?: number,
    description?: string,
    ownerId?: string
}

export interface HtmlPhotoRow {
    row: HtmlPhoto[]
    id: number;
}