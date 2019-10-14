import chai from "chai"
const { expect } = chai

import { logCurrentTimeAndWeatherByLocationNameOrPostalCode } from "../index"

describe("Get the current time and weather by location or postal codes", () => {
  it("should return an error response if input parameter are empty", async () => {
    const response = await logCurrentTimeAndWeatherByLocationNameOrPostalCode()
    expect(response).to.exist
    expect(response).to.be.an("object")
    expect(response)
      .to.have.property("message")
      .to.equal("error")
    expect(response)
      .to.have.property("reason")
      .to.equal("Invalid input array, input must be an array of values")
    expect(response)
      .to.have.property("status")
      .to.equal(400)
  })

  it("should return an error if input parameter is not an array", async () => {
    const inputArray = "aadfdfs"
    const response = await logCurrentTimeAndWeatherByLocationNameOrPostalCode(
      inputArray
    )
    expect(response).to.exist
    expect(response).to.be.an("object")
    expect(response)
      .to.have.property("message")
      .to.equal("error")
    expect(response)
      .to.have.property("reason")
      .to.equal("Invalid input array, input must be an array of values")
    expect(response)
      .to.have.property("status")
      .to.equal(400)
  })

  it("should return an error if input param is an empty array", async () => {
    const inputArray = []
    const response = await logCurrentTimeAndWeatherByLocationNameOrPostalCode(
      inputArray
    )
    expect(response).to.exist
    expect(response).to.be.an("object")
    expect(response)
      .to.have.property("message")
      .to.equal("error")
    expect(response)
      .to.have.property("reason")
      .to.equal("Invalid input array, input must be an array of values")
    expect(response)
      .to.have.property("status")
      .to.equal(400)
  })

  it("should return an error if location name is invalid", async () => {
    const inputArray = ["dfddsfsf", 78009]
    try {
      const response = await logCurrentTimeAndWeatherByLocationNameOrPostalCode(
        inputArray
      )
      expect(response).to.exist
      expect(response).to.be.an("object")
      expect(response)
        .to.have.property("message")
        .to.equal("error")
      expect(response)
        .to.have.property("reason")
        .to.equal(
          "Current time and weather of Location Could not be found, make sure you inputed a valid location"
        )
      expect(response)
        .to.have.property("status")
        .to.equal(404)
    } catch (error) {
      return error
    }
  })

  it("should return an error if postal code is invalid", async () => {
    const inputArray = ["Lagos", 34]
    try {
      const response = await logCurrentTimeAndWeatherByLocationNameOrPostalCode(
        inputArray
      )
      expect(response).to.exist
      expect(response).to.be.an("object")
      expect(response)
        .to.have.property("message")
        .to.equal("error")
      expect(response)
        .to.have.property("reason")
        .to.equal(
          "Current time and weather of Postal Code Could not be found, make sure you inputed a valid postal code"
        )
      expect(response)
        .to.have.property("status")
        .to.equal(404)
    } catch (error) {
      return error
    }
  })
  it("should return a response if input is valid", async () => {
    const inputArray = ["Lagos", 78009]
    try {
      const response = await logCurrentTimeAndWeatherByLocationNameOrPostalCode(
        inputArray
      )
      console.log(response, "test res")
      expect(response).to.exist
      expect(response).to.be.an("object")
      expect(response)
        .to.have.property("message")
        .to.equal("success")
      expect(response)
        .to.have.property("status")
        .to.equal(200)
      expect(response).to.have.property("weather")
      expect(response).to.have.property("current_time")
    } catch (error) {
      return error
    }
  })
})
