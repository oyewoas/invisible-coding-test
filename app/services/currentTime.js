import moment from 'moment-timezone'
import { timeZoneByLocationName } from "./timeZone"
import { RESPONSE } from '../utils'

const { ERROR } = RESPONSE

const timeFromTimeZone = timezone => timezone && typeof timezone === 'string'
	? moment().tz(timezone).format('MMMM Do YYYY, h:mm:ss a') : 'Timezone Could not be retrieved'

const currentTimeByLocationName = async location => {
    try{
        const timeZone = await timeZoneByLocationName(location)
        const currentTime = timeFromTimeZone(timeZone)
        return currentTime
    } catch(error) {
        return ERROR('An Error occurred while getting current time')
    }
}


export {
    currentTimeByLocationName
}
