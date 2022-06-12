import type { Coordinate } from "./facilityItem";
export type FacilityResponse = {
    name: string;
    text: string;
    mapPath: string;
    mapSize: Coordinate;
    clickAreaList: ClickAreaResponse[];
};
  
export type ClickAreaResponse = {
    name: string;
    areaType: string;
    coordinates: CoordinateResponse;
    photoPath: string;
};
  
type CoordinateResponse = {
    start: Coordinate;
    end: Coordinate;
}