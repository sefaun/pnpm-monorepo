import { clearScreen, displayAsciiArt } from './screen.js'

export function newSite() {
  return {
    async start() {
      clearScreen()
      await displayAsciiArt('NEW-SITE')
    },
  }
}
