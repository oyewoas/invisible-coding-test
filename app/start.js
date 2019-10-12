import shell from 'shelljs'
import { appEntry } from './index'

const welcomeNote = () => {
	console.log(`Welcome, to get weather and current time details, Kindly input the location names and postal codes e.g. Paris, Lisbon, 78009
	
	- To restart, enter 'restart'
	- To clear the screen, enter 'clear'
	- To exit the program, enter 'exit'`)
}

const start = () => {
	const standard_input = process.stdin
	standard_input.setEncoding('utf-8')

	welcomeNote()

	standard_input.on('data', (data) => {

		if (data === 'exit\n') {
			// Program exit.
			console.log("Program stopped. Thanks for coming :-)")
			process.exit()
		} else if (data === '\n') {
			console.log('\n')
			start()
			console.log('\n')
		} else if (data === 'clear\n') {
			shell.exec('clear')
			infoText()
		} else if (data === 'restart\n') {
			console.log('Restarting...')
			shell.exec('clear')
			main()
		} else {
			const cleanData = data.replace(/\n$/, '').replace(/[^a-zA-Z0-9,^]/g, "").split(',')
			console.log(`Loading...`)
			console.log(`Result:`)
			appEntry(cleanData)
		}
	})
}

start()