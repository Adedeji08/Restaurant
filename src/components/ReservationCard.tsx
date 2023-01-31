/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 31/01/2023 - 11:10:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/01/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationSlice';
import { addCustomer } from '../features/customerSlice';
import { v4 as uuid} from "uuid"

interface ReservationCardTypes {
  name: string;
  index: number
}

export default function ReservationCard({name, index}: ReservationCardTypes) {
  const dispatch = useDispatch()
  return  <div onClick={() => {
   dispatch(removeReservation(index))
   dispatch(addCustomer({
    id: uuid(),
    name,
    food: []
   }))
  }} className="reservation-card-container">{name}</div>
}
