import { clearScreen, displayAsciiArt } from './screen.js'

export function downloadFiles() {
  return {
    async start() {
      clearScreen()
      await displayAsciiArt('Pull')
    },
  }
}
