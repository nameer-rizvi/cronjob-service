require("dotenv").config();

const config = {
  nodeEnv: process.env.NODE_ENV,
  cronjob: process.env.CRONJOB,
  job: process.env.JOB,
  task: process.env.TASK,
};

module.exports = config;

// https://www.npmjs.com/package/dotenv
