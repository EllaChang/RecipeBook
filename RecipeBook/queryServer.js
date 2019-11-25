/**
 * A server-side module that processes different query requests.
 */

// import necessary Node.js built-in modules
fs = require('fs');
utils = require('./utils.js');
recipes = require('./recipes.js');
Recipes = recipes.Recipes;

/**
 * An exported function that process different query requests.
 */
exports.processQuery = function (query, res) {
    switch (query.request) {
        case "AllRecipes": // if client loads all recipes (on home page)
            allRecipes(res);
            break;
        case "LoadRecipe": // if client loads a specific recipe
            loadRecipe(query, res);
            break;
        case "Search": // if client performs search
            doSearch(query, res);
            break;
        default: // error handling
            var errObj = { message: "Query request not supported." };
            utils.sendJSONObj(res, 500, errObj);
            break;
    }
}

/**
 * A function processing "AllRecipes" request.
 */
allRecipes = function (res) {
    Recipes = Recipes; // retrieve the array of all recipes in the database
    utils.sendJSONObj(res, 200, Recipes); // send it to client
}

/**
 * A function processing "LoadRecipe" request.
 */
loadRecipe = function (query, res) {
    var rName = query.loadName; // retrieve the name of the recipe to be loaded
    result = {}; // initialize object to store resulting recipe object

    // find the recipe object having the same name as the one required by client
    for (var a of Recipes) {
        if (a.name == rName) {
            result = a;
        }
    }

    utils.sendJSONObj(res, 200, result); // send the resulting recipe object to client
}

/**
 * A function processing "Search" request.
 */
doSearch = function (query, res) {
    var recipe = query; // retrieve the query object containing user specifications
    var results = []; // initialize array to store all matching recipe objects

    // add recipes fulfilling user requirements to the results array
    for (var a of Recipes) {
        // filter recipes based on drop-down menu choices
        if (a.type == recipe.type || recipe.type == "NoPreference") {
            if (a.time == recipe.time || recipe.time == "NoPreference") {
                if (a.season == recipe.season || recipe.season == "NoPreference") {
                    if (a.level == recipe.level || recipe.level == "NoPreference") {

                        // filter recipes based on entered keyword
                        if (recipe.keyword) {
                            if (a.name.toLowerCase().includes(recipe.keyword.toLowerCase()))
                                results.push(a);
                        } else
                            results.push(a);
                    }
                }
            }
        }
    }

    utils.sendJSONObj(res, 200, results); // send the array of matching recipes to client
}