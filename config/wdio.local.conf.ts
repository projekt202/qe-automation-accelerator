import { Options } from '@wdio/types';
import { sharedConfig } from './wdio.shared.conf';

export const localConfig: Options = {
  ...sharedConfig,
  services: [
    [
      'appium',
      {
        command: 'appium',
      }
    ]
  ],
};
