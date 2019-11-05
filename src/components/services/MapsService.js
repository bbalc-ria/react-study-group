const axios = require('axios').default;



export const MapService = {
    RequestRestaurants
}
function RequestRestaurants(lat, long, radius) {
    console.log(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=restaurant&&key=AIzaSyDmv5F3DEatoTLI5gfksBKUD-xC6xaj79Q`)

}
// Make a request for a user with a given ID
axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=restaurant&&key=AIzaSyDmv5F3DEatoTLI5gfksBKUD-xC6xaj79Q`, { headers })
    .then(x => {
        return x
    })
    .then(x => { console.log(x); return x })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}