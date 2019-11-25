/**
 * A client-side module linked to a recipe page, recipe.html.
 */

// retrieve the object representing the recipe to be loaded
var recipe = JSON.parse(localStorage.getItem("recipeToLoad"));

/**
 * A function that displays information of a specific recipe on the web page.
 */
loadRecipePage = function () {
    var divObj = document.getElementById("recipe"); // retrieve the "recipe" section from html file
    document.getElementById("name").innerHTML = recipe.name; // set the recipe name as title

    // append short blurb
    var blurb = document.createElement("p");
    blurb.innerHTML = "Blurb: ".bold() + recipe.blurb;
    divObj.appendChild(blurb);

    // append image
    var imgDiv = document.getElementById("image");
    var imgElem = document.createElement("img");
    imgElem.setAttribute("src", "./images/" + recipe.image);
    imgElem.setAttribute("style", "width:70%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);");
    imgDiv.appendChild(imgElem);

    // append recipe type
    var recipeType = document.createElement("p");
    recipeType.innerHTML = "Recipe Type: ".bold() + recipe.type;
    divObj.appendChild(recipeType);

    // append cooking time
    var cookingTime = document.createElement("p");
    var time = '';
    if (recipe.time == "1")
        time = "0 - 15 min";
    else if (recipe.time == "2")
        time = "15 - 30 min";
    else if (recipe.time == "3")
        time = "30 - 45 min";
    else if (recipe.time == "4")
        time = "45 - 60 min";
    else if (recipe.time == "5")
        time = "More than 1 h";
    cookingTime.innerHTML = "Cooking Time: ".bold() + time;
    divObj.appendChild(cookingTime);

    // append season
    var season = document.createElement("p");
    var recipeSeason = recipe.season;
    if (recipe.season == "YearRound")
        recipeSeason = "Year-round";
    season.innerHTML = "Season: ".bold() + recipeSeason;
    divObj.appendChild(season);

    // append skill level
    var skillLevel = document.createElement("p");
    skillLevel.innerHTML = "Skill Level: ".bold() + recipe.level;
    divObj.appendChild(skillLevel);

    // append an unordered list of ingredients
    var ing = document.createElement("p");
    ing.innerHTML = "Ingredients: ".bold();
    divObj.appendChild(ing);
    var ingList = document.createElement("ul");
    for (var i of recipe.ingredients) {
        var li = document.createElement("li");
        li.innerHTML = i;
        ingList.appendChild(li);
    }
    divObj.appendChild(ingList);

    // append an ordered list of cooking steps
    var steps = document.createElement("p");
    steps.innerHTML = "Steps: ".bold();
    divObj.appendChild(steps);
    var stepsList = document.createElement("ol");
    for (var i of recipe.steps) {
        var li = document.createElement("li");
        li.innerHTML = i;
        stepsList.appendChild(li);
    }
    divObj.appendChild(stepsList);

}

/**
 * The click event handler for the "Back" button.
 */
goBack = function() {
    window.history.back(); // redirect to the last-visited page recorded in browser session history
}

// add click event-handler for the "Back" button
document.getElementById("Back").setAttribute("onclick", "goBack()");

loadRecipePage(); // load the recipe when the page is visited