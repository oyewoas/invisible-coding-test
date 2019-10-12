import moment from 'moment-timezone'
import { timeZoneByLocationName } from "./timeZone"


const timeFromTimeZone = timezone => timezone && typeof timezone === 'string'
	? moment().tz(timezone).format('MMMM Do YYYY, h:mm:ss a') : 'Timezone is required'

const currentTimeByLocationName = async location => {
    try{
        const timeZone = await timeZoneByLocationName(location)
        const currentTime = await timeFromTimeZone(timeZone)
        return currentTime
    } catch(error) {
        console.log(error, 'current time by location')
    }
}


export {
    currentTimeByLocationName
}
