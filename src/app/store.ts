/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 31/01/2023 - 09:52:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/01/2023
    * - Author          : 
    * - Modification    : 
**/
import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from '../features/reservationSlice'
import customerReducer from '../features/customerSlice'

export const store = configureStore({
    reducer:{
        reservations: reservationsReducer,
        customer: customerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;