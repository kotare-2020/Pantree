
export const SET_DAY = "SET_DAY"

export const selectDay = (selectedDay) =>{
  return {
    Type: SET_DAY,
    selectedDay,
  }
}