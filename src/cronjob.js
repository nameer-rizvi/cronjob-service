// Schedule cronjobs with jobs.
const cron = require("cron");
const job = require("./job");
const Decorator = require("./decorator");
const config = require("./config");

function onSecond() {
  new cron.CronJob("* * * * * *", job.method.addAddSubtract).start();
}

function onMinute() {
  new cron.CronJob("* * * * *", job.method.reset).start();
}

const cronjob = new Decorator("Cronjob", onSecond, onMinute);

if (config.cronjob) {
  cronjob.call(...config.cronjob.split(","));
} else {
  cronjob.callAll();
}

// https://www.npmjs.com/package/cron
