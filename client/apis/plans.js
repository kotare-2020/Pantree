import request from 'superagent'

const rootUrl = "/api/v1/plans"

export function getPlanApi(id) {
  return request
  .get(`${rootUrl}/${id}`)
  .then(response => response.body)
}

export function updatePlanApi(id, plan) {
  return request
  .patch(`${rootUrl}/${id}`)
  .send(plan)
  .then(response => response.body)
}