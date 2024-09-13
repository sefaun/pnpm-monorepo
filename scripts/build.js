import fs from 'node:fs'
import path from 'node:path'

const cwd = process.cwd()

//dist içindeki eski bin klasörünü siliyoruz.
async function removeFolder() {
  return new Promise((resolve, reject) => {
    fs.rm(path.join(cwd, './dist/bin'), { recursive: true, force: true }, (err) => {
      if (err) {
        return reject(err)
      }

      return resolve()
    })
  })
}

//bin dosyasını dist klasörünün içine koymamız gerekiyor.
function copyBINFolder() {
  fs.cpSync(path.join(cwd, './bin'), path.join(cwd, './dist/bin'), {
    recursive: true,
  })
}

async function start() {
  //dist içindeki eski bin klasörünü siliyoruz.
  if (fs.existsSync(path.join(cwd, './dist/bin'))) {
    await removeFolder()
  }

  copyBINFolder()
}

start()
