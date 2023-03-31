const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./hello-world.sqlite');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS messages (content TEXT)');
});

module.exports = db;
