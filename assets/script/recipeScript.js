
var storedData = JSON.parse(localStorage.getItem("recipe"));
console.log(storedData);
//requestUrl = "https://api.spoonacular.com/recipes/" + storedData + "/information?includeNutrition=false&apiKey=de671bfd997d4e2bb42b9b72c3e38959";
//fetch(requestUrl)
fetch('./assets/script/singlerecipe.json')
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    renderSingleRecipe(data);
                }
        )}
            else {
                console.log(response.status);
                //TO DO: Huang - Modals
                // modal2.style.display = 'block';
            }
        });

    var renderSingleRecipe = function (data) {
        recipeTitleEl = document.getElementById("recipe-name")
        var IngredientsUl = document.getElementById("ingredients-id")
        var recipeContainer = document.getElementById("recipe-container");
        var recipeContainer2 = document.getElementById("recipe-container2");
        recipeTitleEl.innerHTML = data.title;

        var summaryEl = document.createElement("p");
        summaryEl.innerHTML = "You can never had too many " + data.cuisines + " recipes" + ". This recipe serves " + data.servings + " and is ready in " + data.readyInMinutes + " minutes. Enjoy!";
        recipeContainer2.appendChild(summaryEl);

        var ingredentlLength = data.extendedIngredients.length;
        for (var i = 0; i < ingredentlLength; i++){
            var ingredientsEl = document.createElement('li');
            ingredientsEl.innerHTML = data.extendedIngredients[i].original;
          IngredientsUl.appendChild(ingredientsEl);
        }
        var imageEl = document.createElement('img');
        imageEl.setAttribute("src", data.image);
        recipeContainer.appendChild(imageEl)

        var instructionsEl = document.createElement("p");
        instructionsEl.innerHTML = data.instructions;
        recipeContainer2.appendChild(instructionsEl);
    };