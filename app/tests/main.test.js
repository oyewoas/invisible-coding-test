import chai from 'chai'
const { expect } = chai

import { getCurrentTimeAndWeatherByLocationOrPostalCode } from '../index'

describe('Get the current time and weather for locations', () => {
	it('should return an error response if input parameter are empty', async () => {
		const response = await getCurrentTimeAndWeatherByLocationOrPostalCode()
		expect(response).to.exist
		expect(response).to.be.an('object')
		expect(response).to.have.property('message').to.equal('error')
		expect(response).to.have.property('status').to.equal(400)
	})

	it('should return an error if input parameter is not an array', async () => {
		const response = await getCurrentTimeAndWeatherByLocationOrPostalCode(123)
		expect(response).to.exist
		expect(response).to.be.an('object')
		expect(response).to.have.property('message').to.equal('error')
		expect(response).to.have.property('status').to.equal(400)
	})

	it('should return an error if input param is an empty array', async () => {
		const response = await getCurrentTimeAndWeatherByLocationOrPostalCode([])
		expect(response).to.exist
		expect(response).to.be.an('object')
		expect(response).to.have.property('message').to.equal('error')
		expect(response).to.have.property('status').to.equal(400)
	})

	it('should return an error if input array element is not a string', async () => {
		const response = await getCurrentTimeAndWeatherByLocationOrPostalCode(['Argentina', 1209, 'London'])
		expect(response).to.exist
		expect(response).to.be.an('object')
		expect(response).to.have.property('message').to.equal('error')
		expect(response).to.have.property('status').to.equal(400)
	})

	it('should return an array as a data property of the response', async () => {
		const values = ['london', 'lagos', 58495, 'paris', 23142]
		const response = await getCurrentTimeAndWeatherByLocationOrPostalCode(values)
		expect(response).to.exist
		expect(response).to.be.an('object')
		expect(response).to.have.property('message').to.equal('success')
		expect(response).to.have.property('status').to.equal(200)
		expect(response).to.have.property('data')
		expect(response.data).to.be.an('array')
		expect(response.data).to.have.lengthOf(values.length)
	})

	it('data should have properties weather, currentTime and message', async () => {
		const values = ['london', 'lagos', 58495, 'paris', 23142]
		const response = await getCurrentTimeAndWeatherByLocationOrPostalCode(values)
		expect(response).to.exist
		expect(response).to.be.an('object')
		expect(response).to.have.property('data')
		expect(response.data).to.be.an('array')
		expect(response.data).to.be.an('object')
		expect(response.data).to.have.property('weather')
		expect(response.data).to.have.property('currentTime')
		expect(response.data).to.have.property('message').to.equal('success')
	})
})