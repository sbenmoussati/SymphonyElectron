const DeltaBuilder = require('@electron-delta/builder');
const path = require('path');

const options = {
  productIconPath: path.join(__dirname, 'images/icon.ico'),
  productName: 'Symphony',

  getPreviousReleases: async () => {
    // return [{
    //     version: '23.4.0-1',
    //     url: 'https://da5d-88-126-200-43.eu.ngrok.io/Symphony-23.4.0-1-win.exe'
    // }];
    return [];
  },
  sign: async (_filePath) => {
    // sign each delta executable
  },
};

exports.default = async function (context) {
  const deltaInstallerFiles = await DeltaBuilder.build({
    context,
    options,
  });
  return deltaInstallerFiles;
};
