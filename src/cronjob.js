// Schedule cronjobs with jobs.
const cron = require("cron");
const job = require("./job");
const decorator = require("./decorator");
const config = require("./config");

function onSecond() {
  new cron.CronJob("* * * * * *", async function callback() {
    await job.call("addAddSubtract");
  }).start();
}

function onMinute() {
  new cron.CronJob("* * * * *", async function callback() {
    await job.call("reset");
  }).start();
}

const cronjob = new decorator("Cronjob", onSecond, onMinute);

if (config.cronjobName) {
  cronjob.call(...config.cronjobName.split(","));
} else {
  cronjob.callAll();
}

// https://www.npmjs.com/package/cron
