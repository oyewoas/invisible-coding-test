import RESPONSE from "./responses"

const { ERROR } = RESPONSE

const isArrayCheck = inputArray => {
    if (!Array.isArray(inputArray)) return ERROR('Input data must be an array', 400)
}

const isEmpty = inputArray => {
    if (!inputArray) return ERROR('Input cannot be empty', 400)
    if (inputArray && inputArray.length < 1) return ERROR('Input Array cannot be empty')
}

const isLocation = input => {
    if (typeof input === 'string' && isNaN(input)){
        return true
    }
    return false
}

const isPostalCode = input => {
    if (typeof input === 'string' && !isNaN(input)){
        return true
    }
    return false
}

const VALIDATION = {
    isEmpty,
    isArrayCheck,
    isLocation,
    isPostalCode
}

export default VALIDATION