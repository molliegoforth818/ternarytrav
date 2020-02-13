const createPlaceOfInterestCard = place => `
<section class="place--${place.id}">
<header class="__title">
    ${recipe.title}
</header>
<div class="recipe__instructions">
    ${recipe.instructions}
</div>
<button id="editRecipe--${recipe.id}">
    Edit Recipe
</button>
<button id="deleteRecipe--${recipe.id}" class="deleteBtn">Delete</button>
</section>`