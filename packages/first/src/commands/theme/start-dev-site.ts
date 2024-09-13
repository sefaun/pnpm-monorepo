import { Command } from '@oclif/core'
import { startDevSite } from '../../start-dev-site.js'

const result = startDevSite()

export default class ThemeStartDevSite extends Command {
  static cliTopic = 'start-dev-site'
  static override description = 'start-dev-site açıklama'

  public async run(): Promise<void> {
    await this.parse(ThemeStartDevSite)
    console.log('start-dev-site başladı')
    await result.start()
  }
}
