"use strict";

const allRecipes = [];
function Recipe(name, cookingTime, imagePath, ingredients, cookingInstructions, likes = 0) {
  this.name = name;
  this.cookingTime = cookingTime;
  this.imagePath = imagePath;
  this.ingredients = ingredients;
  this.cookingInstructions = cookingInstructions;
  this.likes = likes;
  allRecipes.push(this);
}

Recipe.prototype.render = function () {
  const containerElement = document.getElementById("main-page-container");
  const div = document.createElement("div");
  div.classList.add('main-div');
  div.addEventListener('click', this.handleButtonClick.bind(this));
  containerElement.appendChild(div);
  const imageSection = document.createElement("div");
  imageSection.classList.add('image-section');
  div.appendChild(imageSection);
  const image = document.createElement("img");
  image.classList.add("image");
  image.src = this.imagePath;
  imageSection.appendChild(image);
  const ul = document.createElement("ul");
  div.appendChild(ul);
  const li3 = document.createElement("li");
  ul.appendChild(li3);
  li3.textContent = this.name;
  const li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = this.cookingTime + ' minutes';
  const li2 = document.createElement("li");
  ul.appendChild(li2);
  li2.textContent = this.ingredients.length + " Ingredients";
};

Recipe.prototype.handleButtonClick = function () {
  localStorage.setItem("clicked-recipe", JSON.stringify(this));
  window.location.href = "cook.html";
};

function createRecipes() {
  const cookingInstruction = "In a medium saucepan, whisk together the sugar, cornstarch, and salt until well combined.Gradually pour in the milk while whisking constantly to prevent lumps from forming.Place the saucepan over medium heat and continue whisking constantly until the mixture comes to a gentle boil. This will take about 5-7 minutes.Once the mixture reaches a boil, reduce the heat to low and simmer for an additional 2-3 minutes, still whisking continuously. The mixture should thicken to a pudding consistency.Remove the saucepan from the heat and stir in the vanilla extract. Mix well to ensure it's evenly distributed.Transfer the pudding to individual serving dishes or a large bowl if you prefer. You can cover the surface of the pudding with plastic wrap to prevent a skin from forming, or leave it uncovered if you prefer the skin.Allow the pudding to cool for a few minutes at room temperature, then refrigerate for at least 2 hours or until chilled and set.Once the pudding has cooled and set, it's ready to be enjoyed. You can serve it as is or add toppings such as whipped cream, fresh fruits, or a sprinkle of cinnamon, if desired.";
  const recipe1 = new Recipe(
    "Cooked Coconut Mussels",
    "5",
    "images/image1.jpg",
    ["eggs", "milk", "sugar", "cinnamon", "flour"],
    cookingInstruction,
  );
  const recipe2 = new Recipe(
    "Sauteed Orange and Mustard",
    "15",
    "images/image2.jpg",
    ["bread crumbs", "milk", "sugar", "cinnamon", "mayonnaise"],
    cookingInstruction,

  );
  const recipe3 = new Recipe(
    "Banana and Mandarin Buns",
    "25",
    "images/image3.jpg",
    ["salt", "pepper", "sugar", "cinnamon", "banana"],
    cookingInstruction
  );
  const recipe4 = new Recipe(
    "Fried Salty & Sour Snapper",
    "55",
    "images/image4.jpg",
    ["eggs", "garlic", "sugar", "butter", "flour"],
    cookingInstruction
  );
  const recipe5 = new Recipe(
    "Tenderized hazelnut pheasant",
    "45",
    "images/image5.jpeg",
    ["eggs", "milk", "onion", "tomato", "ginger"],
    cookingInstruction
  );
  const recipe6 = new Recipe(
    "White wine toffee",
    "5",
    "images/image6.jpeg",
    ["eggs", "vinegar", "lemon", "cinnamon", "garlic"],
    cookingInstruction
  );
  const recipe7 = new Recipe(
    "Red wine and mint souffle",
    "25",
    "images/image20.jpeg",
    ["eggs", "milk", "soy sauce", "cinnamon", "bbq sauce"],
    cookingInstruction
  );
  const recipe8 = new Recipe(
    "Vannilla Pud",
    "15",
    "images/image21.jpeg",
    ["eggs", "milk", "honey", "cinnamon", "flour"],
    cookingInstruction
  );
  const recipe9 = new Recipe(
    "Cured Vegetables and Mutton",
    "25",
    "images/image22.jpeg",
    ["eggs", "mustard", "sugar", "cinnamon", "cheeese"],
    cookingInstruction
  );
  const recipe10 = new Recipe(
    "Engine-cooked Honey pancakes",
    "15",
    "images/image23.jpeg",
    ["eggs", "cream", "sugar", "chicken broth", "salt"],
    cookingInstruction
  );
  const recipe11 = new Recipe(
    "Almond and Saffron bonbons",
    "45",
    "images/image11.jpg",
    ["pasta", "milk", "beef broth", "rice", "flour"],
    cookingInstruction
  );
  const recipe12 = new Recipe(
    "Vanilla pound cake",
    "55",
    "images/image12.jpg",
    ["herbs", "milk", "sugar", "cinnamon", "flour"],
    cookingInstruction
  );
  const recipe13 = new Recipe(
    "Banana and Mandarin Buns",
    "55",
    "images/image24.jpeg",
    ["spices", "milk", "baking soda", "cinnamon", "banana"],
    cookingInstruction
  );
  const recipe14 = new Recipe(
    "Banana and potato porridge",
    "25",
    "images/image14.jpg",
    ["permesan cheese", "milk", "sugar", "salted nuts", "potato"],
    cookingInstruction
  );
  const recipe15 = new Recipe(
    "Salmon and veggies",
    "35",
    "images/image15.jpg",
    [" baking powder", "milk", "sugar", "unsalted nuts", "cinnamon"],
    cookingInstruction
  );
  const recipe16 = new Recipe(
    "Sandwich",
    "5",
    "images/image27.jpeg",
    ["eggs", "milk", "sugar", "cinnamon", "flour"],
    cookingInstruction,
  );
  const recipe17 = new Recipe(
    "Pasta",
    "15",
    "images/image28.jpeg",
    ["bread crumbs", "milk", "sugar", "cinnamon", "mayonnaise"],
    cookingInstruction,

  );
  const recipe18 = new Recipe(
    "Shepherd's pie",
    "25",
    "images/image29.jpeg",
    ["salt", "pepper", "sugar", "cinnamon", "banana"],
    cookingInstruction
  );
  const recipe19 = new Recipe(
    "Shrimp scampi",
    "55",
    "images/image30.jpg",
    ["eggs", "garlic", "sugar", "butter", "flour"],
    cookingInstruction
  );
  const recipe20 = new Recipe(
    "Fruit salad",
    "45",
    "images/image31.jpg",
    ["eggs", "milk", "onion", "tomato", "ginger"],
    cookingInstruction
  );
  const recipe21 = new Recipe(
    "Beef stir fry",
    "5",
    "images/image32.jpg",
    ["eggs", "vinegar", "lemon", "cinnamon", "garlic"],
    cookingInstruction
  );
  const recipe22 = new Recipe(
    "BBQ wings",
    "25",
    "images/image33.jpeg",
    ["eggs", "milk", "soy sauce", "cinnamon", "bbq sauce"],
    cookingInstruction
  );
  const recipe23 = new Recipe(
    "Claam chowder",
    "15",
    "images/image34.jpeg",
    ["eggs", "milk", "honey", "cinnamon", "flour"],
    cookingInstruction
  );
  const recipe24 = new Recipe(
    "Chicken tikka masala",
    "25",
    "images/image35.jpeg",
    ["eggs", "mustard", "sugar", "cinnamon", "cheeese"],
    cookingInstruction
  );
  const recipe25 = new Recipe(
    "Apple pie",
    "15",
    "images/image36.jpeg",
    ["eggs", "cream", "sugar", "chicken broth", "salt"],
    cookingInstruction
  );
  const recipe26 = new Recipe(
    "Caesar salad",
    "45",
    "images/image37.jpeg",
    ["pasta", "milk", "beef broth", "rice", "flour"],
    cookingInstruction
  );
  const recipe27 = new Recipe(
    "Cornbreade",
    "55",
    "images/potato5.jpg",
    ["herbs", "milk", "sugar", "cinnamon", "flour"],
    cookingInstruction
  );
  const recipe28 = new Recipe(
    "Fish tacos",
    "55",
    "images/potato6.jpg",
    ["spices", "milk", "baking soda", "cinnamon", "banana"],
    cookingInstruction
  );
  const recipe29 = new Recipe(
    "Chicken noodle soup",
    "25",
    "images/potato4.jpg",
    ["permesan cheese", "milk", "sugar", "salted nuts", "potato"],
    cookingInstruction
  );
  const recipe30 = new Recipe(
    "Lobster bisque",
    "35",
    "images/potato3.jpg",
    [" baking powder", "milk", "sugar", "unsalted nuts", "cinnamon"],
    cookingInstruction
  );
}
function loadRecipes() {
  const localStoredRecipe = JSON.parse(localStorage.getItem('allRecipes'));
  if (localStoredRecipe) {
    for (let i = 0; i < localStoredRecipe.length; i++) {
      const recipe = localStoredRecipe[i];
      new Recipe(recipe.name, recipe.cookingTime, recipe.imagePath, recipe.ingredients, recipe.cookingInstructions, recipe.likes)
    }
  } else {
    createRecipes();
    localStorage.setItem('allRecipes', JSON.stringify(allRecipes));
  }

   const containerElement = document.getElementById("main-page-container");
   if (containerElement){
    for (let i = allRecipes.length-1; i >= 0; i--) {
      const recipe = allRecipes[i];
      recipe.render();
    }
  }

}

loadRecipes();
