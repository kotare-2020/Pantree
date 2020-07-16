  
import request from 'supertest'

jest.mock('../../../server/db/users', () => ({
    createUser: jest.fn(),
    userExists: jest.fn(),
    getUserByUsername: jest.fn(),
    getUsers: jest.fn(),
}))

const usersDb = require('../../../server/db/users')
const server = require('../../../server/server')

test('/getMeetingHistory api works', () => {
    let expected = 1111
  
    meetingsDb.getMeetingHistory.mockImplementation((user) => Promise.resolve(
        [{ "id": 1111 }, { "id": 1111 }]
    ))
    return request(server).get('/api/v1/meetings')
        .then(res => {
        let actual = res.body[0].id
        expect(actual).toEqual(expected)
        })
})

test('/getMeetingAttendees api works', () => {
    let expected = "admin"

    meetingsDb.getMeetingAttendees.mockImplementation((data) => Promise.resolve(
        [{ "username": "admin" }, { "username": "plane" }]
    ))
    return request(server).get('/api/v1/meetings/1/users')
        .then(res => {
            let actual = res.body.data[0].username
            expect(actual).toEqual(expected)
        })
})

test('/getAllMeetings api works', () => {
    let expected = 2

    meetingsDb.getAllMeetings.mockImplementation(() => Promise.resolve(
        [{ "username": "admin" }, { "username": "plane" }]
    ))

    return request(server).get('/api/v1/meetings/all')
        .then(res => {
            let actual = res.body.data.length
            expect(actual).toEqual(expected)
        })
})