import { Options } from '@wdio/types';
import { sharedConfig } from './wdio.shared.conf';

export const config: Options = {
  ...sharedConfig,
  services: ['browserstack'],
};
