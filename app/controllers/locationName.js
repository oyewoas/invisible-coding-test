import { currentTimeByLocationName, weatherByLocationName } from "../services"

const getWeatherByLocationName = async location => {
    try {
       const weather = await weatherByLocationName(location)
       
    } catch(error){
        
    }

}


const getCurrentTimeByLocationName = async location => {
    try{
        const currentTime = await currentTimeByLocationName(location)
    }
}


export {
    getWeatherByLocationName
}