// Get the form element
const form = document.getElementById('recipe-form');

// Get the list element where recipes will be displayed
const recipeList = document.getElementById('recipes');

// Initialize an empty array to store recipes
let recipes = [];

// Function to add a new recipe
function addRecipe(title, ingredients, instructions, image) {
    console.log('Adding recipe:', title, ingredients, instructions, image);
    const recipe = {
        id: Date.now(), // Generate a unique ID for each recipe
        title,
        ingredients,
        instructions,
        image
    };
    recipes.push(recipe);
    console.log('Recipes:', recipes);
    displayRecipes();
}


// Function to display recipes in the list
function displayRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe.title;
        li.setAttribute('data-id', recipe.id);
        li.addEventListener('click', () => {
            // Handle click event to view recipe details (will implement later)
            console.log('View recipe:', recipe);
        });
        recipeList.appendChild(li);
    });
}


// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const title = form.title.value.trim();
    const ingredients = form.ingredients.value.trim();
    const instructions = form.instructions.value.trim();
    const image = form.image.value.trim(); // Get the value of the file input (not the file object)
    console.log(title, ingredients, instructions, image);
});


// Initial display of recipes
displayRecipes();
