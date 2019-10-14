import { makeApiCall, locationUrl } from "./http"
import { RESPONSE } from '../utils'

const { ERROR } = RESPONSE
const weatherByLocationName = async location => {
    try {
        const url = locationUrl(location)
        const { data } = await makeApiCall(url)
        return data
    } catch(error){
        return ERROR('An Error Occured While getting weather')
    }

}

export {
    weatherByLocationName
}