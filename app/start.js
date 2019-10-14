import shell from "shelljs"
import { appEntry } from "./index"

const standard_input = process.stdin
standard_input.setEncoding("utf-8")

const welcomeMessage = () => {
  console.log(`Welcome, to get weather and current time details, Kindly input the location names and postal codes e.g. Paris, London, 78009
	
	* To restart the program, enter 'restart'
	* To clear the screen, enter 'clear'
	* To exit the program, enter 'exit'`)
}

const start = () => {
  welcomeMessage()

  standard_input.on("data", data => {
    switch (data) {
      case "exit\n":
        console.log("Stopping..., Thanks for using this app")
        process.exit()
        break
      case "\n":
        console.log("\n")
        start()
        console.log("\n")
        break
      case "clear\n":
        shell.exec("clear")
        welcomeMessage()
        break
      case "restart\n":
        console.log("Restarting...")
        shell.exec("clear")
        start()
        break
      default:
        const formatedData = data
          .replace(/\n$/, "")
          .replace(/[^a-zA-Z0-9,^]/g, "")
          .split(",")
        console.log("Processing... \n \n")
        console.log("Response:")
        appEntry(formatedData)
    }
  })
}

start()
