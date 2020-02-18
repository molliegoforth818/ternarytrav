const baseUrl = "http://localhost:3000/"
export default {
    getAllPlaces() {
        return fetch(`${baseUrl}/places`)
            .then(response => response.json())
    },
    getPointsOfInterest() {
        return fetch(`${baseUrl}/interests`)
            .then(response => response.json())
    },
    savePointOfInterest(newInterest) {
        return fetch(`${baseUrl}/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInterest)
        })
    },
    deletePointOfInterest(interestId) {
        return fetch(`${baseUrl}/interests/${interestId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    }}
   
