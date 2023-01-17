// fortune cookie function
var getFortuneCookie = function () {
    requestAdviceUrl = '	https://api.adviceslip.com/advice';

    fetch(requestAdviceUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var fortuneCookie = data.slip.advice;
            console.log(fortuneCookie);
            //TO DO: Mathieu - create function that renders fortune cookie to the html index page by passing the variable fortuneCookie
        })
}
//   execute fortune cookie function 
getFortuneCookie();
// recipes function
var getRecipes = function (ingredients) {
    //   requestUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients +',&apiKey=de671bfd997d4e2bb42b9b72c3e38959';

    fetch('./assets/script/query.json')
        //   fetch (requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            extractData(data);
        })
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
    var ingredients = ingredientsEl.value;
    //execute get recipes function
    getRecipes(ingredients);
}
//event listener for the search
formEl.addEventListener('submit', formSubmit);

