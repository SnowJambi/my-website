import fetch from "node-fetch";

const API_ENDPOINT = "https://ghibliapi.herokuapp.com/films";

exports.handler = async function(event, context) {

      const response = await fetch(API_ENDPOINT);

      if (!response.ok) return { statusCode: response.status, body: response.statusText };
      
      const data = await response.json();

      return {
          statusCode: 200,
          body: JSON.stringify(data)
      };
};