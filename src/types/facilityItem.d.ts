export type FacilityItem = {
    name:string,
    text:string,
    mapPath:string,
    mapSize:coordinate[],
    clickAreaList:ClickArea[]
}

export type ClickArea = {
    areaType: string,
    coordinates: coordinate[],
    photoPath: string
}

type coordinate ={
    coordinate:number
}