/**
 * A client-side module linked to the search results page, searchResults.html.
 */

/**
 * A function that displays search results on the web page.
 */
loadResults = function () {
    var divObj = document.getElementById("results"); // retrieve the "results" section from html file

    // tell the user if there are no matching results
    if (results[0] == null)
        document.getElementById("sentence").innerHTML = "Oops! Try something else :(";

    // otherwse, append each recipe to the html accordingly
    results.forEach(recipe => {

        // append a div object for a recipe
        var elem = document.createElement("div");
        elem.setAttribute("class", "card");
        elem.setAttribute("style", "border:3px solid;border-color:#6C3483;box-shadow: 5px 10px #6C3483;display:inline-block;");
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
    })
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
 * The click event handler for the "Back" button.
 */
goBack = function () {
    window.history.back(); // redirect to the last-visited page recorded in browser session history
}

// add click event-handler for the "Back" button
document.getElementById("Back").setAttribute("onclick", "goBack()");

// retrieve the array of matching recipes stored across broswer sessions
var results = JSON.parse(localStorage.getItem("results"));
console.log(results);

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

loadResults(); // display all search results when search results page is visited