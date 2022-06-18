import { collection, getDocs, addDoc} from "firebase/firestore";
import { db } from "../firebase/firebase";
import {FacilityResponse} from "../types/facilityItemResponse.d"

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
        try{
            await addDoc(collection(db, "facility"), data);
        }catch(err){
            console.log(err);
        }
        
    }
}


