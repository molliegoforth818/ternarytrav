const baseUrl = "http://localhost:3000/"

export default {
    getAllPlaces(){
return fetch(`${baseUrl}/places`)
.then(resp=>resp.json());
    }
};


