import { HtmlPhoto } from "@/models/photo-display";
import { HtmlPhotoRow } from "@/models/photo-display";

let maxHeight = 150;


function getWidth(width: number, height: number) {

    return Math.round((maxHeight / height) * width) + Math.random() * 80
}


export function naiveLayout(photos: HtmlPhoto[], viewPortWidth: number) {
    let rows: HtmlPhotoRow[] = [];
    let row: HtmlPhoto[] = [];
    let currentWidth = 0;
    let id = 0;
    photos.forEach((photo, i) => {
        photo.width = getWidth(photo.width, photo.height);
        photo.height = maxHeight;
        currentWidth += photo.width + 5;

        row.push(photo);

        if (i + 1 < photos.length && getWidth(photos[i].width, photos[i].height) + currentWidth + 5 > viewPortWidth) {
            
            rows.push({ row: row, id: id });
            row = [];
            currentWidth = 0;
            id += 1;
        }
    });

    row.length && rows.push({ row: row, id: id });

    return rows;
}