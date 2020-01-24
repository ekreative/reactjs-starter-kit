import axios from "axios";
import { API_HOST } from "../config";

axios.defaults.baseURL = API_HOST;

export default class API {
  static post(id: number) {
    return axios
      .post(
        `/some/${id}`,
        {
          field: "value"
        },
        {
          headers: {
            header: "value"
          }
        }
      )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }
  static get(url: string) {
    return axios
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }
  static getPeople(peoplePage: string) {
    return axios
      .get(`https://swapi.co/api/people/?page=${peoplePage}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }
  static getPlanets(planetsPage: string) {
    return axios
      .get(`https://swapi.co/api/planets/?page=${planetsPage}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }
  static getStarships(starshipPage: string) {
    return axios
      .get(`https://swapi.co/api/starships/?page=${starshipPage}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }
}
