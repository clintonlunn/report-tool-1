
export interface Aoi {
    description: string;
    polygon: Polygon;
}

export interface Polygon {
    rings: number[][][];
    spatialReference: SpatialReference;
}

interface SpatialReference {
    wkid: number;
}