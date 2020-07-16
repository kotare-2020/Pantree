const request = require('supertest')

const server = require('../../../server/server')

jest.mock('../../../server/db/recipes', () => ({
    getRecipes: () => Promise.resolve([
        {
          "recipeId": 1,
          "recipeName": "pancake",
          "image": "images/1.jpg"
        },
        {
          "recipeId": 2,
          "recipeName": "stew",
          "image": "images/2.jpg"
        },
      ]),
      getRecipeAndIngredientsById: () => Promise.resolve({
            "recipeId": 1,
            "recipeName": "pancake",
            "image": "images/1.jpg",
            "method": [],
            "ingredients": [
            {
                "ingredientName": "carrot",
                "quantity": 5,
                "unit": "each"
            }
            ] 
        })
    
}))


// jest.mock('../../../server/db/recipes', () => ({
//     getRecipeAndIngredientsById: () => Promise.resolve({
//         "recipeId": 1,
//         "recipeName": "pancake",
//         "image": "images/1.jpg",
//         "method": [],
//         "ingredients": [
//         {
//             "ingredientName": "carrot",
//             "quantity": 5,
//             "unit": "each"
//         }
//         ] 
//     })
// }))



test('GET /api/v1/recipes returns an array of recipes', () => {
    // Arrange
    const expected = [
        {
          "recipeId": 1,
          "recipeName": "pancake",
          "image": "images/1.jpg"
        },
        {
          "recipeId": 2,
          "recipeName": "stew",
          "image": "images/2.jpg"
        },
      ]

    // Act
    return request(server).get('/api/v1/recipes')
      .expect(200)
      .then(response => {
          const actual = response.body

          // Assert
          expect(actual).toEqual(expected)
      })

})

test('GET /api/v1/recipes/recipeId returns the correct recipe', () => {
    // Arrange
    const expected = {
        "recipeId": 1,
        "recipeName": "pancake",
        "image": "images/1.jpg",
        "method": [],
        "ingredients": [
          {
            "ingredientName": "carrot",
            "quantity": 5,
            "unit": "each"
          }
        ] 
      }

    // Act
    return request(server).get('/api/v1/recipes/1')
      .expect(200)
      .then(response => {
          const actual = response.body

          // Assert
          expect(actual).toEqual(expected)
      })

})