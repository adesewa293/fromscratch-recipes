"use strict";

const allRecipes = [];
function Recipe(name, cookingTime, imagePath, ingredients = [], likes = 0) {
  this.name = name;
  this.cookingTime = cookingTime;
  this.ingredients = ingredients;
  this.imagePath = imagePath;
  this.likes = likes;
  allRecipes.push(this);
}

Recipe.prototype.render = function () {
  const containerElement = document.getElementById("main-page-container");
  const div = document.createElement("div");
  containerElement.appendChild(div);
  const image = document.createElement("img");
  image.classList.add("image");
  image.src = this.imagePath;
  div.appendChild(image);
  const ul = document.createElement("ul");
  div.appendChild(ul);
  const li3 = document.createElement("li");
  ul.appendChild(li3);
  li3.textContent = this.name;
  const li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = this.cookingTime;
  const li2 = document.createElement("li");
  ul.appendChild(li2);
  li2.textContent = this.ingredients.length + " Ingredients";
  const button = document.createElement("button");
  div.appendChild(button);
  button.textContent = "COOK";
  button.addEventListener("click", this.handleButtonClick.bind(this));
};

Recipe.prototype.handleButtonClick = function () {
  localStorage.setItem("clicked-recipe", JSON.stringify(this));
  window.location.href = "cook.html";
};

function createRecipes() {
  const recipe1 = new Recipe(
    "Cooked Coconut Mussels",
    "5 minutes",
    "images/image1.jpg",
    ["eggs", "milk", "sugar", "cinnamon", "flour"]
  );
  const recipe2 = new Recipe(
    "Sauteed Orange and Mustard",
    "5 minutes",
    "images/image2.jpg",
    ["bread crumbs", "milk", "sugar", "cinnamon", "mayonnaise"]
  );
  const recipe3 = new Recipe(
    "Banana and Mandarin Buns",
    "5 minutes",
    "images/image3.jpg",
    ["salt", "pepper", "sugar", "cinnamon", "banana"]
  );
  const recipe4 = new Recipe(
    "Fried Salty & Sour Snapper",
    "55 minutes",
    "images/image4.jpg",
    ["eggs", "garlic", "sugar", "butter", "flour"]
  );
  const recipe5 = new Recipe(
    "Tenderized hazelnut pheasant",
    "45 minutes",
    "images/image5.jpeg",
    ["eggs", "milk", "onion", "tomato", "ginger"]
  );
  const recipe6 = new Recipe(
    "White wine toffee",
    "5 minutes",
    "images/image6.jpeg",
    ["eggs", "vinegar", "lemon", "cinnamon", "garlic"]
  );
  const recipe7 = new Recipe(
    "Red wine and mint souffle",
    "5 minutes",
    "images/image20.jpeg",
    ["eggs", "milk", "soy sauce", "cinnamon", "bbq sauce"]
  );
  const recipe8 = new Recipe(
    "Vannilla Pud",
    "5 minutes",
    "images/image21.jpeg",
    ["eggs", "milk", "honey", "cinnamon", "flour"]
  );
  const recipe9 = new Recipe(
    "Cured Vegetables and Mutton",
    "5 minutes",
    "images/image22.jpeg",
    ["eggs", "mustard", "sugar", "cinnamon", "cheeese"]
  );
  const recipe10 = new Recipe(
    "Engine-cooked Honey pancakes",
    "5 minutes",
    "images/image23.jpeg",
    ["eggs", "cream", "sugar", "chicken broth", "salt"]
  );
  const recipe11 = new Recipe(
    "Almond and Saffron bonbons",
    "45 minutes",
    "images/image11.jpg",
    ["pasta", "milk", "beef broth", "rice", "flour"]
  );
  const recipe12 = new Recipe(
    "Vanilla pound cake",
    "5 minutes",
    "images/image12.jpg",
    ["herbs", "milk", "sugar", "cinnamon", "flour"]
  );
  const recipe13 = new Recipe(
    "Banana and Mandarin Buns",
    "5 minutes",
    "images/image24.jpeg",
    ["spices", "milk", "baking soda", "cinnamon", "banana"]
  );
  const recipe14 = new Recipe(
    "Banana and potato porridge",
    "5 minutes",
    "images/image14.jpg",
    ["permesan cheese", "milk", "sugar", "salted nuts", "potato"]
  );
  const recipe15 = new Recipe(
    "Salmon and veggies",
    "5 minutes",
    "images/image15.jpg",
    [" baking powder", "milk", "sugar", "unsalted nuts", "cinnamon"]
  );
}
function loadRecipes() {
  const localStoredRecipe = JSON.parse(localStorage.getItem('allRecipes'));
  console.log('localStoredRecipe', localStoredRecipe);
  if (localStoredRecipe) {
    for (let i = 0; i < localStoredRecipe.length; i++) {
      const recipe = localStoredRecipe[i];
      new Recipe(recipe.name, recipe.cookingTime, recipe.imagePath, recipe.ingredients, recipe.likes)
    }
  } else {
    createRecipes();
    localStorage.setItem('allRecipes', JSON.stringify(allRecipes));
  }

   const containerElement = document.getElementById("main-page-container");
   if (containerElement){
    for (let i = 0; i < allRecipes.length; i++) {
      const recipe = allRecipes[i];
      recipe.render();
    }
  }

}

loadRecipes();
