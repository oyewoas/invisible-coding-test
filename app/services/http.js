import Axios from 'axios'
import { API } from '../utils'
import { OPEN_WEATHER_API_KEY } from '../config'

const { WEATHER_FROM_LOCATION, WEATHER_FROM_POSTAL_CODE } = API

const makeApiCall = url => Axios.get(url)

const locationUrl = (url = WEATHER_FROM_LOCATION , location, apiKey = OPEN_WEATHER_API_KEY ) => `${url}${location}&APPID=${apiKey}`
const postalCodeUrl = (url = WEATHER_FROM_POSTAL_CODE , location, apiKey = OPEN_WEATHER_API_KEY ) => `${url}${location}&APPID=${apiKey}`



export { makeApiCall, locationUrl, postalCodeUrl }