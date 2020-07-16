const testEnv = require("../setup-db")
const users = require("../../../server/db/users")

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test("createUser inserts a single user", () => {
  let expected = 1

  return users
    .createUser(
      {
        username: "new_user",
        password: "s3cr3t",
      },
      testDb
    )
    .then((ids) => {
      let actual = ids.length
      expect(actual).toEqual(expected)
    })
})

test("userExists finds existing user", () => {
  let expected = true

  return users.userExists("jerryJ", testDb).then((result) => {
    let actual = result

    expect(actual).toEqual(expected)
  })
})

test("userExists does not find non-existant user", () => {
  let expected = false

  return users.userExists("not-a-username", testDb).then((result) => {
    let actual = result

    expect(actual).toEqual(expected)
  })
})

test("getUserByUsername finds existing user", () => {
  let expected = "janeDoe@hotmail.com"

  return users.getUserByUsername("janeDoe@hotmail.com", testDb).then((user) => {
    let actual = user.username

    expect(actual).toEqual(expected)
  })
})

test("getUsers returns all users from users table", () => {
  const expected = [
    {
      id: 1,
      username: "jerryJ",
      hash: "jioaefjaef",
    },
    {
      id: 2,
      username: "casperTheGhost",
      hash: "srhljsorhg",
    },
    {
      id: 3,
      username: "mitre10",
      hash: "oairgmioajrgarg",
    }
  ]

  return users.getUsers(testDb)
    .then((users) => {
      let actual = users

      expect(actual).toEqual(expect.arrayContaining(expected))
    })
})