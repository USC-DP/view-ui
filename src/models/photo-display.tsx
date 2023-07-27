export interface HtmlPhoto {
    mediaId: string,
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

export interface Section {
    sectionId: string
    totalMedia: number
}

export const config = {
    containerWidth: 1325, //1325
    targetRowHeight: 150
}


export interface MediaBox {
    aspectRatio: number,
    top: number,
    width: number,
    height: number,
    left: number
}
export interface ViewMedia {
    mediaId: string,
    width: number,
    height: number
}

export interface ViewSegment {
    segmentId: string,
    media: ViewMedia[]
}

export interface ViewSection {
    sectionId: string
    totalMedia: number
}