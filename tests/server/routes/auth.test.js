import request from 'supertest'

jest.mock('../../../server/db/users', () => ({
  userExists: jest.fn(),
  createUser: jest.fn(),
  getUserByUsername: jest.fn(),
  getUsers: jest.fn(),
}))

const usersDb = require('../../../server/db/users')
const server = require('../../../server/server')

test('/register succeeds for new user', () => {
  let expected = 'Authentication successful.'

  // Mock userExists to return false
  usersDb.userExists.mockImplementation(username => Promise.resolve(false))
  // Mock createUser to work (resolve)
  usersDb.createUser.mockImplementation((username, password) => Promise.resolve())
  // Mock getUserByUsername to work (resolve)
  usersDb.getUserByUsername.mockImplementation((username) => Promise.resolve({ username: username }))

  return request(server).post('/api/v1/register')
  .expect(200)
  .then(res => {
    let actual = res.body.message

    expect(actual).toEqual(expected)
  })
})

test('/register fails for existing user', () => {
  let expected = 'USERNAME_UNAVAILABLE'

  // Mock userExists to return true
  usersDb.userExists.mockImplementation(username => Promise.resolve(true))

  return request(server).post('/api/v1/register')
  .expect(400)
  .then(res => {
    let actual = res.body.errorType

    expect(actual).toEqual(expected)
  })
})