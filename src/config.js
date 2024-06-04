require("dotenv").config();

const config = {
  nodeEnv: process.env.NODE_ENV,
  cronjobName: process.env.CRONJOB,
  jobName: process.env.JOB,
  taskName: process.env.TASK,
};

module.exports = config;

// https://www.npmjs.com/package/dotenv
