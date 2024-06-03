# cronjob-service

Cronjob service boilerplate built in Node.js.

## Yarn Scripts

`yarn test`

Placeholder script to run tests.

`yarn lint`

Run ESLint on .js files in /src and return a report on syntax warnings/errors.

`TASK= yarn task`

Run a task in development environment.

`JOB= yarn job`

Run a job in development environment.

`CRONJOB= yarn job`

Run a cronjob in development environment.

`yarn start`

Start all cronjobs in test environment.

`yarn pm2-start`

Start pm2 processes defined in ecosystem.config.js.

`yarn pm2-restart`

Restart pm2 processes defined in ecosystem.config.js.

## Helpful Links

### PM2

- [Installation guide.](https://pm2.io/docs/runtime/guide/installation/)

- [Configuring an ecosystem config.](https://pm2.keymetrics.io/docs/usage/application-declaration/)

- [Log rotator.](https://github.com/keymetrics/pm2-logrotate)

#### Configuration Example

```js
// ecosystem.config.js
const ecosystemConfig = {
  apps: [
    {
      name: "cronjob-service",
      script: "./src/cronjob.js",
      env: {
        NODE_ENV: "production",
        TZ: "America/New_York",
      },
    },
  ],
};

module.exports = ecosystemConfig;
```
