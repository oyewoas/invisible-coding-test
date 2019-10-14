import {
    currentTimAndWeatherByLocationName
} from './helpers'

import { VALIDATION } from './utils'
const { isArrayCheck, isEmpty, isLocation, isPostalCode } = VALIDATION
const logCurrentTimeAndWeatherByLocationNameOrPostalCode = async inputArrayData => {
    isArrayCheck(inputArrayData);
    isEmpty(inputArrayData)

    inputArrayData.forEach(async element => {

        if (isLocation(element)) {
            const location = element.toLowerCase().trim()
            const response = await currentTimAndWeatherByLocationName(location)
            console.log(response)
        }

        if (isPostalCode(element)){
            console.log(element, 'This is a number')
        }

    })
}

const appEntry = async input => {
    await logCurrentTimeAndWeatherByLocationNameOrPostalCode(input)
}

export {
    appEntry,
}