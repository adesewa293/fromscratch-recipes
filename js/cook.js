"use strict";

function CookingDetails(name, cookingTime, imagePath, cookingInstructions, ingredients, likes) {
  this.name = name;
  this.cookingTime = cookingTime;
  this.imagePath = imagePath;
  this.likes = likes;
  this.ingredients = ingredients;
  this.cookingInstructions = cookingInstructions
  this.render();
}

CookingDetails.prototype.render = function () {
  const mainContainer = document.getElementById("cook-container");
  const div = document.createElement("div");
  mainContainer.appendChild(div);
  const image = document.createElement("img");
  image.src = this.imagePath;
  div.appendChild(image);
  const p = document.createElement("h1");
  div.appendChild(p);
  p.textContent = this.name;
  const h2 = document.createElement("h2");
  div.appendChild(h2);
  h2.textContent = 'Ingredients';
  const ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i = 0; i < this.ingredients.length; i++) {
    const ingredientItem = this.ingredients[i];
    const li = document.createElement('li')
    ul.appendChild(li);
    li.textContent = ingredientItem
   } 
   const h3 = document.createElement("h2");
  div.appendChild(h3);
  h3.textContent = 'Cooking Instructions';
  h3.classList.add('cookinginstruction-element')
  const p2 = document.createElement('p')
  div.appendChild(p2)
  p2.textContent = this.cookingInstructions;
};


 


function loadCookingDetails() {
  const localStoredRecipe = JSON.parse(localStorage.getItem("clicked-recipe"));
  console.log("localStoredRecipe", localStoredRecipe);
  const recipe1 = new CookingDetails(
    localStoredRecipe.name,
    localStoredRecipe.cookingTime,
    localStoredRecipe.imagePath,
    localStoredRecipe.cookingInstructions,
    localStoredRecipe.ingredients,
    localStoredRecipe.likes,
  );
}

loadCookingDetails();
