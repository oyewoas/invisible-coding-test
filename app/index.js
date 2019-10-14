import {
    currentTimAndWeatherByLocationName, currentTimAndWeatherByPostalCode
} from './helpers'

import { VALIDATION } from './utils'
const { isArrayCheck, isEmpty, isLocation, isPostalCode } = VALIDATION

const logCurrentTimeAndWeatherByLocationNameOrPostalCode = async inputArrayData => {
    isArrayCheck(inputArrayData);
    isEmpty(inputArrayData)

    inputArrayData.forEach(async element => {
        // Get current time and weather by location name
        if (isLocation(element)) {
            const location = element.toLowerCase().trim()
            const response = await currentTimAndWeatherByLocationName(location)
            console.log(response)
        }

        // Get current time and weather by postal code
        if (isPostalCode(element)){
            const postalCode = element
            const response = await currentTimAndWeatherByPostalCode(postalCode)
            console.log(response)
        }

    })
}

const appEntry = async input => {
    await logCurrentTimeAndWeatherByLocationNameOrPostalCode(input)
}

export {
    appEntry,
}