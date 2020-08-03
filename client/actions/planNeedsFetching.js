export const SET_PLAN_NEEDS_FETCHING = 'SET_PLAN_NEEDS_FETCHING'

export const setPlanNeedsFetching = status => {
  return {
    type: SET_PLAN_NEEDS_FETCHING,
    status,
  }
}