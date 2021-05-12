# Pantree

🌱 Pantree is a simple meal planner app with a focus on sustainability and connecting users to locally sourced ingredients.

🔨 It was built using Node, Express.js, React and Redux.

⭐ This was built by the following amazing people, as part of our final group project at [Enspiral Dev Academy](https://devacademy.co.nz/):

- [Aisyah Tajudin](https://github.com/aisyah-t)
- [Ben Means](https://github.com/benjamin-means)
- [Fai Songprasit](https://github.com/fai-songprasit)
- [Jefferson Matumba](https://github.com/JeffersonMat)
- [Joe Butler](https://github.com/joe-butler-dev)
- [Rose Mead](https://github.com/rose-mead)

🚀 Take a look at:

- The live app [here](https://pantreee.herokuapp.com/)!
- Our [CONTRIBUTING.md](/CONTRIBUTING.md) - basic guide on our branching strategy
- Our [PROJECT.md](/PROJECT.md) - this has more details about what the project entailed and our initial planning documentation. If you'd like to know about the origins of the app, take a look.

---

## Server-side details

### API endpoints

#### Get a plan by providing a planId

**_GET_** /plans/:planId

Response Body:

```JSON
 [
    {
      "dayNumber": 1,
      "recipes": [
        {
          "recipeId": 1,
          "recipeName": "pancake"
        },
        {
          "recipeId": 2,
          "recipeName": "stew",
        }
      ],
      "dayNumber": 2,
      "recipes": [{"..."}, {"..."}]
    }
  ]

```

#### Get summary of all recipes in the Pantree recipe catalogue

**_GET_** /recipes

Response Body:

```JSON
[
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
```

#### Get all details of a particular recipe by recipeId

**_GET_** /recipes/:recipeId

Response Body:

```JSON
{
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
```

#### Add a recipe to the Pantree recipe catalogue

**_POST_** /recipes

Response Body:

```js
{
  // recipeId, allRecipes
}
```

#### Add all ingredients required by a recipe

**_POST_** /recipes/:recipeID/ingredients

Response Body:

```js
{
  // ingredients
}
```

#### Add all ingredients

**_POST_** /ingredients

Response Body:

```js
[
  // ingredientIds
]
```

#### Get all shopping list items and their required amounts based on a planId

**_GET_** /shopping-list/:planId

Response Body:

```JSON
[
  {
    "ingredientId": 1,
    "ingredientName": "flour",
    "quantity": 5,
    "unit": "kg"
  },
  {
    "ingredientId": 3,
    "ingredientName": "onion",
    "quantity": 2,
    "unit": "each"
  }
]
```

#### Add a plan for a user, based on their userId

**_POST_** /plans/:userId

Request Body:

```js
{
  // userId: 2,
}
```

Response Body:

```js
{
  // planId: 12,
}
```

#### Update a plan of a given planId

**_PATCH_** /plans/:planId

```JSON
 [
    {
      "dayNumber": 1,
      "recipes": [
        {
          "recipeId": 1,
          "recipeName": "pancake"
        },
        {
          "recipeId": 2,
          "recipeName": "stew",
        }
      ],
      "dayNumber": 2,
      "recipes": [{"..."}, {"..."}]
    }
  ]

```

#### Get a plan for a user by providing their userId

**_GET_** /plans/:userId

```JSON
2
```

Response Body:

```js
{
  // status 200
}
```

### Database structure

#### recipes

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| name        | String    |
| image       | String    |
| method      | String    |

#### recipes_ingredients (many-to-many)

| Column Name   | Data Type |
| ------------- | --------- |
| id            | Integer   |
| quantity      | Integer   |
| recipe_id     | Integer   |
| ingredient_id | Integer   |

#### ingredients

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| name        | String    |
| unit        | String    |

#### users

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| username    | String    |
| hash        | String    |

#### plans (one-to-many)

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| user_id     | Integer   |
| name        | String    |

#### plans_recipes (many-to-many)

| Column Name | Data Type |
| ----------- | --------- |
| plan_id     | Integer   |
| day_number  | Integer   |
| recipe_id   | Integer   |

---

## Client-side details

### Global state

```js
{
  auth:
  message: "...",
  plans: [{},{}]
  recipes: [{},{}],
  selectedDay: integer,
  selectedRecipe: id
  planNeedsFetching: bool
  shoppingList: [{},{}]
}
```

### Local states

```js
// AddIngredients
{
  ingredients: [
      {name:"", unit:""}
  ]
}

// AddRecipe
{
  name: '',
  image: '',
  method: '',
}

// Landing
{
  componentView: "Sign in"
}

// Register
{
  username: '',
  password: '',
  confirm_password: '',
}

// SignIn
{
  username: '',
  password: ''
}
```

### Actions

#### plan

| type | data | purpose |
| --- | --- | --- |
| SET_PLAN_NEEDS_FETCHING | bool | will load a user's plan when they log in, and stop the plan being pulled from the database while they're logged in and making changes |
| GET_PLAN | plan | retreive plan from the db and store in redux, set loading : true |
| SET_PLAN | plan | save plan to store |
| UPDATE_DAY_RECIPE | recipeId/SelectedDay | add selected recipeId/selectedDay from globalState |
| CLONE_DAY_RECIPE | column of day, uuid of recipe being cloned | clone a recipe in globalState |
| MOVE_DAY_RECIPE_LEFT | selectedDay, recipe being moved | move recipe one day left |
| MOVE_DAY_RECIPE_RIGHT | selectedDay, recipe being moved | move recipe one day right |
| REMOVE_DAY_RECIPE | recipeId/SelectedDay | remove selected recipeId/SelectDay from globalState |
| MOVE_RECIPE_CARD_DOWN | clickedRecipeId & selectedDay | increase index of recipe in plans array by one |
| MOVE_RECIPE_CARD_UP | clickedRecipeId & selectedDay | reduce index of recipe in plans array by one |
| savePlan | userId, plan | save plan to db - thunk action |
| fetchPlan | id | get plan from db - thunk action |
| createPlan | userId | create a new plan in db - thunk action |

#### loading

| type    | data    | purpose                        |
| ------- | ------- | ------------------------------ |
| LOADING | boolean | show loadng anmation for async |

#### selected day

| type      | data         | purpose                                |
| --------- | ------------ | -------------------------------------- |
| SET_DAY   | selected_day | set specific day to add recipe to      |
| CLEAR_DAY |              | set selected day to Null (initialSate) |

#### recipes

| type | data | purpose |
| --- | --- | --- |
| saveRecipe | recipe | save the recipe to DB and then return all recipes and store in redux - thunk action |
| fetchRecipes | recipes | retreive recipes from db and store in redux - thunk action |
| SET_RECIPES | recipe | save recipes to store |

#### recipe

| type | data | purpose |
| --- | --- | --- |
| fetchSelectedRecipe | recipeId | retreive recipe from db and store in redux - thunk action |
| SET_SELECTED_RECIPE | recipeId | save recipe to store |

#### shopping list

| type     | data         | purpose                                    |
| -------- | ------------ | ------------------------------------------ |
| GET_LIST | planId       | retreive recipe from db and store in redux |
| SET_LIST | shoppingList | save recipe to store                       |
