import { makeApiCall, locationUrl } from "./http"

const weatherByLocationName = async location => {
    try {
        const url = locationUrl(location)
        const data = await makeApiCall(url)
        console.log(data)
    } catch(error){
        console.log(error)
    }

}

export {
    weatherByLocationName
}