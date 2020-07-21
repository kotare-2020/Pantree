import request from 'superagent'

const plansUrl = "/api/v1/plans"

export function getPlanApi(planId) {
  return request
  .get(`${plansUrl}/${planId}`)
  .then(response => response.body)
}

export function updatePlanApi(planId, plan) {
  return request
  .patch(`${plansUrl}/${planId}`)
  .send(plan)
  .then(response =>{
    return response.status
   } )
}

export function getPlanIdByUserId(userId) {
  return request
    .get(`${plansUrl}/plans/${userId}`)
    .then(response => response.body)
}

export function createPlanApi(userId) {
  return request
    .post(`${plansUrl}/${userId}`)
    .then(response => response.body)
}
