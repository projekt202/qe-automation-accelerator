import { join } from 'path';
import type { Options } from '@wdio/types';
import { localConfig } from './wdio.local.conf';

export const config: Options.Testrunner = {
  ...localConfig,
  capabilities: [
    {
      maxInstances: 1,
      platformName: 'Android',
      'appium:app': join(process.cwd(), './MyDemoApp.apk'),
      'appium:automationName': 'UIAutomator2',
      'appium:deviceName': 'Pixel_5_API_33',
      'appium:noReset': false,
      'appium:newCommandTimeout': 240,
      'appium:platformVersion': '13',
      'appium:printPageSourceOnFindFailure': true
    }
  ]
};
