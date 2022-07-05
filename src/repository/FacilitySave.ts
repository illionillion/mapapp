import {facilityDriver} from "../infrastructure/facilityDriver"
import { Facility } from "../types/facilityItem.d"
import { FacilityResponse } from "../types/facilityItemResponse.d"
import { facilityResMapper } from "./facilityResMapper"
export const facilitySave = async (data:Facility):Promise<void> => {
    const facilityData:FacilityResponse = facilityResMapper(data)
    const driver = new facilityDriver
    await driver.setFacility(facilityData)
}