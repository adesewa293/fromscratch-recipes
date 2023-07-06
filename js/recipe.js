"use strict"

newRecipe.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const recipeName = event.target.recipeName.value;
  const cookingTime = event.target.cookingTime.value;
  const recipeImage = event.target.recipeImage.value;
  const ingredients = event.target.ingredients.value;
  const cookingInstructions = event.target.cookingInstructions.value;
  new Recipe(recipeName, cookingTime, recipeImage,  ingredients.split(' '), cookingInstructions);
  localStorage.setItem('allRecipes', JSON.stringify(allRecipes));

  window.location.href = 'mainpage.html'
})
