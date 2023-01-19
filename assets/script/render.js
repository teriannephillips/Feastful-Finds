var renderFortuneCookie = function(fortuneCookie) {
    var fortuneCookieEl = document.getElementById("adviceSlip");
    fortuneCookieEl.innerHTML = "Fortune Cookie: " + fortuneCookie;
}

var renderRecipes = function (title, imageUrl, i) {
   var recipeTitle = "recipe-title-" + (i + 1);
   var recipeImg = "img-" + (i+1);
var recipeTitleEl = document.getElementById(recipeTitle);
var recipeImgEl = document.getElementById(recipeImg);
recipeTitleEl.innerHTML = title;
recipeImgEl.src = imageUrl;
}

    