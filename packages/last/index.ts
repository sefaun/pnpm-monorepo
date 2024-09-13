import ThemeNewSite from './src/commands/theme/new-site.js'
import ThemeStartDevSite from './src/commands/theme/start-dev-site.js'
import ThemeDownloadFiles from './src/commands/theme/download-files.js'

export const COMMANDS = {
  [`last:${ThemeNewSite.cliTopic}`]: ThemeNewSite,
  [`last:${ThemeStartDevSite.cliTopic}`]: ThemeStartDevSite,
  [`last:${ThemeDownloadFiles.cliTopic}`]: ThemeDownloadFiles,
}

export default COMMANDS
