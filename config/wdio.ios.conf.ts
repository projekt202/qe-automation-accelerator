import { join } from 'path';
import type { Options } from '@wdio/types';
import { localConfig } from './wdio.local.conf';

export const config: Options.Testrunner = {
  ...localConfig,
  capabilities: [
    {
      maxInstances: 1,
      platformName: 'iOS',
      'appium:app': join(process.cwd(), './MyDemoApp.app'),
      'appium:automationName': 'XCUITest',
      'appium:deviceName': 'iPhone 14 Pro',
      'appium:newCommandTimeout': 240,
      'appium:noReset': false,
      'appium:platformVersion': '16.2',
      'appium:printPageSourceOnFindFailure': true
    }
  ]
};
