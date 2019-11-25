/**
 * A server-side module that contains an array of all recipe objects.
 */

exports.Recipes = [{
        name: "Buttery 3-Ingredient Shortbread Cookies",
        season: "YearRound", level: "Easy", time: "3", type: "Dessert",
        image: "Buttery_3-Ingredient_Shortbread_Cookies.jpg",
        ingredients: ["1 cup unsalted butter, softened", "1/2 cup sugar", "2 cups all-purpose flour", "Confectioners' sugar, optional"],
        steps: ["Preheat oven to 325 degrees Fahrenheit.",
                "Cream butter and sugar until light and fluffy. Gradually beat in flour.",
                "Press dough into an ungreased 9-inch square baking pan. Prick with a fork.",
                "Bake until light brown, 30-35 minutes. Cut into squares while warm.",
                "Cool completely on a wire rack. If desired, dust with confectioners' sugar."],
        blurb: "They may not come out of a tin with the Scottish flag on it, but these simple cookies are pure, buttery deliciousness."
},

{
        name: "Tomato Basil Salmon",
        season: "Summer", level: "Easy", time: "2", type: "MainCourse",
        image: "Tomato_Basil_Salmon.jpg",
        ingredients: ["2 6-ounce boneless salmon fillets", "1 tablespoon dried basil", "1 tomato, thinly sliced", "1 tablespoon olive oil", "2 tablespoons grated Parmesan cheese"],
        steps: ["Preheat oven to 375 degrees Fahrenheit.",
                "Line a baking sheet with a piece of aluminum foil. Spray with nonstick cooking spray.",
                "Place the salmon filets onto the foil, sprinkle with basil, top with tomato slices, drizzle with olive oil, and sprinkle with Parmesan cheese.",
                "Bake until the salmon is opaque in the center and Parmesan cheese is lightly browned on top (about 20 minutes."],
        blurb: "A simple weeknight dinner bursting with the flavors of a Mediterranean summer."
},
{
        name: "Salmon With Brown Sugar Glaze",
        season: "YearRound", level: "Average", time: "1", type: "MainCourse",
        image: "Salmon_with_Brown_Sugar_Glaze.jpg",
        ingredients: ["1/4 cup packed light brown sugar", "2 tablespoons Dijon mustard", "4 6-ounce boneless salmon filets", "salt and ground black pepper to taste"],
        steps: ["Preheat the oven's broiler and set the oven rack at about 6 inches from the heat source.",
                "Prepare the rack of a broiler pan with cooking spray.",
                "Season the salmon with salt and pepper and arrange onto the prepared broiler pan.",
                "Whisk together the brown sugar and Dijon mustard in a small bowl; spoon mixture evenly onto top of salmon fillets.",
                "Cook under the preheated broiler until the fish flakes easily with a fork, 10 to 15 minutes."],
        blurb: "An easy, delicious way to prepare fish. This recipe might have been how my mother got me to eat fish for the first time when I was seven."
},
{
        name: "World's Best Honey Garlic Pork Chops",
        season: "YearRound", level: "Average", time: "2", type: "MainCourse",
        image: "World's_Best_Honey_Garlic_Pork_Chops.jpg",
        ingredients: ["1/2 cup ketchup", "2 2/3 tablespoons honey", "2 tablespoons low-sodium soy sauce", "2 cloves garlic, crushed", "6 4-ounce 1-inch thick pork chops"],
        steps: ["Preheat grill for medium heat and lightly oil the grate.",
                "Whisk ketchup, honey, soy sauce, and garlic together in a bowl to make a glaze.",
                "Sear the pork chops on both sides on the grill. Lightly brush glaze onto each side of the chops as they cook.",
                "Grill until no longer pink in the center, about 7 to 9 minutes per side. An instant-read thermometer inserted into the center should read 145 degrees Fahrenheit."],
        blurb: "A quick, easy pork chop recipe. What are you waiting for? Go fire up the grill!"
},
{
        name: "Balsamic Ravioli",
        season: "YearRound", level: "Average", time: "3", type: "MainCourse",
        image: "Balsamic_Ravioli.jpg",
        ingredients: ["1/2 cup walnuts", "1 25-ounce package store-bought ravioli", "2 tablespoons butter", "2 tablespoons balsamic vinegar", "1/4 cup grated Parmesan cheese"],
        steps: ["Toast walnuts in a skillet over medium heat.",
                "Cook and stir until browned and fragrant, 8-10 minutes. Remove from skillet.",
                "Fill a pot with lightly salted water and bring to a rolling boil; stir in ravioli and return to a boil.",
                "Cook uncovered, stirring occasionally, until the ravioli float to the top and the filling is hot, 3 to 5 minutes. Drain.",
                "Warm butter in a skillet over medium heat until slightly brown, about 1 minute.",
                "Add balsamic vinegar; cook and stir until melted and combined, 1 to 2 minutes",
                "Stir in ravioli; mix until combined.",
                "Top with walnuts and Parmesan cheese."],
        blurb: "For an added challenge, make your own ravioli. Even if you don't, this is an absolutely lovely recipe that somehow manages to be heart-healthy!"
},
{
        name: "Simple Baked Chicken Breasts",
        season: "YearRound", level: "Easy", time: "3", type: "MainCourse",
        image: "Simple_Baked_Chicken_Breasts.jpg",
        ingredients: ["4 skinless, boneless chicken breast halves", "2 tablespoons olive oil", "1 tablespoon coarse sea salt", "1 pinch Creole seasoning or to taste", "1 tablespoon water, or as needed"],
        steps: ["Preheat oven to 400 degrees Fahrenheit",
                "Rub chicken breasts with olive oil and sprinkle both sides with salt and Creole seasoning.",
                "Place chicken in a broiler pan.",
                "Bake in the preheated oven for 10 minutes. Flip chicken and cook until no longer pink in the center and the juices run clear, about 15 minutes more.",
                "Remove chicken from pan. Pour water into the pan, while scraping the browned bits of food off of the bottom of the pan with a wooden spoon. Add more water if needed to dislodge the browned bits; serve alongside chicken."],
        blurb: "Unbelievably useful. For a quick and easy snack, bake a bunch of these, chop them up, and put in Tupperware. My dad swears by this! (Seriously. It's kind of scary how much chicken that guy eats.)"
},
{
        name: "Baked Kale Chips", season: "Fall", level: "Easy", time: "2", type: "Appetizer",
        image: "Baked_Kale_Chips.jpg",
        ingredients: ["1 bunch kale", "1 tablespoon olive oil", "1 teaspoon seasoned salt"],
        steps: ["Preheat an oven to 350 degrees Fahrenheit.",
                "Line a non-insulated cookie sheet with parchment paper.",
                "With a knife or kitchen shears carefully remove the leaves from the thick stems and tear into bite-size pieces. Wash and thoroughly dry kale with a salad spinner.",
                "Drizzle kale with olive oil and sprinkle with seasoning salt.",
                "Bake until the edges brown but are not burnt, 10 to 15 minutes."],
        blurb: "The perfect low-calorie snack. Good luck saving some for your guests-they're yummy enough that the chef can't be blamed for eating them all."
},
{
        name: "Perfect Hard Boiled Eggs", season: "YearRound", level: "Easy", time: "4", type: "Appetizer",
        image: "Perfect_Hard_Boiled_Eggs.jpg",
        ingredients: ["6 eggs"],
        steps: ["Place eggs into a saucepan and pour in cold water to cover. Place over high heat.",
                "When the water just starts to simmer, turn off heat, cover pan with a lid, and let stand for 17 minutes. Don't peek.",
                "Pour out the hot water and pour cold water over eggs.",
                "Drain and refill with cold water; let stand until eggs are cool, about 20 minutes.",
                "Peel eggs under running water."],
        blurb: "Perfect for an on-the-go breakfast, a quick lunch, or, with some spices judiciously sprinkled on top, an excellent hors d'ouvre."
},
{
        name: "Mediterranean Spread", season: "YearRound", level: "Easy",
        //The coder would like to note that Easy, in this case, can be amended to Laughably Easy.
        time: "3", type: "Appetizer", image: "Mediterranean_Spread.jpg",
        ingredients: ["1 8 ounce package cream cheese, softened", "1/4 cup sour cream", "1 4-ounce container crumbled feta cheese", "2 teaspoons garlic powder", "2 teaspoons dill weed"],
        steps: ["Mix cream cheese, sour cream, feta cheese, garlic powder, and dill weed in a bowl until well blended.",
                "Cover and refrigerate for 30 minutes before serving."],
        blurb: "Best served with pita chips or French bread."
},
{
        name: "Cheesy Thumbprint Appetizers With Hot Pepper Jelly", season: "YearRound", level: "Advanced",
        time: "4", type: "Side", image: "Cheesy_Thumbrint_Appetizers_with_Hot_Pepper_Jelly.jpg",
        ingredients: ["2 cups shredded Cheddar cheese", "1 cup all-purpose flour", "6 tablespoons chilled butter, chopped", "1/2 cup hot pepper jelly"],
        steps: ["Blend Cheddar cheese, flour, and butter in a food processor until dough is a coarse-meal texture and forms into a ball.",
                "Wrap dough in plastic wrap and refrigerate for 30 minutes.",
                "Preheat oven to 400 degrees Fahrenheit.",
                "Shape dough into 1 1/2-inch balls and place 1 inch apart on a baking sheet.",
                "Bake n the preheated oven for 5 minutes.",
                "Remove from oven; press thumb into top of each ball, creating an indentation. Spoon about 1 teaspoon pepper jelly into indentation.",
                "Bake until edges are golden brown, about 5 minutes."],
        blurb: "Not your average cookies, these pack one heck of a punch! If you want, you can make your own jelly."
},
{
        name: "Roasted Tajin Pumpkin Seeds", season: "Fall", level: "Average", time: "4", type: "Appetizer",
        image: "Roasted_Tajin_Pumpkin_Seeds.jpg",
        ingredients: ["1 teaspoon vegetable oil", "1 cup raw pumpkin seeds", "1 teaspoon salt", "1 tablespoon chile powder with lime"],
        steps: ["Preheat oven to 325 degrees Fahrenheit. Lightly oil a baking sheet.",
                "Bring 6 cups of water to boil in a saucepan. Add pumpkin seeds and salt; simmer for 10 minutes.",
                "Strain and pat dry.",
                "Spread seeds in a single layer on the prepared baking sheet; sprinkle chile powder with lime on top.",
                "Bake in the preheated oven for 10 minutes; remove pan from oven.",
                "Stir seeds, spread back into a single layer, and return to hot oven.",
                "Repeat twice more, stirring every 10 minutes, until seeds are golden and crisp."],
        blurb: "Ever wondered what to do with the guts left over from jack-o-lantern carving? Look no further!"
},
{
        name: "All-Fruit Smoothies", season: "Summer", level: "Easy", time: "1", type: "Beverage",
        image: "All-Fruit_Smoothies.jpg",
        ingredients: ["1 cup pineapple juice", "1 large banana, cut into chunks", "1 cup frozen strawberries", "1 cup frozen blueberries"],
        steps: ["Pour pineapple juice into a blender and add banana, strawberries, and blueberries.",
                "Cover and blend until smooth, about 1 minute.",
                "Pour into 2 glasses."],
        blurb: "Cheaper than what you get at Starbucks, and just as tasty."
},
{
        name: "Morning Joe Smoothie", season: "YearRound", level: "Easy", time: "1", type: "Beverage",
        image: "Morning_Joe_Smoothie.jpg",
        ingredients: ["1 1/4 cups Almond Breeze Original almond milk", "1 1/2 teaspoons instant espresso powder", "1 small frozen banana, cut into chunks", "2 tablespoons quick cooking oats"],
        steps: ["Add all ingredients to blender container or smoothie maker. Cover; blend 15 to 20 seconds or until smooth.",
                "Pour into glass.",
                "If desired, sprinkle with an additional pinch of espresso powder."],
        blurb: "Breakfast in a glass that actually tastes decent! Perfect for when you've overslept by mistake."
},
{
        name: "Refreshing Oatmeal Drink (Agua De Avena)", season: "YearRound", level: "Average", time: "5", type: "Beverage",
        image: "Refreshing_Oatmeal_Drink_(Agua_de_Avena).jpg",
        ingredients: ["8 cups water, divided", "1 cup quick-cooking oats", "1 cinnamon stick", "1/2 cup white sugar", "2 teaspoons vanilla extract"],
        steps: ["Combine 5 cups water, quick-cooking oats, and cinnamon stick in a blender.",
                "Blend until combined, about 1 minute.",
                "Pour the oat mixture through a strainer, collecting the liquids in a pitcher and reserving the solids.",
                "Pour remaining water through the strainer containing the solids and into the pitcher.",
                "Add sugar and vanilla extract.",
                "Refrigerate until chilled, about 1 hour."],
        blurb: "A refreshing beverage from Mexico, similar to horchata but easier to make and healthier. Best served cold."
},
{
        name: "Gourmet Gelly Shots", season: "YearRound", level: "Advanced", time: "5", type: "Dessert",
        image: "Gourmet_Gelly_Shots.jpg",
        ingredients: ["1 cup boiling water", "1 6-ounce package cherry Jell-O", "1/2 cup tequila", "1/4 cup triple sec", "1/4 cup orange liquer such as Grand Marnier"],
        steps: ["Arrange 12 2-ounce plastic cups on a baking sheet",
                "Slowly pour boiling water over gelatin mix in a bowl while whisking. Continue whisking while streaming tequila, triple sec, and orange liqueur into the gelatin mixture.",
                "Pour mixture into plastic cups. Refrigerate until set, 8 hours to overnight."],
        blurb: "Who says margaritas have to be in a glass? Look like a trendy gastronomic bartender type without even trying."
},
{
        name: "Peanut Butter Banana Smoothie", season: "YearRound", level: "Easy", time: "1", type: "Beverage",
        image: "Peanut_Butter_Banana_Smoothie.jpg",
        ingredients: ["2 bananas, broken into chunks", "2 cups milk", "1/2 cup peanut butter", "2 tablespoons honey, or to taste", "2 cups ice cubes"],
        steps: ["Place all ingredients in a blender.",
                "Blend until smooth, about 30 seconds."],
        blurb: "The perfect protein-filled start to your day."
},
{
        name: "Apple Cobbler Crumble", season: "Fall", level: "Advanced", time: "5", type: "Dessert",
        image: "Apple_Cobbler_Crumble.jpg",
        ingredients: ["1 cup self-rising flour",
                "1 cup white sugar",
                "1/2 cup butter, softened",
                "1/2 teaspoon ground cinnamon",
                "4 Granny Smith apples, cored and sliced"],
        steps: ["Preheat oven to 350 degrees F (175 degrees C). Grease a 9x9-inch baking dish.",
                "Mix flour, sugar, butter, and cinnamon together in a bowl using a pastry blender or fork until crumbly; reserve 3/4 cup flour mixture to use as topping.",
                "Sprinkle a light layer of flour mix into the prepared baking dish; top with a layer of apples.",
                "Continue alternating layers of flour mixture with apples and ending with apples.",
                "Sprinkle top apple layer with the reserved 3/4 cup flour mixture.",
                "Bake in the preheated oven until apples are tender and topping is lightly browned, 30 to 35 minutes.",
                "Allow cobbler to cool for 10 minutes before serving."],
        blurb: "What do you get when you combine an apple pie, a cobbler, and a crumble? This! It's timeless, a joy to make, and an absolute pleasure to eat."
},
{
        name: "Paleo Homemade Melt-In-Your-Mouth Dark Chocolate", season: "YearRound", level: "Advanced", time: "5", type: "Dessert",
        image: "Paleo_Homemade_Melt-In-Your-Mouth_Dark_Chocolate.jpg",
        ingredients: ["1/2 cup coconut oil", "1/2 cup cocoa powder", "3 tablespoons honey", "1/2 teaspoon vanilla extract"],
        steps: ["Gently melt coconut oil in a saucepan over medium-low heat.",
                "Stir cocoa powder, honey, and vanilla extract into melted oil until well blended.",
                "Pour mixture into a candy mold or pliable tray.",
                "Refrigerate until chilled, about 1 hour."],
        blurb: "Vegan. Chocolate! You can also flavor this by adding things like orange zest, peanut butter, dried coconut, chopped nuts, cinnamon, and cayenne pepper after you've melted the oil, cocoa powder, honey, and vanilla together."
},
{
        name: "Baked Apples with Oatmeal Filling", season: "Fall", level: "Average", time: "4", type: "Dessert",
        image: "Baked_Apples_with_Oatmeal_Filling.jpg",
        ingredients: ["4 apples", "1 cup rolled oats", "1/4 cup brown sugar", "1 teaspoon ground cinnamon", "1/4 cup butter"],
        steps: ["Preheat oven to 350 degrees Fahrenheit.",
                "Core each apple making a large well in the center and arrange apples on a rimmed baking sheet.",
                "Mix oats, brown sugar, and cinnamon together in a bowl; cut in butter until evenly combined. Spoon 1/4 of the oat mixture into each apple.",
                "Bake in the preheated oven until apples are tender and filling is bubbling, about 30 minutes."],
        blurb: "This is like a stuffed pepper, except you actually want to eat it. Like an apple cobbler, with more apple and less cobbler."
},
{
        name: "2-Ingredient Peanut Butter Fudge", season: "YearRound", level: "Easy", time: "5", type: "Dessert",
        image: "2-Ingredient_Peanut_Butter_Fudge.jpg",
        ingredients: ["1 pound white confectioners' coating (white almond bark), broken up", "1 (18 ounce) jar peanut butter (such as Jif®)"],
        steps: ["Line an 8x8-inch baking dish with plastic wrap long enough to overhang the dish by several inches on each side.",
                "Place broken coating into a large glass microwave-safe bowl and melt on low power in microwave oven, about 5 minutes, stirring after every 30 seconds to 1 minute.",
                "When coating is smooth and creamy, stir peanut butter into coating until fudge is thoroughly combined.",
                "Spread fudge into the prepared baking dish.",
                "Refrigerate fudge until set, 1 to 2 hours. Lift fudge out of the pan using the plastic wrap for handles and slice into squares with a pizza cutter."],
        blurb: "2 ingredients! Seems like it shouldn't work, right? Spoiler alert: it totally does."
},
{
        name: "Simple Roasted Butternut Squash", season: "Fall", level: "Easy", time: "3", type: "Side",
        image: "Simple_Roasted_Butternut_Squash.jpg",
        ingredients: ["1 butternut squash-peeled, seeded, and cut into 1-inch cubes", "2 tablespoons olive oil", "2 cloves garlic, minced", "salt and ground black pepper to taste"],
        steps: ["Preheat oven to 400 degrees Fahrenheit.", "Toss butternut squash with olive oil and garlic in a large bowl.",
                "Season with salt and black pepper. Arrange coated squash on a baking sheet.",
                "Season with salt and black pepper. Arrange coated squash on a baking sheet."],
        blurb: "One of the few ways to prepare vegetables I like."
},
{
        name: "Glazed Carrots", season: "YearRound", level: "Average", time: "2", type: "Side",
        image: "Glazed_Carrots.jpg",
        ingredients: ["2 pounds carrots, peeled and cut into sticks", "1/4 cup butter", "1/4 cup packed brown sugar", "1/4 teaspoon salt", "1/8 teaspoon ground white pepper"],
        steps: ["Place carrots into a large saucepan, pour in enough water to reach depth of 1 inch, and bring to a boil.",
                "Reduce heat to low, cover, and simmer carrots until tender, 8 to 10 minutes. Drain and transfer to a bowl.",
                "Melt butter in the same saucepan; stir brown sugar, salt, and white pepper into butter until brown sugar and salt have dissolved.",
                "Transfer carrots into brown sugar sauce; cook and stir until carrots are glazed with sauce, about 5 more minutes."],
        blurb: "The perfect things for those who like carrots sweet and not too hard to bite into."
},
{
        name: "Crusty Herb Potato Wedges", season: 'YearRound', level: "Average", time: "4", type: "Side",
        image: "Crusty_Herb_Potato_Wedges.jpg",
        ingredients: ["2 Russet potatoes, each cut into 6 equal wedges", "olive oil", "1 tablespoon herbes de Provence", "1 pinch paprika, or to taste", "salt and ground black pepper to taste"],
        steps: ["Preheat oven to 425 degrees Fahrenheit. Line a baking sheet with a silicone baking mat.",
                "Toss potato wedges, olive oil, herbes de Provence, paprika, salt, and black pepper together in a bowl until potatoes are evenly coated. Place wedges on their sides onto the prepared baking sheet.",
                "Bake in the preheated oven for 15 minutes. Flip potatoes onto their other sides; return to oven and cook until crusty and golden brown, about 20 minutes more."],
        blurb: "Straight up one of the best ways to prepare potatoes I've ever had. And that includes French fries."
},
{
        name: "Sauteed Asparagus", season: "Spring", level: "Average", time: "1", type: "Side",
        image: "Sauteed_Asparagus.jpg",
        ingredients: ["1 bunch fresh asparagus, trimmed", "2 tablespoons extra-virgin olive oil", "1/4 cup water", "1/8 teaspoon salt", "1/8 teaspoon pepper"],
        steps: ["Drizzle olive oil into a large skillet over medium-high heat and heat.",
                "Once oil is hot add asparagus spears; cover and cook for 5 minutes, stirring occasionally.",
                "Add water and cover to steam asparagus and keep it from drying out.",
                "Continue cooking for another 5 minutes or until asparagus is tender. Season with salt and pepper."],
        blurb: "Personally I don't like asparagus. Mom does. So I make this for her a lot."
},
{
        name: "Jamie's Sweet And Easy Corn On The Cob", season: "Summer", level: "Average", time: "1", type: "Side",
        image: "Jamie's_Sweet_and_Easy_Corn_on_the_Cob.jpg",
        ingredients: ["2 tablespoons white sugar", "1 tablespoon lemon juice", "6 ears corn on the cob, husks and silk removed"],
        steps: ["Fill a large pot about 3/4 full of water and bring to a boil.",
                "Stir in sugar and lemon juice, dissolving the sugar.",
                "Gently place ears of corn into boiling water, cover the pot, turn off the heat, and let the corn cook in the hot water until tender, about 10 minutes."],
        blurb: "Summer isn't complete without this delicious 4th of July classic. For best results, eat with butter."
}
];