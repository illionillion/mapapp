import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Facility } from '../types/facilityItem.d'

const initialState:Facility[] = []

export const facilitySlice = createSlice({
    name: 'facility',
    initialState,
    reducers:{
        setFacility:(state:Facility[],action: PayloadAction<Facility[]>)=>{
            state.push(...action.payload)
        }
    },
})

export const {setFacility} = facilitySlice.actions

