const createPlaceOfInterestCard = place => `
<section class="place--${place.id}">
<header class="__name">
    ${place.name}
</header>
<div class="place_interest">
    ${name.interest}
</div>
<button id="edit Place--${place.id}">
    Edit Recipe
</button>
<button id="delete Place--${place.id}" class="deleteBtn">Delete</button>
</section>`