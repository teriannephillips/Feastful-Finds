//get the recipe id stored in local storage and called the API
var storedData = JSON.parse(localStorage.getItem("recipe"));
requestUrl = "https://api.spoonacular.com/recipes/" + storedData + "/information?includeNutrition=false&apiKey=de671bfd997d4e2bb42b9b72c3e38959";
fetch(requestUrl)
//line below is for testing purposes as API had limits
//fetch('./assets/script/singlerecipe.json')
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                renderSingleRecipe(data);
            }
            )
        }
        else {
            console.log(response.status);
            console.log("else is working")
            modal2.style.display = 'block';

        }
    });
var renderSingleRecipe = function (data) {
    //get the elements we need for the page
    var recipeTitleEl = document.getElementById("recipe-name")
    var IngredientsUl = document.getElementById("ingredients-id")
    var recipeContainer = document.getElementById("recipe-container");
    var recipeContainer2 = document.getElementById("recipe-container2");
    //display the title
    recipeTitleEl.innerHTML = data.title;
    //create the summary and display the data
    var summaryEl = document.createElement("p");
    summaryEl.innerHTML = "You can never have too many " + data.cuisines + " recipes" + ". This recipe serves " + data.servings + " and is ready in " + data.readyInMinutes + " minutes. Enjoy!";
    recipeContainer2.appendChild(summaryEl);
    // create the ingredients list tags and display the data
    var ingredentlLength = data.extendedIngredients.length;
    for (var i = 0; i < ingredentlLength; i++) {
        var ingredientsEl = document.createElement('li');
        ingredientsEl.innerHTML = data.extendedIngredients[i].original;
        IngredientsUl.appendChild(ingredientsEl);
    }
    //create the image tag and display the data
    var imageEl = document.createElement('img');
    imageEl.setAttribute("src", data.image);
    recipeContainer.appendChild(imageEl);
    //create the instructions tag and display the data
    var instructionsEl = document.createElement("p");
    instructionsEl.innerHTML = data.instructions;
    recipeContainer2.appendChild(instructionsEl);
}
var modal2 = document.getElementById("modalFailedFetch");
var span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {

        modal2.style.display = "none";

    }
}