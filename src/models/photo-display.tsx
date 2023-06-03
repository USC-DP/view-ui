export interface HtmlPhoto {
    width: number;
    height: number;
    src: string;
    id: number
}

export interface HtmlPhotoRow {
    row: HtmlPhoto[]
    id: number;
}