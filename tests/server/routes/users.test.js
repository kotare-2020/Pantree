  
import request from 'supertest'

jest.mock('../../../server/db/users', () => ({
    createUser: jest.fn(),
    userExists: jest.fn(),
    getUserByUsername: jest.fn(),
    getUsers: jest.fn(),
}))

const usersDb = require('../../../server/db/users')
const server = require('../../../server/server')

test('getUsers api works', () => {
    let expected = [{ "username": "admin" }, { "username": "plane" }]

    usersDb.getUsers.mockImplementation((data) => Promise.resolve(
        [{ "username": "admin" }, { "username": "plane" }]
    ))
    return request(server).get('/api/v1/users')
        .then(res => {
            let actual = res.body.users
            expect(actual).toEqual(expected)
        })
})