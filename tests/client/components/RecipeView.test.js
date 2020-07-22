import React from 'react'
import { RecipeView } from '../../../client/components/RecipeView'
import { shallow, mount } from 'enzyme'

// test ('Jest works', () => {
//     expect(7).toBeLessThan(9)
// })

test("RecipeView renders only one button - 'Back to Plan' when selectedDay is empty", () => {
    //Act
    const wrapper = shallow(
        <RecipeView
            dispatch={() => { }}
            match={{ params: { id: 1 } }}
            selectedRecipe={
                {
                    recipeId: 1,
                    recipeName: "Beef stew",
                    image: "https://www.onceuponachef.com/images/2011/02/beef-stew-with-carrots-potatoes-760x528.jpg",
                    method: [
                        "Heat olive oil in a large stockpot or Dutch oven over medium heat. Season steak with 1 teaspoon salt and 1/2 teaspoon pepper. Working in batches, add steak to the stockpot and cook, stirring occasionally, until evenly browned, about 6-8 minutes; set aside.",
                        "Add onion, carrots and celery. Cook, stirring occasionally, until tender, about 3-4 minutes."
                    ],
                    ingredients: [
                        {
                            ingredientName: "steak",
                            quantity: 1,
                            unit: "kg"
                        },
                        {
                            ingredientName: "carrot",
                            quantity: 2,
                            unit: "each"
                        },
                        {
                            ingredientName: "onion",
                            quantity: 1,
                            unit: "each"
                        },
                    ]
                }
            }
            selectedDay={null} />
    )
    // console.log(wrapper.debug())

    // Assert
    expect(wrapper.find('button')).toHaveLength(1)
})

test("RecipeView renders two buttons when selectedDay is not empty", () => {
    //Act
    const wrapper = shallow(
        <RecipeView
            dispatch={() => { }}
            match={{ params: { id: 1 } }}
            selectedRecipe={
                {
                    recipeId: 1,
                    recipeName: "Beef stew",
                    image: "https://www.onceuponachef.com/images/2011/02/beef-stew-with-carrots-potatoes-760x528.jpg",
                    method: [
                        "Heat olive oil in a large stockpot or Dutch oven over medium heat. Season steak with 1 teaspoon salt and 1/2 teaspoon pepper. Working in batches, add steak to the stockpot and cook, stirring occasionally, until evenly browned, about 6-8 minutes; set aside.",
                        "Add onion, carrots and celery. Cook, stirring occasionally, until tender, about 3-4 minutes."
                    ],
                    ingredients: [
                        {
                            ingredientName: "steak",
                            quantity: 1,
                            unit: "kg"
                        },
                        {
                            ingredientName: "carrot",
                            quantity: 2,
                            unit: "each"
                        },
                        {
                            ingredientName: "onion",
                            quantity: 1,
                            unit: "each"
                        },
                    ]
                }
            }
            selectedDay={1} />
    )

    // Assert
    expect(wrapper.find('button')).toHaveLength(2)
})