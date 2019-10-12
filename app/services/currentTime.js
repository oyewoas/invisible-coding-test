import { timeZoneByLocationName } from "./timeZone"


const timeFromTimeZone = timezone => timezone && typeof timezone === 'string'
	? moment().tz(timezone).format('MMMM Do YYYY, h:mm:ss a') : 'Timezone is required'

const currentTimeByLocationName = async location => {
    try{
        const timeZone = timeZoneByLocationName(location)
        const currentTime = timeFromTimeZone(timeZone)
        console.log(currentTime)
    } catch(error) {
        console.log(error)
    }
}


export {
    currentTimeByLocationName
}
