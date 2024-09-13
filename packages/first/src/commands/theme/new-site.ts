import { Command } from '@oclif/core'
import { newSite } from '../../new-site.js'

const result = newSite()

export default class ThemeNewSite extends Command {
  static cliTopic = 'new-site'
  static override description = 'new-site açıklama'

  public async run(): Promise<void> {
    await this.parse(ThemeNewSite)
    console.log('new-site başladı')
    await result.start()
  }
}
