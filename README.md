**Build**

- Ana dizindeki `package.json` içindeki alt projelerin versiyonlarına `workspace:*` yaz.
- Ana dizinde `pnpm i` komutunu çalıştır.
- Ana dizinde `pnpm build:all` komutunu çalıştır.
- Alt projelerin dizinlerine gidip `package.json` versiyonlarını artırıp `npm publish` ile **NPM**'e gönder.
- Ana dizine gelip `package.json` içindeki alt projelerin gerçek versiyonlarını yaz.(`workspace:*`'lerin yerine)
- Ana dizinde `package.json` versiyonunu artırıp `npm publish` ile **NPM**'e gönder.
