document.addEventListener('DOMContentLoaded', function () {
    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');
    let recipes = [];

    // Check if recipes are already stored in localStorage
    if (localStorage.getItem('recipes')) {
        recipes = JSON.parse(localStorage.getItem('recipes'));
        renderRecipes();
    }

    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('title').value.trim();
        const ingredients = document.getElementById('ingredients').value.trim();
        const instructions = document.getElementById('instructions').value.trim();
        const image = document.getElementById('image').files[0];

        if (title === '' || ingredients === '' || instructions === '') {
            alert('Please fill in all fields');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            const imageData = event.target.result;
            const recipe = { title, ingredients, instructions, image: imageData };
            recipes.push(recipe);
            localStorage.setItem('recipes', JSON.stringify(recipes));
            renderRecipes();
            recipeForm.reset();
        };
        reader.readAsDataURL(image);
    });

    function renderRecipes() {
        recipeList.innerHTML = '';
        recipes.forEach(function (recipe, index) {
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe-item');
            recipeItem.innerHTML = `
                <h2>${recipe.title}</h2>
                <p>${recipe.ingredients}</p>
                <p>${recipe.instructions}</p>
            `;
            if (recipe.image) {
                const img = document.createElement('img');
                img.src = recipe.image;
                recipeItem.appendChild(img);
            }
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', function () {
                editRecipe(index);
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function () {
                deleteRecipe(index);
            });
            recipeItem.appendChild(editBtn);
            recipeItem.appendChild(deleteBtn);
            recipeList.appendChild(recipeItem);
        });
    }

    function editRecipe(index) {
        const recipe = recipes[index];
        // Prefill the form fields with the selected recipe's data
        document.getElementById('title').value = recipe.title;
        document.getElementById('ingredients').value = recipe.ingredients;
        document.getElementById('instructions').value = recipe.instructions;
    
        // Remove the edited recipe from the recipes array
        recipes.splice(index, 1);
    
        // Update localStorage with the modified recipes array
        localStorage.setItem('recipes', JSON.stringify(recipes));
    
        // Re-render the recipes on the page
        renderRecipes();
    }
    
    function deleteRecipe(index) {
        // Remove the recipe at the specified index from the recipes array
        recipes.splice(index, 1);
    
        // Update localStorage with the modified recipes array
        localStorage.setItem('recipes', JSON.stringify(recipes));
    
        // Re-render the recipes on the page
        renderRecipes();
    }
    
});
