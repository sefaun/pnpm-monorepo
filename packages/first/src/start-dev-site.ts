import { clearScreen, displayAsciiArt } from './screen.js'

export function startDevSite() {
  return {
    async start() {
      clearScreen()
      await displayAsciiArt('Start Dev')
    },
  }
}
