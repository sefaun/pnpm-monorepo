import ThemeNewSite from './src/commands/theme/new-site.js'
import ThemeStartDevSite from './src/commands/theme/start-dev-site.js'
import ThemeDownloadFiles from './src/commands/theme/download-files.js'

export const COMMANDS = {
  [`first:${ThemeNewSite.cliTopic}`]: ThemeNewSite,
  [`first:${ThemeStartDevSite.cliTopic}`]: ThemeStartDevSite,
  [`first:${ThemeDownloadFiles.cliTopic}`]: ThemeDownloadFiles,
}

export default COMMANDS
