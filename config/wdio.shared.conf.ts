import type { Options } from '@wdio/types';

export const sharedConfig: Options.Testrunner = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true
    }
  },
  baseUrl: '',
  capabilities: [],
  connectionRetryCount: 3,
  connectionRetryTimeout: 120000,
  cucumberOpts: {
    backtrace: false,
    colors: true,
    compiler: ['js:babel-core/register'],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    ignoreUndefinedDefinitions: false,
    profile: [],
    require: [],
    retry: 0,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000
  },
  framework: 'mocha',
  logLevel: 'info',
  maxInstances: 2,
  mochaOpts: {
    uii: 'bdd',
    timeout: 180000 // 3 min
  },
  port: 4723,
  reporters: ['spec'],
  runner: 'local',
  specs: [
    '../test/**/*.test.ts'
  ],
  waitforTimeout: 10000,
};
