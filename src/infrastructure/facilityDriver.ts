import { collection, getDocs, setDoc, doc} from "firebase/firestore";
import { db } from "../firebase/firebase";
import {FacilityResponse} from "../types/facilityItemRespons.d"

export class facilityDriver {
    getFacilities = async():Promise<FacilityResponse[]> => {
        const response:FacilityResponse[]|null = []
        const querySnapshot = await getDocs(collection(db, "facility"));
        querySnapshot.forEach(doc =>{
            response.push(doc.data() as FacilityResponse)
        })
        return response
    }
    setFacility = async(data:FacilityResponse):Promise<void> => {
        await setDoc(doc(db, "facility"), data);
    }
}


