
export const SET_DAY = "SET_DAY"

export const selectDay = (selectedDay) =>{
  return {
    type: SET_DAY,
    selectedDay,
  }
}