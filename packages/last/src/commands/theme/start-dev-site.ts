import { Command } from '@oclif/core'
import { startDevSite } from '../../start-dev-site.js'

const result = startDevSite()

export default class ThemeStartDevSite extends Command {
  static cliTopic = 'serve'
  static override description = 'serve açıklama'

  public async run(): Promise<void> {
    await this.parse(ThemeStartDevSite)
    console.log('serve başladı')
    await result.start()
  }
}
