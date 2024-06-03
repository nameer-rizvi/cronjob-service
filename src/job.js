// Create jobs with tasks.
const task = require("./task");
const decorator = require("./decorator");
const config = require("./config");

async function addAddSubtract() {
  await task.call("add", "add", "subtract");
}

async function reset() {
  await task.call("reset");
}

const job = new decorator("Job", addAddSubtract, reset);

if (config.jobName) job.call(...config.jobName.split(","));

module.exports = job;
