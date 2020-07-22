const testEnv = require("../setup-db")
const ingredients = require("../../../server/db/ingredients")

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getIngredientsByName returns entries for existing ingredients', ()=>{
  let expected = ["steak","carrot"]

  let ingredientNames = ["apple", "bananas", "steak", "carrot"]

  return ingredients.getIngredientsByName(ingredientNames, testDb)
    .then(ingredients =>{
       let actual = ingredients.map(ingredient => ingredient.name)
    
    expect(actual).toEqual(expected)
  })
})