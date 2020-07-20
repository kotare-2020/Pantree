
export const SET_DAY = "SET_DAY"
export const CLEAR_DAY = "CLEAR_DAY"

export const selectedDay = (selectedDay) =>{
  return {
    type: SET_DAY,
    selectedDay,
  }
}

export const clearSelectedDay =()=>{
return{
  type: CLEAR_DAY,
}

}