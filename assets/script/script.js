var recipeListArray = [];
// fortune cookie function
var getFortuneCookie = function () {
    requestAdviceUrl = '	https://api.adviceslip.com/advice';
    fetch(requestAdviceUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var fortuneCookie = data.slip.advice;
                    renderFortuneCookie(fortuneCookie);
                });
            }
            else {
                console.log(response.status);
                var fortuneCookieEl = document.getElementById("adviceSlip");
                fortuneCookieEl.innerHTML = "Fortune Cookie: Cannot be displayed at this time"
            }
        });
};
//   execute fortune cookie function 
getFortuneCookie();
// recipes function
var getRecipes = function (ingredients) {
    //requestUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients + '&apiKey=de671bfd997d4e2bb42b9b72c3e38959';
    //line below is for testing purposes as API has limits
     fetch('./assets/script/query.json')
    //fetch(requestUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    document.getElementById("recipe-container").style.display = "flex";
                    if (data.length > 0) {
                        extractData(data);
                        anchorListener(data);
                    }
                    else {
                        modal1.style.display = 'block';
                    }
                });
            }
            else {
                modal2.style.display = 'block';
            }
        });
}
var extractData = function (data) {
    for (var i = 0; i < (data.length - 1); i++) {
        var title = data[i].title;
        var imageUrl = data[i].image;
        var recipeId = data[i].id;
        //renders 9 recipes to the index.html page
        renderRecipes(title, imageUrl, i);
    }
}
var formEl = document.querySelector('form');
var formSubmit = function (event) {
    event.preventDefault();
    var ingredientsEl = document.getElementById('ingredients-search');
    if (ingredientsEl.value) {
        var ingredients = ingredientsEl.value;
        //execute get recipes function
        getRecipes(ingredients);
    }
    else {
        console.log("Please enter at least one ingredient");
        //TO DO: Huang - Modals
        modal3.style.display = 'block';
    }
}
//event listener for the search
formEl.addEventListener('submit', formSubmit);

// haozhe: modal close js

var modal1 = document.getElementById("modalInvalidIngredient");
var modal2 = document.getElementById("modalFailedFetch");
var modal3 = document.getElementById("modalBlank");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];


span1.onclick = function () {
    modal1.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
span3.onclick = function () {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1 || modal2 || modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    }
}
//eventlister for all anchor tags
var anchorListener = function (data) {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < (links.length - 1); i++) {
        links[i].addEventListener("click", function (event) {
            var dataString = event.target.closest("a")
            var newId = (dataString.id.split('-')[1]) - 1;
            recipeListArray = data[newId].id;
            localStorage.setItem("recipe", JSON.stringify(recipeListArray));

        });
    }
}
