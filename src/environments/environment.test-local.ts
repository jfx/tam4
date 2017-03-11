// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  mock: true,
  mockServer: 'http://localhost:3001',
  envName: 'TEST-LOCAL',
  version: '0.3.0',
  apiKey: 'not-used',
  authDomain: 'not-used',
  databaseURL: 'https://not-used.firebaseio.com',
  storageBucket: 'not-used',
  alertTimeout: 20000
};