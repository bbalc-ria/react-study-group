import { API_KEY } from '../Sensitive';

const axios = require('axios').default;



export const MapService = {
  RequestRestaurants
}
function RequestRestaurants(lat, long, radius, pageLink) {
  let data = {

  }
  let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=restaurant`;
  let pageToken = pageLink !== undefined && pageLink.length > 0 ? `pagetoken=${pageLink}` : "";
  let key = `&key=${API_KEY}`;
  url += pageToken + key;

  let config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
  console.log(url);
  console.log(pageToken);
  // Make a request for a user with a given ID
  return axios.get(url, data, config)
    .then(x => {
      debugger;
      let aux = { ...x.data };
      console.log("TOKEN", aux.next_page_token);
      return { next_page_token: aux.next_page_token, results: [...aux.results] }
    })
    .then(x => { console.log(x); return x })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}