/**
 * A client-side module linked to the home page, home.html.
 */

/**
 * A function that sends AJAX request to load all recipes on home page.
 */
displayRecipes = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = loadRecipes;
    xmlhttp.onerror = function () { alert("Error loading all recipes") };

    // send "AllRecipes" request
    var request = { request: "AllRecipes" };
    xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));
    xmlhttp.send();
}

/**
 * A function that displays all recipes on the web page.
 */
loadRecipes = function () {
    if (this.status == 200) {
        Recipes = JSON.parse(this.responseText); // retrieve the array of all recipe objects in the database
        var divObj = document.getElementById("recipes"); // retrieve the "recipes" section from html file

        // append each recipe to the html accordingly
        Recipes.forEach(recipe => {
            // append a "card" section for each recipe
            var elem = document.createElement("div");
            elem.setAttribute("class", "card");
            elem.setAttribute("style", "border:3px solid;border-color:#6C3483;box-shadow: 5px 10px #6C3483;");
            divObj.appendChild(elem);

            // append title section
            var sec = document.createElement("span");
            sec.setAttribute("class", "header");
            elem.appendChild(sec);
            var title = document.createElement("span");
            sec.appendChild(title);

            // append clickable recipe name as title
            var name = document.createElement("a");
            name.setAttribute("style", "font-size:25px");
            name.setAttribute("href", "");
            name.innerHTML = convertName(recipe.name);
            name.addEventListener("click", loadRecipe);
            title.appendChild(name);

            // append short blurb
            var blurb = document.createElement("p");
            blurb.innerHTML = recipe.blurb;
            elem.appendChild(blurb);

            // append image
            var divi = document.createElement("div");
            divi.setAttribute("style", "text-align:center");
            elem.appendChild(divi);
            var imgElem = document.createElement("img");
            imgElem.setAttribute("src", "./images/" + recipe.image);
            divi.appendChild(imgElem);
        });

    } else
        alert("Error loading all recipes.");
}

/**
 * A function that sends AJAX request to load a specific recipe.
 * @param {Event} e the invoked event
 */
loadRecipe = function (e) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        if (this.status == 200) {
            // store the recipe to load across broswer sessions
            localStorage.setItem("recipeToLoad", this.responseText);

            // redirect to the recipe page, recipe.html
            window.location.href = './recipe.html';
        } else
            alert("Error loading recipe.");
    };
    xmlhttp.onerror = function () { alert("Error loading the recipe") };

    // retrieve the name of the html element invoking the "click" event
    var Name = e.target.innerHTML;

    // send "LoadRecipe" request along with the name of the recipe to be loaded
    var request = { request: "LoadRecipe", loadName: Name };
    xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));
    xmlhttp.send();
}

goSearch = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = loadSearch;
    xmlhttp.onerror = function () { alert("Error retrieving search results") };

    var key = '';
    // retrieve the lowercase version of the keyword
    if (document.getElementById("search"))
        key = document.getElementById("search").value.toLowerCase();

    var required = {};
    required.request = "Search";
    required.keyword = key;
    required.type = document.getElementById("RecipeType").value;
    required.time = document.getElementById("CookingTime").value;
    required.season = document.getElementById("Season").value;
    required.level = document.getElementById("SkillLevel").value;

    xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(required));
    xmlhttp.send();
}

loadSearch = function () {
    if (this.status == 200) {
        // store the array of matching recipes across broswer sessions
        localStorage.setItem('results', this.responseText);

        // redirect to the search results page, searchResults.html
        window.location.href = './searchResults.html';
    } else {
        alert("Error loading search results.");
    }
}

/**
 * A function that turns a query object into a readable query string.
 * @param {Object} query the query object
 */
queryObjectToString = function (query) {
    var properties = Object.keys(query); // store all keys of the query in a new variable called properties
    var arrOfQueryStrings = properties.map(prop => prop + "=" + handleSpaces(query[prop].toString())); // convert keys into readable query strings and store them in arrOfQueryStrings
    return (arrOfQueryStrings.join('&')); // join all elements in arrOfQueryStrings with "&" and return the complete readable query string
}

/**
 * A function that handles spaces within a string.
 * @param {String} str the input string
 */
handleSpaces = function (str) {
    var newStr = ""; // initialize a new empty string

    // iterate over all characters of the input string
    for (k = 0; k < str.length; k++) {
        if (str[k] == " ") // if the current character in the input string is a space
            newStr += "+"; // append a "+" to the new string
        else // if the current character in the input string is not a space
            newStr += str[k]; // append the character to the new string
    }

    return newStr; // return the new string
}

/**
 * A function that capitalizes the first letter of each word in a string.
 * @param {String} name the string to be processed
 */
convertName = function (name) {
    var newName = ''; // initialize a new empty string

    // convert letters of input string and store them in the new string
    for (i = 0; i < name.length; i++) {
        if (i == 0) // add capitalized letter if it is the first letter
            newName += name[0].toUpperCase();
        else if (name[i - 1] == " ") // add capitalized letter if it follows a space
            newName += name[i].toUpperCase();
        else // otherwise just add the original letter
            newName += name[i];
    }
    return newName; // return the new string
}

displayRecipes(); // display all recipes when home page is visited

/**
 * Connect the "Enter" key to the search button.
 */
document.getElementById("search").addEventListener("keyup", function(event) {
    // number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // cancel the default action if needed
      event.preventDefault();
      // trigger the button element with a click
      document.getElementById("Search").click();
    }
});

// add click event-handlers respectively to search buttons in the home.html
document.getElementById("Search").addEventListener("click", goSearch);