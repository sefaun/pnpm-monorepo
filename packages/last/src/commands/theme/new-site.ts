import { Command } from '@oclif/core'
import { newSite } from '../../new-site.js'

const result = newSite()

export default class ThemeNewSite extends Command {
  static cliTopic = 'create'
  static override description = 'create açıklama'

  public async run(): Promise<void> {
    await this.parse(ThemeNewSite)
    console.log('create başladı')
    await result.start()
  }
}
