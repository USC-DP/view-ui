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
    containerWidth: 1728, //1325
    targetRowHeight: 150
}

export interface MetaDataType {
    width: number,
    height: number
}
export interface ImageType {
    imageId: string
    metadata: MetaDataType
}
export interface Segment {
    segmentId: string,
    media: ImageType[]
}

export interface MediaBox {
    aspectRatio: number,
    top: number,
    width: number,
    height: number,
    left: number
}