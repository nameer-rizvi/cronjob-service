// Database class is for demo purposes only.
class Database {
  constructor() {
    this.count = 0;
  }

  add() {
    this.count++;
  }

  subtract() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

module.exports = new Database();
