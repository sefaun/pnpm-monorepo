import { Command } from '@oclif/core'
import { downloadFiles } from '../../download-files.js'

const result = downloadFiles()

export default class ThemeDownloadFiles extends Command {
  static cliTopic = 'pull'
  static override description = 'pull açıklama'

  public async run(): Promise<void> {
    await this.parse(ThemeDownloadFiles)
    console.log('pull başladı')
    await result.start()
  }
}
