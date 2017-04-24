var axios = require('axios')

// Add a request interceptor
axios.interceptors.request.use(config => {
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(response => {
  // Do something with response data
  return response.data
}, error => {
  // Do something with response error
  return Promise.reject(error)
})

const baseURL = 'https://api.github.com'

module.exports = req = {
  baseURL: baseURL,
  get (url, params) {
    return axios({
      method: 'get',
      url: baseURL + url,
      params,
      timeout: 30000,
      withCredentials: false
    })
  },
  post (url, data) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: data,
      timeout: 30000,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  form (url, formdata) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: formdata,
      timeout: 30000,
      withCredentials: false
    })
  }
}
