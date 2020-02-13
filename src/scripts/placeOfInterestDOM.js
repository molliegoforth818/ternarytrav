import createPlaceOfInterestCard from "./createPlaceCard.js"

const placeOfInterest = document.querySelector("#output")

const renderPlaceofInterest = interest => {
        placeOfInterest.innerHTML += createPlaceOfInterestCard
    }
   
console.log(renderPlaceofInterest)
export default renderPlaceofInterest;