declare const require: any;

export const environment = {
  production: true,
  version: require('../../package.json').version,
  releasesUrl: 'https://api.github.com/repos/ProjectFalcon/falcon-desktop/releases/latest',
  envName: 'prod',
  marketVersion: require('../../node_modules/particl-marketplace/package.json').version,
  falconHost: 'localhost',
  falconPort: 51836,
  marketHost: 'localhost',
  marketPort: 3000,
  isTesting: false
};
