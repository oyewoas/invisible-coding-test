import Axios from 'axios'
import { API } from '../utils'
import { OPEN_WEATHER_API_KEY } from '../config'

const { WEATHER_FROM_LOCATION, WEATHER_FROM_POSTAL_CODE } = API
console.log(WEATHER_FROM_LOCATION)
const makeApiCall = url => Axios.get(url)

const locationUrl = (location, apiKey = OPEN_WEATHER_API_KEY ) => `${WEATHER_FROM_LOCATION}${location}&APPID=${apiKey}`
const postalCodeUrl = (postalCode, apiKey = OPEN_WEATHER_API_KEY ) => `${WEATHER_FROM_POSTAL_CODE}${postalCode}&APPID=${apiKey}`



export { makeApiCall, locationUrl, postalCodeUrl }