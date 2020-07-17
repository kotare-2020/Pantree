import request from 'superagent'

const rootUrl = "http://localhost:3000/api/v1/plans"

export function getPlanApi() {
  return request
  .get(rootUrl)
  .then(response => response.body)
}

export function updatePlanApi(id, plan) {
  return request
  .patch(`${rootUrl}/${id}`)
  .send(plan)
  .then(response => response.body)
}