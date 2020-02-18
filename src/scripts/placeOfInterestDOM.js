import createPlaceOfInterestCard from "./createPlaceCard.js"

    const renderPlaceofInterest = (interest) => {
        const italyPointsofInterest = document.querySelector("#italyPoints")
        const switzerlandPointofInterest = document.querySelector("#switzerlandPoints")
        const francePointofInterest = document.querySelector("#francePoints")
        italyPointsofInterest.textContent = ""
        switzerlandPointofInterest.textContent = ""
        francePointofInterest.textContent = ""
        interests.forEach(interest => {
            const interestpointshtml = createPlaceOfInterestCard(interest);
            if (interest.placeId === 1) {
                italyPointsofInterest.innerHTML += interestpointshtml;
                
            } else if (interest.placeId === 2) {
                switzerlandPointofInterest.innerHTML += interestpointshtml;
                
            } else if (interest.placeId === 3) {
                francePointofInterest.innerHTML += interestpointshtml;
         
            }
        })
    }



console.log(renderPlaceofInterest)
export default renderPlaceofInterest;