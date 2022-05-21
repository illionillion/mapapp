export type FacilityItem = {
    name:string,
    text:string,
    mapPath:string,
    mapSize:Coordinate,
    clickAreaList:ClickArea[]
}

export type ClickArea = {
    name: string,
    areaType: string,
    coordinates: Coordinate[],
    photoPath: string
}

type Coordinate ={
    coordinate:number
}