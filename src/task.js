// Create tasks.
const database = require("./database");
const withLogger = require("./withLogger");
const config = require("./config");

function add() {
  database.add();
}

function subtract() {
  database.subtract();
}

function reset() {
  database.reset();
}

module.exports = withLogger("Task", { add, subtract, reset });

if (config.taskName) module.exports[config.taskName]();
