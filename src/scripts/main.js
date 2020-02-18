import apiActions from "./api.js"
import renderPlaceofInterest from "./placeOfInterestDOM.js"



apiActions.getPointsOfInterest().then(renderPlaceofInterest)