const axios = require('axios').default;



export const MapService = {
    RequestRestaurants
}
function RequestRestaurants(lat, long, radius) {
    console.log(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=restaurant&&key=AIzaSyDmv5F3DEatoTLI5gfksBKUD-xC6xaj79Q`)
    let data = {

    }
    let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=restaurant&&key=AIzaSyDmv5F3DEatoTLI5gfksBKUD-xC6xaj79Q`;

    let config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
    // Make a request for a user with a given ID
    return axios.get(url, data, config)
        .then(x => {
            return [...x.data.results]
        })
        .then(x => { console.log(x); return x })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}