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

export interface Section {
    sectionId: string
    totalMedia: number
}

export const config = {
    containerWidth: 500, //1325
    targetRowHeight: 150
}


export interface MediaBox {
    aspectRatio: number,
    top: number,
    width: number,
    height: number,
    left: number
}

export interface ViewMediaMetadata  {
    testMediaId: string,
    width: number,
    height: number
}

export interface ViewMedia {
    mediaId: string,
    metadata: ViewMediaMetadata
}

export interface ViewSegment {
    segmentId: string,
    media: ViewMedia[]
}

export interface ViewSection {
    sectionId: string
    totalMedia: number
}