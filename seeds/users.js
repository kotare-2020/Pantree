const { generateHash } = require('authenticare/server')
const { HotModuleReplacementPlugin } = require('webpack')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
  .del()
    .then(function () {
      return Promise.all(
        [
          {
            id: 1,
            username: 'janeDoe@hotmail.com',
            password: 'jane'
          },
          {
            id: 2,
            username: 'johnDoe@hotmail.com',
            password: 'john'
          },
          {
            id: 3,
            username: 'johnSmith@hotmail.com',
            password: 'john'
          },
          {
            id: 4,
            username: 'julieSmith@hotmail.com',
            password: 'julie'
          }
        ].map((user) => {
          return generateHash(user.password).then((hash) => {
            user.hash = hash
            delete user.password
            return user
          })
        })
      ).then((users) => {
        return knex('users').insert(users)
      })
    })
}
