export interface HtmlPhoto {
    width: number;
    height: number;
    src: string;
    photoId: number
}

export interface HtmlPhotoRow {
    row: HtmlPhoto[]
    id: number;
}