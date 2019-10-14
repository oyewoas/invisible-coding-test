import { currentTimeByLocationName, weatherByLocationName } from "../services"

const place = 'London'

const getWeatherByLocationName = async (location = place) => {
    try {
       const weather = await weatherByLocationName(location)
       return weather
    } catch(error){
        console.log(error)
    }

}


const getCurrentTimeByLocationName = async (location = place) => {
    try{
        const currentTime = await currentTimeByLocationName(location)
        return currentTime
    } catch(error){
        console.log(error)
        
    }
};


export {
    getWeatherByLocationName, getCurrentTimeByLocationName
}