import { getWeatherByLocationName, getCurrentTimeByLocationName } from '../controllers'
import { RESPONSE } from '../utils'

const { SUCCESS, ERROR } = RESPONSE

const currentTimAndWeatherByLocationName = async location => {
 try{
        const response = await getWeatherByLocationName(location)
        const currentTime = await getCurrentTimeByLocationName(location)
        const { weather, cod } = response
        return SUCCESS(cod, weather, currentTime)
    } catch(error){
        const { response: { data: { cod, message }}} = response
        return ERROR(cod, message)
    }
}


export {
    currentTimAndWeatherByLocationName
}