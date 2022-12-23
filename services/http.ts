import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

axios.defaults.baseURL = publicRuntimeConfig.backendUrl

axios.interceptors.response.use(
  (_null) => _null,
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500

    if (!expectedError) {
      console.log(error)
    }

    return Promise.reject(error)
  }
)

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}

export default http
