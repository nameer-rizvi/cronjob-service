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

if (config.task) task.call(...config.task.split(","));

module.exports = task;
