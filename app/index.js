import { currentTimAndWeatherByLocationName } from './helpers'
const logCurrentTimeAndWeatherByLocationNameOrPostalCode = async inputArrayData => {
    
        inputArrayData.forEach( async element => {

            if (typeof element === 'string') {
                try {

                const response = await currentTimAndWeatherByLocationName(element)
                console.log(response)
                return response
            }catch(error){
                console.log(error, 'error Index Page')
            }
            
        };
    })
}

const appEntry = async input => {
    await logCurrentTimeAndWeatherByLocationNameOrPostalCode(input)
}

export {
    appEntry,
}