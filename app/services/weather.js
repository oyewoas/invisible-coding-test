import { makeApiCall, locationUrl } from "./http"

const weatherByLocationName = async location => {
    try {
        const url = locationUrl(location)
        const data = await makeApiCall(url)
    } catch(error){
        
    }

}

export {
    weatherByLocationName
}