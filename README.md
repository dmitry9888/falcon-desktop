# Falcon-desktop – UI

![UI Preview](preview.gif)

> *"Falcon is an open source project that aims to restore the balance of privacy on the internet."*

We provide a decentralized privacy platform with a suite of tools to enhance your online privacy:

* **An anonymous cryptocurrency** – send and receive the FNC cryptocurrency without revealing the transaction history
* **End-to-end encrypted messaging** – communicate in a secure and decentralized manner without revealing your IP address
* **A private marketplace** – buy and sell goods without leaving a trace

This repository is the user interface that works in combination with our [`falcon-core`](https://github.com/ProjectFalcon/falcon).

[![Download the packaged wallet for Mac, Windows and Linux](download-button.png)](https://github.com/ProjectFalcon/falcon-desktop/releases)

# Contribute

[![Snyk](https://snyk.io/test/github/ProjectFalcon/falcon-desktop/badge.svg)](https://snyk.io/test/github/ProjectFalcon/falcon-desktop)
[![Build Status](https://travis-ci.org/ProjectFalcon/falcon-desktop.svg?branch=master)](https://travis-ci.org/ProjectFalcon/falcon-desktop)
[![Coverage Status](https://coveralls.io/repos/github/ProjectFalcon/falcon-desktop/badge.svg?branch=master)](https://coveralls.io/github/ProjectFalcon/falcon-desktop?branch=master)
[![Code Climate](https://codeclimate.com/github/ProjectFalcon/falcon-desktop/badges/gpa.svg)](https://codeclimate.com/github/ProjectFalcon/falcon-desktop)
[![Greenkeeper badge](https://badges.greenkeeper.io/ProjectFalcon/falcon-desktop.svg)](https://greenkeeper.io/)

> Be sure to read our [Contributing Guidelines](CONTRIBUTING.md) first

## Development

### Boostrapping for development:

* Download + Install [Node.js®](https://nodejs.org/) 6.4—7.10
* Download + Install [git](https://git-scm.com/)

```bash
git clone https://github.com/ProjectFalcon/falcon-desktop
cd falcon-desktop
yarn install
```

### Development with Electron

1. run `ng serve` to start the dev server and keep it running
2. and then start it: `yarn run start:electron:dev`
   * note: this command will auto-refresh the client on each saved change
   * `-testnet` – for running on testnet (omit for running the client on mainnet)
   * `-opendevtools` – automatically opens Developer Tools on client launch
   * `-skipmarket` – skip launching internal market process

#### Interact with falcon-core daemon

You can directly interact with the daemon ran by the Electron version.

```
./falcon-cli -testnet getblockchaininfo
```

## Running

### Start Electron

* `yarn run start:electron:fast` – disables debug messages for faster startup (keep in mind using `:fast` disables auto-reload of app on code change)

### Package Electron

Building for Windows requires:
* WINE
* the 32-bit libraries to be available.

```bash
sudo apt-get install gcc-multilib
sudo apt-get install g++-multilib
```


* `yarn run package:win` – Windows
* `yarn run package:mac` – OSX
* `yarn run package:linux` – Linux

## Contributors

Join us in [#falcon-dev:matrix.org](https://riot.im/app/#/room/#falcon-dev:matrix.org) on [Riot](https://riot.im)
