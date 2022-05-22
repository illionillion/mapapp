export type FacilityItem = {
    name:string,
    text:string,
    mapPath:string,
    mapSize:Coordinate,
    clickAreaList:ClickArea[]
}

export type ClickArea = {
    areaType: string,
    coordinates: Coordinate[],
    photoPath: string
}

type Coordinate = number[]
