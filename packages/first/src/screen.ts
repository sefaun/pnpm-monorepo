import figlet from 'figlet'
import { consola } from 'consola'

export async function displayAsciiArt(value: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    figlet(
      value,
      {
        font: 'Standard',
      },
      (err, data) => {
        if (err) {
          consola.error(err)
          return reject(err)
        }
        consola.log(data)
        return resolve()
      },
    )
  })
}

export function clearScreen(): void {
  process.stdout.write('\x1B[2J\x1B[0f')
}
