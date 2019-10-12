import { config } from 'dotenv'
config()
console.log(process.env.OPEN_WEATHER_API_KEY, 'API KEY')


const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

export {
    OPEN_WEATHER_API_KEY
}