# QE Automation  Accelerator

This project is meant to be an accelerator for teams that need Mobile UI Tests. It is build with Appium + WebDriver.IO.
Code is written in TypeScript, and mocha is the test framework in which the tests are ran.

## Getting Started

### Getting the code
1. Clone this repo
2. Run `yarn`. This will install all tools needed to run tests.

### Setting up iOS Simulator
Running an iOS simulator requires having a macbook. Without one, Xcode cannot be installed.

1. Make sure you have the latest Xcode installed. If not, install it from the Mac App Store. Quick link: https://apps.apple.com/us/app/xcode/id497799835?mt=12
2. Xcode comes with a separate app for managing simulators. Open the `Simulator` app.
3. Once open, select an emulator. `File -> Open Simulator -> iOS XX.X -> simulator of your choosing`.

_Note: It is recommended to check `wdio.ios.conf.ts` for the default simulator and use that. If you would prefer a
different device, you'll need to update it in the config. Make sure it is not committed._

### Setting up Android Emulator
Android emulators come with Android Studio. Unlike iOS simulators, there is not a standalone app.

1. Install Android Studio. Latest version can be found here: https://developer.android.com/studio?gclid=CjwKCAjw8-OhBhB5EiwADyoY1ZjIK0sa59dqFtiZ9_kOVWdFn2aSVxo7RBzsqoxG8Ig56kGv9f5J4xoC1A0QAvD_BwE&gclsrc=aw.ds.
2. Open Android Studio.
3. If you have never opened it before, you'll see some options on the window that pops up. Last time I checked
it was under `more`. You'll find `Virtual Device Manager` under that. If you have opened a project in Android Studio,
then the device manager is under a three dot menu in the top right. Once it's located, open it by clicking on it.
4. Click `Create device` if there are no emulators listed. Select a model from the list and click `Next`.
5. For the System Image, leave it on the default and click `Next`.
6. On the last scree, feel free to give the device a name. It's not necessary. Click `Finish`.

_Note: It is recommended to check `wdio.android.conf.ts` for the default simulator and use that. If you would prefer a
different device, you'll need to update it in the config. Make sure it is not committed._

## Running Automation Tests
Tests are run through npm scripts.

### Running iOS Tests
1. Start the iOS simulator. This must be done manually (for now...)
2. Run `yarn ios` from the command line.

### Running Android Tests
1. Start the emulator. This must be done manually (for now...)
2. Run `yarn android` from the command line.

## Running Manual Inspector
The inspector is a great tool finding accessibility ids and to test whether a test case is automatable.

1. Download/ install the Appium Inspector from https://github.com/appium/appium-inspector/releases. I suggest choosing the .dmg file.
2. Open `Appium Inspector`.
3. Change `Remote Port` to mach the value in the `appium:start` script in `package.json`.
4. For `Desired Capabilities`, the easiest approach is to click on the pencil icon inside the `JSON Representation`
 box. That will open the JSON editor. Copy the capabilities object from either `wdio.ios.conf.ts` or `wdiio.android.conf.ts`.
5. Click on the `Save/ Disk` icon to save. This is important. Don't forget to save before starting the session.
6. Run the Appium server by running `yarn appium:start` from the command line.
7. Open the simulator/ emulator if it is not already open.
8. Click the `Start Session` button on the bottom right of the app.
