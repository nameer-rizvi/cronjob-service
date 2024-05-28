require("dotenv").config();

const config = {
  nodeEnv: process.env.NODE_ENV,
  nodeEnvInProduction: process.env.NODE_ENV === "production",
  taskName: process.env.TASK,
  jobName: process.env.JOB,
  cronjobName: process.env.CRONJOB,
};

module.exports = config;

// https://www.npmjs.com/package/dotenv
