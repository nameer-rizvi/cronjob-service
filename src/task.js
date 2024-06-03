// Create tasks.
const database = require("./database");
const decorator = require("./decorator");
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

const task = new decorator("Task", add, subtract, reset);

if (config.taskName) task.call(...config.taskName.split(","));

module.exports = task;
