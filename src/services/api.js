import axios from 'axios'
import {API_HOST} from '../config'

axios.defaults.baseURL = API_HOST

export default class API {
  static post (id) {
    return axios.post(`/some/${id}`,
      {
        'field': 'value'
      }, {
        headers: {
          'header': 'value'
        }
      })
      .then(response => {
        return response.data // return response;
      })
      .catch((error) => {
        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Strange Error', error.message)
        }
        console.log(error.config)
      })
  }
}
