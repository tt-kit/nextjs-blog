import axios from 'axios'
import { APIURL } from './url'
// const APIURL = process.env.APIURL
console.log('APIURL',APIURL)

const instance = axios.create()

instance.defaults.withCredentials = true
instance.defaults.baseURL = APIURL
// config.headers['Accept'] = 'application/vnd.dpexpo.v1+json'
instance.defaults.headers.Accept='application/vnd.dpexpo.v1+json'

export default async (url = '', data, type = 'get', config = {}) => {
  type = type.toLowerCase()
  let get_base_config = {
    timeout: 12000,
    params: data
  }
  let get_request_config = Object.assign(get_base_config, config)
  if (type === 'get') {
    try {
      const response = await instance.get(url, get_request_config)
      // console.log('response---', response.data)
      return await response.data
    } catch (err) {
      console.log('err', err)
      throw new Error(err)
    }
  } else if (type === 'post') {
    try {
      const response = await instance.post(url, data, config)
      return await response.data
    } catch (err) {
      console.log('err', err)
      throw new Error(err)
    }
  } else {
    throw new Error('request method not allow，please use get or post')
  }
}
