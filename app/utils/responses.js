const SUCCESS = ( status, weather, currentTime ) => {
    const response = {
        message: 'success',
        status,
        weather: weather[0].main,
        current_time : currentTime
    }

    return response
}

const ERROR = ( status = null, reason = null ) => {
    const response = {
        message: 'error',
        status,
        reason
    }

    return response
}

const RESPONSE = {
    SUCCESS,
    ERROR
}

export default RESPONSE