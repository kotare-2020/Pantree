
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, name: 'Beef stew', image: 'https://www.eatwell101.com/wp-content/uploads/2017/10/crock-pot-beef-stew-recipe.jpg', method: JSON.stringify([
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
            `Cut the pumpkin into 3cm / 2.25" slices. Cut into 4cm / 1.5" chunks.`,
            "Place the pumpkin, onion, garlic, broth and water in a pot - liquid won't quite cover all the pumpkin. Bring to a boil, uncovered, then reduce heat and let simmer rapidly until pumpkin is tender (check with butter knife) - about 10 minutes.",
            "Remove from heat and use a stick blender to blend until smooth (Note 3 for blender).",
            "Season to taste with salt and pepper, stir through cream (never boil soup after adding soup, cream will split). ",
            "Ladle soup into bowls, drizzle over a bit of cream, sprinkle with pepper and parsley if desired. Serve with crusty bread!",
          ])
        },
        {
          id: 4, name: 'Banana Bread', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/02/banana-bread.jpg', method: JSON.stringify([
            "Preheat the oven to 350°F and brush a 9x5-inch loaf pan with a bit of olive oil.",
            "In a large bowl, combine the mashed bananas with the sugar, almond milk, olive oil, vanilla, and apple cider vinegar and whisk until combined.",
            "In a medium bowl combine the flours, baking powder, baking soda, salt, cinnamon, and nutmeg.",
            "Add the dry ingredients to the bowl with the wet ingredients and stir until just combined, then fold in the walnuts. Pour into the prepared pan and sprinkle with the chopped walnuts and oats.",
            "Bake for 42 to 50 minutes, or until a toothpick inserted in the middle comes out clean.",
          ])
        },
        {
          id: 5, name: 'Mediterranean Salad with Pea Falafel', image: 'https://www.alfez.com/wp-content/uploads/2019/04/Lebanese-Style-Falafel-Salad-Bowl-2018.jpg', method: JSON.stringify([
            "Place frozen baby peas in a sieve and run hot water through them to defrost. Place in a food processor with the drained chickpeas, red onion, garlic, parsley, cumin seeds, chickpea flour and lemon zest. Process until mixture binds together but still has some texture. If the mixture is a bit too wet add a little extra chickpea flour. Season with salt and pepper to taste.",
            "Shape the mixture into 12 - 15 small patties. Place on a tray and refrigerate for 15 minutes.",
            "Place spinach leaves, parsley, tomatoes, red onion and olives into a bowl. Top with falafels and a good dollop of Just Hummus with Beetroot & Roasted Garlic. Whisk together lemon juice and olive oil and drizzle over the salad.",
            "Heat 2 Tbsp of olive oil in a small frying pan and cook the falafels over medium to low heat for 3-4 minutes each side or until golden and hot. Serve with the salad.",
          ])
        },
        {
          id: 6, name: 'Vegan Chilli', image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/07/vegan-chilli.jpg', method: JSON.stringify([
            `Heat oven to 200C/180C fan/gas 6. Put the sweet potato chunks in a roasting tin and drizzle over 1½ tbsp oil, 1 tsp smoked paprika and 1 tsp ground cumin. Give everything a good mix so that all the chunks are coated in spices, season with salt and pepper then roast for 25 mins until cooked.`,
            "Meanwhile, heat the remaining oil in a large saucepan over a medium heat. Add the onion, carrot and celery. Cook for 8-10 mins, stirring occasionally until soft then crush in the garlic and cook for 1 min more. Add the remaining dried spices and tomato puree. Give everything a good mix and cook for 1 min more.",
            "Add the red pepper, chopped tomatoes and 200ml of water. Bring the chilli to a boil then simmer for 20 mins. Tip in the beans and cook for another 10 mins before adding the sweet potato. Season to taste then serve with lime wedges, guac, rice and coriander. Make ahead and freeze for up to 3 months.",
          ])
        }
      ])
    })
}
