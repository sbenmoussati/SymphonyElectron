const DeltaBuilder = require('@electron-delta/builder');
const path = require('path');

const options = {
  productIconPath: path.join(__dirname, 'icon.ico'),
  productName: 'electron-sample-app',

  getPreviousReleases: async () => {
    return [
      {
        version: '19.0.2',
        url: 'https://static.symphony.com/sda/Symphony-19.0.2-win.exe',
      },
    ];
  },
};

exports.default = async function (context) {
  const deltaInstallerFiles = await DeltaBuilder.build({
    context,
    options,
  });
  return deltaInstallerFiles;
};
