"use strict"

function Recipe (name, cookingTime, ingredients, imagePath){
  this.name = name;
  this.cookingTime = cookingTime;
  this.ingredients = ingredients;
  this.imagePath = imagePath;
  this.likes = 0;
  this.render();
}

Recipe.prototype.render = function () {
  const containerElement = document.getElementById('container');
  const div = document.createElement('div');
  // div.classList.add('mainContainer')
  containerElement.appendChild(div);
  const image = document.createElement("img");
  image.classList.add('image')
  image.src = this.imagePath;
  div.appendChild(image);
  const div2 = document.createElement('div')
  const ul = document.createElement('ul');
  div.appendChild(ul);
  const li3 = document.createElement('li')
  ul.appendChild(li3);
  li3.textContent = this.name
  const li = document.createElement('li')
  ul.appendChild(li);
  li.textContent = this.cookingTime
  const li2 = document.createElement('li')
  ul.appendChild(li2);
  li2.textContent = this.ingredients
  const button = document.createElement('button')
  div.appendChild(button)
  button.textContent = 'COOK'
}

function loadRecipes () {
  const recipe1 = new Recipe('Cooked Coconut Mussels', '5 minutes', '4 ingredients', 'images/image1.jpg')
  const recipe2 = new Recipe('Sauteed Orange and Mustard','5 minutes', '4 ingredients','images/image2.jpg')
  const recipe3 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image3.jpg')
  const recipe4 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image4.jpg')
  const recipe5 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image5.jpeg')
  const recipe6 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image6.jpeg')
  const recipe7= new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image20.jpeg')
  const recipe8 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image21.jpeg')
  const recipe9 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image22.jpeg')
  const recipe10 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image23.jpeg')
  const recipe11= new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image11.jpg')
  const recipe12 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image12.jpg')
  const recipe13 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image24.jpeg')
  const recipe14 = new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image14.jpg')
  const recipe15= new Recipe('Banana and Mandarin Buns','5 minutes', '4 ingredients','images/image15.jpg')

  
}

loadRecipes();
