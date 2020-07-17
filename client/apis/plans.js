import request from 'superagent'

const plansUrl = "/api/v1/plans"

export function getPlanApi() {
  return request
  .get(plansUrl)
  .then(response => response.body)
}

export function updatePlanApi(id, plan) {
  return request
  .patch(`${plansUrl}/${id}`)
  .send(plan)
  .then(response => response.body)
}