/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 31/01/2023 - 10:02:29
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/01/2023
    * - Author          : 
    * - Modification    : 
**/
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
    value: string[]
}
const initialState: ReservationState = {
    value: []
}
export const reservationSlice = createSlice({
  name : "reservations",
  initialState,
  reducers:{
    addReservation: (state, action: PayloadAction<string>) => {
       state.value.push(action.payload)
    },
    removeReservation: (state, action: PayloadAction<number>) => {
        state.value.splice(action.payload, 1)
    }
  }
})

export const {addReservation, removeReservation} = reservationSlice.actions
export default reservationSlice.reducer