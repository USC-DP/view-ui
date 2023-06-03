import { HtmlPhoto } from "@/models/photo-display";
import { HtmlPhotoRow } from "@/models/photo-display";

let maxHeight = 150;


export function naiveLayout(photos: HtmlPhoto[], viewPortWidth: number) {
    let rows: HtmlPhotoRow[] = [];
    let row: HtmlPhoto[] = [];
    let currentWidth = 0;
    let id = 0;
    photos.forEach(photo => {
        row.push(photo);
        photo.width = Math.round((maxHeight / photo.height) * photo.width);
        photo.height = maxHeight;
        currentWidth += photo.width + 5;

        if (currentWidth >= viewPortWidth) {
            rows.push({row: row, id: id});
            row = [];
            currentWidth = 0;
            id += 1;

        }
    });
    row.length && rows.push({row: row, id: id});
    return rows;
}