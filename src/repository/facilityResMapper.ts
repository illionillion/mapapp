import { Facility } from '../types/facilityItem.d'
import { ClickArea } from '../types/facilityItem.d'
import { Coordinate } from '../types/facilityItem.d'
import {CoordinateResponse, FacilityResponse} from '../types/facilityItemResponse.d'
import {ClickAreaResponse} from '../types/facilityItemResponse.d'
export const facilityResMapper = (data:Facility):FacilityResponse => {
    const {clickAreaList} = data
    const newClickAreaList:ClickAreaResponse[] = clickAreaList.map((clickArea:ClickArea)=>{
        const coordinates:Coordinate[] = clickArea.coordinates
        const [start, end] = coordinates
        const newCoordinates:CoordinateResponse = {start, end}
        return {...clickArea, coordinates:newCoordinates}
    })
    return ({...data, clickAreaList:newClickAreaList})
}