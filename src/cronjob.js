// Schedule cronjobs with jobs.
const cron = require("cron");
const job = require("./job");
const withLogger = require("./withLogger");
const config = require("./config");

const onSecond = new cron.CronJob("* * * * * *", job.addAddSubtract);

const onMinute = new cron.CronJob("* * * * *", job.reset);

module.exports = withLogger("Cronjob", { onSecond, onMinute });

if (config.cronjobName) {
  module.exports[config.cronjobName]();
} else {
  for (let key of Object.keys(module.exports)) module.exports[key]();
}

// https://www.npmjs.com/package/cron
