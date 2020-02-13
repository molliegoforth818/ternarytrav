const createPlaceOfInterestCard = interest => `
<h1 id="__name">${interest.name}</h1>
<p id="interest_description"> ${interest.description}</p>
<p id="interest_cost"> ${interest.cost}</p>
 <button id=dropdown> ${places.name}</button>
<button id="edit Place">Edit Place</button> <button id="delete Place">Delete Place</button>
`;
export default createPlaceOfInterestCard