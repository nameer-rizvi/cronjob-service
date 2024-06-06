// Create jobs with tasks.
const task = require("./task");
const Decorator = require("./decorator");
const config = require("./config");

async function addAddSubtract() {
  await task.call("add", "add", "subtract");
}

async function reset() {
  await task.call("reset");
}

const job = new Decorator("Job", addAddSubtract, reset);

if (config.job) job.call(...config.job.split(","));

module.exports = job;
