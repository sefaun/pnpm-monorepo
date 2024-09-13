import { Command } from '@oclif/core'
import { downloadFiles } from '../../download-files.js'

const result = downloadFiles()

export default class ThemeDownloadFiles extends Command {
  static cliTopic = 'download-files'
  static override description = 'download-files açıklama'

  public async run(): Promise<void> {
    await this.parse(ThemeDownloadFiles)
    console.log('download-files başladı')
    await result.start()
  }
}
