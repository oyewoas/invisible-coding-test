import cityTimeZone from 'city-timezones'

const { lookupViaCity } = cityTimeZone

const timeZoneByLocationName = async location => {
    const response = lookupViaCity(location)
    return response && Array.isArray(response) && response.length > 0 ? response[0].timezone : ''
}

export { timeZoneByLocationName }