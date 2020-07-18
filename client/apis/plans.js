import request from 'superagent'

const plansUrl = "/api/v1/plans"

export function getPlanApi(id) {
  return request
  .get(`${plansUrl}/${id}`)
  .then(response => response.body)
}

export function updatePlanApi(id, plan) {
  return request
  .patch(`${plansUrl}/${id}`)
  .send(plan)
  .then(response => response.body)
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