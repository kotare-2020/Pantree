
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, name: 'Beef stew', image: 'https://s23209.pcdn.co/wp-content/uploads/2020/03/Best-Ever-Beef-StewIMG_1367.jpg', method: JSON.stringify([
            'Heat olive oil in a large stockpot or Dutch oven over medium heat. Season steak with 1 teaspoon salt and 1/2 teaspoon pepper. Working in batches, add steak to the stockpot and cook, stirring occasionally, until evenly browned, about 6-8 minutes; set aside.',
            'Add onion, carrots and celery. Cook, stirring occasionally, until tender, about 3-4 minutes.',
            'Add garlic and mushrooms, and cook, stirring occasionally, until tender and browned, about 3-4 minutes.',
            'Whisk in flour and tomato paste until lightly browned, about 1 minute.',
            'Stir in wine, scraping any browned bits from the bottom of the stockpot.',
            'Stir in beef stock, thyme, bay leaves and steak. Bring to a boil; reduce heat and simmer until beef is very tender, about 30 minutes.',
          ' Stir in potato; simmer until potatoes are just tender and stew has thickened, about 20 minutes. Remove and discard thyme sprigs and bay leaves. Stir in parsley; season with salt and pepper, to taste.'
          ])
        },
        {
          id: 2, name: 'Pancakes', image: 'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg', method: JSON.stringify([
            'Sift the Edmonds Self Raising Flour and Chelsea White Sugar into a bowl. Make a well in the centre of the dry ingredients.', 'Add the lemon zest, Meadow Fresh Milk, egg and melted Tararua Butter/margarine and whisk to combine. Heat a large non stick frying pan over medium low heat and grease lightly with Tararua Butter or oil.',
            'For each pancake, place 2 tablespoons of batter into the pan. Cook for 2 minutes or until bubbles form on the surface. Turn and cook for a further 1 to 2 minutes or until the pancakes are cooked through.',
            
            'Garnish with berries, bananas and Chelsea Flavoured Syrup - Butterscotch, Caramel, Vanilla, Maple or Honey Maple.'
          ])
        },
        {
          id: 3, name: 'Pumpkin Soup', image: 'http://media.cookingandbeer.com/pumpkincurrysoup5.jpg', method: JSON.stringify([
            `Cut the pumpkin into 3cm / 2.25" slices. Cut the skin off and scrape seeds out (video is helpful). Cut into 4cm / 1.5" chunks.`,
            "Place the pumpkin, onion, garlic, broth and water in a pot - liquid won't quite cover all the pumpkin. Bring to a boil, uncovered, then reduce heat and let simmer rapidly until pumpkin is tender (check with butter knife) - about 10 minutes.",
            "Remove from heat and use a stick blender to blend until smooth (Note 3 for blender).",
            "Season to taste with salt and pepper, stir through cream (never boil soup after adding soup, cream will split). ",
            "Ladle soup into bowls, drizzle over a bit of cream, sprinkle with pepper and parsley if desired. Serve with crusty bread!",
          ])
        }
      ])
    })
}
