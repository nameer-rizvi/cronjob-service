// Create jobs with tasks.
const task = require("./task");
const withLogger = require("./withLogger");
const config = require("./config");

function addAddSubtract() {
  task.add();
  task.add();
  task.subtract();
}

function reset() {
  task.reset();
}

module.exports = withLogger("Job", { addAddSubtract, reset });

if (config.jobName) module.exports[config.jobName]();
