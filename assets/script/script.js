// fortune cookie function
var getFortuneCookie = function () {
    requestAdviceUrl = '	https://api.adviceslip.com/advice';
    fetch(requestAdviceUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var fortuneCookie = data.slip.advice;
                    console.log(fortuneCookie);
                    //TO DO: Mathieu - create function that renders fortune cookie to the html index page by passing the variable fortuneCookie
                });
            }
            else {
                console.log(response.status);
                //TO DO: Huang - Modals
            }
        });
};
//   execute fortune cookie function 
getFortuneCookie();
// recipes function
var getRecipes = function (ingredients) {
    // requestUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients + ',&apiKey=de671bfd997d4e2bb42b9b72c3e38959';
    fetch('./assets/script/query.json')
        //  fetch(requestUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    if (data.length > 0) {
                        extractData(data);
                    }
                    else {
                        console.log("please enter a valid ingredient")
                        //TODO: Huang - Modals
                        modal1.style.display = 'block';
                    }
                });
            }
            else {
                console.log(response.status);
                //TO DO: Huang - Modals
                modal2.style.display = 'block';
            }
        });
}
var extractData = function (data) {
    for (var i = 0; i < data.length; i++) {
        var title = data[i].title;
        var imageUrl = data[i].image;
        console.log(title);
        console.log(imageUrl);
        //TO DO: Mathieu - create function that renders recipes to the html index page by passing the variables title and imageUrl
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
  

span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1||modal2||modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    }
}