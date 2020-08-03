# Learn more about Pantree

🌱 Pantree was designed to be a simple meal planner that connects users to locally sourced, sustainable ingredients.

The idea came from our team's desire to build a meal planner app that was user friendly and could not only educate users about more ethical choices when it comes to food, but also create local communities of food gatherers and growers. There are plenty of meal planner apps out there, and not many of them hit these marks.

It was built as our final group project at [Enspiral Dev Academy](https://devacademy.co.nz/). We had 7 days to build the app based on skills we had acquired over a 9 week dev bootcamp, and since completing the course, we've continued to work on Pantree as a team.

The notes below have been kept for historical purposes -- they show our initial planning and implementation documentation.

⭐ Pantree was built by:

- [Aisyah Tajudin](https://github.com/aisyah-t)
- [Ben Means](https://github.com/benjamin-means)
- [Fai Songprasit](https://github.com/fai-songprasit)
- [Jefferson Matumba](https://github.com/JeffersonMat)
- [Joe Butler](https://github.com/joe-butler-dev)
- [Rose Mead](https://github.com/rose-mead)

---

## Roles

As part of the project we were encouraged for each person in the team to have a useful role. As a team we decided on these roles and their relevant responsibilities.

| Who | Role | Responsibilities |
| --- | --- | --- |
| Joe | Product Owner | <li>Doubles as Project Lead</li><li>Voice of customer</li><li>Scrum master</li><li>Keep product documentation up to date</li><li>Deployment to Heroku</li> |
| Fai | Git Floater | <li>Knowing where everyone's at with the code</li><li>Guiding when conflicts arise</li><li>Deals with issues after code is submitted to GitHub</li><li>Making sure that the person responsible for a conflict deals with it</li> |
| Jefferson | Vibes and fun checker | <li>Be aware of the state of the group and individuals</li><li>Call out when the vibe isn't good</li><li>Respond appropriately when someone's vibe drops</li><li>Stop everyone at 4pm to make sure team has some fun</li> |
| Ben | Front-end tech lead | <li>Making sure everyone follows set conventions</li><li>Leads solving technical problems during the coding process, first port of call but doesn’t need to be the expert - just guide people to a solution</li><li>Keeping technical documentation up to date</li><li>Final call on technical decisions / approaches / standardisation</li> |
| Rose | Back-end tech lead | Same as front-end tech lead but for back-end |
| Aisyah | Co-helper | <li>Float around</li><li>Pitch in when needed or available</li> |

## User flow

| Page | Route | Details |
| --- | --- | --- |
| Landing | / | Allow a user to sign in or register. Once done, redirect to user's plan |
| Nav | N/A | Nav bar available on all pages once a user is logged in. Allows the user to navigate to their plan, the recipe catalogue, local supplier list, or log out |
| Plan | /plan | Show a user's meal plan. Allow a user to move recipe cards around, clone/add/delete, etc. |
| Recipes | /recipes | Show recipes in the Pantree recipe catalogue, and add to the user's meal plan |
| Recipe view | /recipes/:recipeId | Show more details about a particular recipe. A user can add the recipe to their plan, or back out to the recipes page |
| Shopping list | /shopping-list | Show a list of ingredients required for the user's meal plan and their respective quantities |
| Local suppliers | /suppliers | Show a list of local suppliers with sustainable ingredients |

## Views (React components)

| name | purpose |
| --- | --- |
| Nav | Nav bar for all pages except the landing page |
| Landing | Landing page component allowing a user to sign in or register |
| LandingAbout | Logo and description of Pantree, shown on the landing page |
| SignIn | Shown on landing page by default, allowing an existing user to sign in |
| Register | Alternative component allowing a new user to register, shown conditionally instead of SignIn |
| Plan | The main plan table, parent component |
| PlanColumn | Child of Plan, represents recipes entered for a single day |
| PlanRecipeCard | Child of PlanColumn, represents a single recipe entry |
| Recipes | Recipes page |
| RecipeThumbnail | Child of Recipes, a card showing basic details about a recipe stored in the Pantree recipe book |
| RecipeView | A page showing a detailed view of a recipe |
| AddRecipe | A form for adding new recipes to recipes |
| Ingredients | Populates data for individual ingredients to be added via AddRecipe |
| ShoppingList | A page showing a users shopping list, based on their meal plan |
| Suppliers | A page showing a list of local suppliers with sustainably sourced produce |

---

## Wireframes

### Landing page

![Landing page](/project/images/landing_page.jpg 'Landing page')

### Sign in component

![Sign in component](/project/images/signin_component.jpg 'Sign in component')

### Register component

![Register component](/project/images/register_component.jpg 'Register component')

### Nav bar

![Nav bar component](/project/images/navbar.jpg 'Nav bar')

### Plan page

![Plan page](/project/images/plan.jpg 'Plan page')

### Shopping list

![Shopping list page](/project/images/shopping_list.jpg 'Shopping list page')

### Recipe view

![Recipe view](/project/images/view_recipe.jpg 'Recipe view')

### Supplier list

![Supplier page](/project/images/supplier_list.jpg 'Supplier page')

---

## User stories

### MVP

As a user, I want:

- I want a landing page so that I can be introduced to Pantree and sign in or register
- I want to be able to sign in from the landing page so that I can start making a meal plan
- I want to be able to register from the landing page, so that I can start using Pantree
- A 'My plan' page, so that I can review my meal plan for the week. Days are numbered 1-7. Meals are listed by number, and I can add an indefinite number of meals to each day
- To add a recipe from the Pantree recipe catalogue to my plan, on the day I selected from My plan page
- A 'Recipes' page, to see what recipes are available for Pantree's catalogue for me to choose from. Each recipe should have a name, image, View and Add button
- To remove a recipe from my plan
- To view more details about a recipe from the recipe catalogue, so that I can see what ingredients are needed and how to make it. Each recipe makes 1 portion and assumes no leftovers
- To go back to the recipe catalogue if I choose not to add a recipe from View mode
- To view my shopping list, so I can see the total ingredients required for my entire weekly plan
- To see a list of local suppliers with fresh, sustainable produce
- A nav bar on all screens except the landing page, so that I can navigate between My plan, Shopping list, Recipes, Local suppliers, or Log out

### Stretch

As a user, I want:

- To be able to manually enter recipes to my own recipe catalogue, so I'm not limited by only Pantree's recipe catalogue
- To be able to add recipes by URL using screenscraping, so I can manually add recipes from the internet
- The ability to save a meal plan with a name, so that I can use it again in future if I liked it
- The option to sort my shopping list by category, so I have an easier time when I go shopping for the ingredients
- To be able to drag and drop recipes on my plan, so I can shuffle things around easily
- To be able to clone recipes on my plan, so it's easy for me to plan out multiple days with the same recipe
- To have my recipe units converted into something much easier
- The ability to save a list of items I have in my pantry already, so I can remove them from my shopping list
- Pantree to compare my total recipe list with what's already in my pantry, so I don't have ingredients already in my pantry in my final shopping list
- Pantree to suggest wine pairings with my meals and the option to add the wine to my shopping cart
- Pantree to suggest places where I can get my sustainably sourced produce
- To export my shopping list to another tool of my choice (eg. google shopping list, trello, etc.)
- The ability to click on recipes from my plan page and view selected recipe details without being able to add recipe to plan.
- The ability to click on recipes from the navbar and view recipe catalogue without being able to add recipes to plan