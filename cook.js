"use strict";

function CookingDetails(name, cookingTime, imagePath, likes, ingredients) {
  this.name = name;
  this.cookingTime = cookingTime;
  this.imagePath = imagePath;
  this.likes = likes;
  this.ingredients = ingredients;
  this.render();
}

CookingDetails.prototype.render = function () {
  const mainContainer = document.getElementById("main-container");
  const div = document.createElement("div");
  mainContainer.appendChild(div);
  const image = document.createElement("img");
  image.src = this.imagePath;
  div.appendChild(image);
  const p = document.createElement("p");
  div.appendChild(p);
  p.textContent = this.name;
  const ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i = 0; i < this.ingredients.length; i++) {
    const ingredientList = this.ingredients[i];
    const li = document.createElement('li')
    ul.appendChild(li);
    li.textContent = ingredientList
   } 
};


 


function loadCookingDetails() {
  const localStoredRecipe = JSON.parse(localStorage.getItem("clicked-recipe"));
  console.log("localStoredRecipe", localStoredRecipe);
  const recipe1 = new CookingDetails(
    localStoredRecipe.name,
    localStoredRecipe.cookingTime,
    localStoredRecipe.imagePath,
    localStoredRecipe.likes,
    localStoredRecipe.ingredients,
  );
}

loadCookingDetails();
