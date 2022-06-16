import {facilityDriver} from '../infrastructure/facilityDriver'
import { Facility } from '../types/facilityItem.d'
import { ClickArea } from '../types/facilityItem.d'
import { Coordinate } from '../types/facilityItem.d'
import { ClickAreaResponse } from '../types/facilityItemResponse.d'

export const facilityMapper = async():Promise<Facility[]> => {
    const reponse = new facilityDriver().getFacilities()
    let FacilityDatas:Facility[] = [] 
    await reponse.then(datas=>{
       FacilityDatas = datas.map(data => {
           const {clickAreaList} = data
           const newClickAreaList:ClickArea[] = clickAreaList.map((clickArea:ClickAreaResponse) => {
               const {start} = clickArea.coordinates
               const {end} = clickArea.coordinates
               const newCoordinates:Coordinate[] = [[...start],[...end]]
               const newClickArea:ClickArea = {...clickArea,coordinates:newCoordinates}
               return newClickArea
           })
           return ({...data, clickAreaList:newClickAreaList})
       })
    }).catch(()=>{
        console.log('error')
    })
    return FacilityDatas
}