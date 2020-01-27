import axios from "axios";
import {
  API_HOST,
  API_HOST_PEOPLE,
  API_HOST_PLANETS,
  API_HOST_STARSHIPS
} from "../config";

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
      .get(API_HOST_PEOPLE + `${peoplePage}`)
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
      .get(API_HOST_PLANETS + `${planetsPage}`)
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
      .get(API_HOST_STARSHIPS + `${starshipPage}`)
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
