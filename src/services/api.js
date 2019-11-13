import axios from 'axios'
import {API_HOST} from '../config'

// const api = axios.create({
//   baseURL: API_HOST,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//
// api.interceptors.request.use(
//   config => {
//     return config
//   },
//   error => {
//     Promise.reject(error)
//   }
// )
//
// api.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error.response) {
//       // The request was made, but the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data)
//       console.log(error.response.status)
//       console.log(error.response.headers)
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Strange Error', error.message)
//     }
//   }
// )

export default class API {
  static get (id) {
    return axios.get(`/some/${id}`)
      .then(response => {
        return response.data // return response;
      })
  }

  static post (data) {
    return axios.post(`/some`, data)
      .then(response => {
        return response.data // return response;
      })
  }
}
